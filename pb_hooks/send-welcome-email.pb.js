/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: e.record.get("email") }],
    subject: "Welcome to Our Music Platform!",
    html: "<h1>Welcome!</h1><p>Thank you for signing up. We're excited to have you on our platform.</p><p>Start exploring beats, samples, and single hits today!</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "users");