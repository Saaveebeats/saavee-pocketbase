/// <reference path="../pb_data/types.d.ts" />
onRecordEnrich((e) => {
  const endDate = new Date(e.record.get("end_date"));
  const today = new Date();
  const daysUntilExpiry = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));
  
  if (daysUntilExpiry === 7) {
    const user = $app.findRecordById("users", e.record.get("user_id") || e.record.get("seller_id"));
    if (user) {
      const message = new MailerMessage({
        from: {
          address: $app.settings().meta.senderAddress,
          name: $app.settings().meta.senderName
        },
        to: [{ address: user.get("email") }],
        subject: "Your Subscription Expires in 7 Days",
        html: "<h1>Subscription Renewal Reminder</h1><p>Your subscription will expire on " + endDate.toDateString() + ".</p><p>Renew now to continue enjoying uninterrupted access to all features.</p><p><a href='https://yoursite.com/renew'>Renew Subscription</a></p>"
      });
      $app.newMailClient().send(message);
    }
  }
  e.next();
}, "buyer_subscriptions");

onRecordEnrich((e) => {
  const endDate = new Date(e.record.get("end_date"));
  const today = new Date();
  const daysUntilExpiry = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));
  
  if (daysUntilExpiry === 7) {
    const user = $app.findRecordById("users", e.record.get("seller_id"));
    if (user) {
      const message = new MailerMessage({
        from: {
          address: $app.settings().meta.senderAddress,
          name: $app.settings().meta.senderName
        },
        to: [{ address: user.get("email") }],
        subject: "Your Seller Subscription Expires in 7 Days",
        html: "<h1>Subscription Renewal Reminder</h1><p>Your seller subscription will expire on " + endDate.toDateString() + ".</p><p>Renew now to continue selling your beats on our platform.</p><p><a href='https://yoursite.com/renew'>Renew Subscription</a></p>"
      });
      $app.newMailClient().send(message);
    }
  }
  e.next();
}, "seller_subscriptions");