/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const userRecord = $app.findRecordById("users", e.record.get("user_id"));
  if (!userRecord) {
    e.next();
    return;
  }
  
  const userEmail = userRecord.get("email");
  const orderId = e.record.id;
  const totalPrice = e.record.get("total_price");
  const items = e.record.get("items");
  
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: userEmail }],
    subject: "Order Confirmation #" + orderId,
    html: "<h1>Order Confirmation</h1><p><strong>Order ID:</strong> " + orderId + "</p><p><strong>Total Price:</strong> $" + totalPrice + "</p><p>Your download links will be available shortly. Check your account to access your purchases.</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "orders");