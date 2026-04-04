/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  // This hook sends confirmation email when subscription is purchased
  const userId = e.record.get("user_id");
  const planId = e.record.get("plan_id");
  const renewalDate = e.record.get("renewal_date");
  
  try {
    const user = $app.findRecordById("users", userId);
    const plan = $app.findRecordById("subscription_plans", planId);
    
    if (user && plan) {
      const userEmail = user.get("email");
      const planName = plan.get("name");
      const planPrice = plan.get("price");
      const features = plan.get("features");
      
      let featuresHtml = "<ul>";
      if (features && Array.isArray(features)) {
        features.forEach((feature) => {
          featuresHtml += "<li>" + feature + "</li>";
        });
      }
      featuresHtml += "</ul>";
      
      const message = new MailerMessage({
        from: {
          address: $app.settings().meta.senderAddress,
          name: $app.settings().meta.senderName
        },
        to: [{ address: userEmail }],
        subject: "Subscription Confirmed - " + planName,
        html: "<h2>Subscription Confirmed!</h2><p>Thank you for subscribing to our platform.</p><p><strong>Plan:</strong> " + planName + "</p><p><strong>Price:</strong> $" + planPrice + "</p><p><strong>Renewal Date:</strong> " + renewalDate + "</p><p><strong>Features:</strong></p>" + featuresHtml + "<p>You can manage your subscription in your account settings.</p>"
      });
      $app.newMailClient().send(message);
    }
  } catch (err) {
    console.log("Error sending subscription email:", err);
  }
  e.next();
}, "user_subscriptions");