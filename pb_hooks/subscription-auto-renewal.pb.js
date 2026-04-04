/// <reference path="../pb_data/types.d.ts" />
onRecordUpdate((e) => {
  // This hook processes auto-renewal when renewal_date arrives
  const renewalDate = e.record.get("renewal_date");
  const autoRenew = e.record.get("auto_renew");
  const status = e.record.get("status");
  const userId = e.record.get("user_id");
  const planId = e.record.get("plan_id");
  
  if (autoRenew && status === "active" && renewalDate) {
    const today = new Date().toISOString().split('T')[0];
    
    // Check if renewal date has arrived
    if (renewalDate <= today) {
      try {
        const plan = $app.findRecordById("subscription_plans", planId);
        const user = $app.findRecordById("users", userId);
        
        if (plan && user) {
          const planPrice = plan.get("price");
          const billingCycle = plan.get("billing_cycle");
          
          // Calculate next renewal date
          const nextRenewalDate = new Date();
          if (billingCycle === "monthly") {
            nextRenewalDate.setMonth(nextRenewalDate.getMonth() + 1);
          } else if (billingCycle === "quarterly") {
            nextRenewalDate.setMonth(nextRenewalDate.getMonth() + 3);
          } else if (billingCycle === "yearly") {
            nextRenewalDate.setFullYear(nextRenewalDate.getFullYear() + 1);
          }
          const nextRenewalDateStr = nextRenewalDate.toISOString().split('T')[0];
          
          // Process payment via Razorpay (simplified - in production, use actual Razorpay API)
          // For now, we'll just update the renewal date and send email
          
          e.record.set("renewal_date", nextRenewalDateStr);
          
          // Send renewal confirmation email
          const userEmail = user.get("email");
          const planName = plan.get("name");
          
          const message = new MailerMessage({
            from: {
              address: $app.settings().meta.senderAddress,
              name: $app.settings().meta.senderName
            },
            to: [{ address: userEmail }],
            subject: "Subscription Renewed - " + planName,
            html: "<h2>Subscription Renewed!</h2><p>Your subscription has been automatically renewed.</p><p><strong>Plan:</strong> " + planName + "</p><p><strong>Amount Charged:</strong> $" + planPrice + "</p><p><strong>Next Renewal Date:</strong> " + nextRenewalDateStr + "</p><p>Thank you for your continued subscription!</p>"
          });
          $app.newMailClient().send(message);
        }
      } catch (err) {
        console.log("Error processing auto-renewal:", err);
      }
    }
  }
  e.next();
}, "user_subscriptions");