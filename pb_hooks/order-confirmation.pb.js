/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: e.record.get("user_id") }],
    subject: "Order Confirmation #" + e.record.id,
    html: "<h1>Order Confirmation</h1><p><strong>Order ID:</strong> " + e.record.id + "</p><p><strong>Beat Title:</strong> " + e.record.get("song_title") + "</p><p><strong>License Type:</strong> " + e.record.get("license_type") + "</p><p><strong>Price:</strong> $" + e.record.get("price") + "</p><p>Thank you for your purchase!</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "orders");