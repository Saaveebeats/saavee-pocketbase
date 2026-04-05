/// <reference path="../pb_data/types.d.ts" />
onRecordAfterUpdateSuccess((e) => {
  // Only send email when status changes to 'completed'
  const original = e.record.original();
  const currentStatus = e.record.get("payment_status");
  const previousStatus = original ? original.get("payment_status") : null;
  
  if (currentStatus !== "completed" || previousStatus === "completed") {
    e.next();
    return;
  }
  
  const userId = e.record.get("user_id");
  const orderId = e.record.id;
  const totalPrice = e.record.get("total_price");
  const items = e.record.get("items");
  const songTitle = e.record.get("song_title");
  const artistName = e.record.get("artist_name");
  const usagePlatform = e.record.get("usage_platform");
  
  // Get user email
  let userEmail = "";
  try {
    const user = $app.findRecordById("users", userId);
    userEmail = user.get("email");
  } catch (err) {
    console.log("Could not find user email for order " + orderId);
    e.next();
    return;
  }
  
  // Build order details HTML
  let itemsHtml = "<p><strong>Items:</strong> " + (items || "N/A") + "</p>";
  if (songTitle) {
    itemsHtml += "<p><strong>Song Title:</strong> " + songTitle + "</p>";
  }
  if (artistName) {
    itemsHtml += "<p><strong>Artist Name:</strong> " + artistName + "</p>";
  }
  if (usagePlatform) {
    itemsHtml += "<p><strong>Usage Platform:</strong> " + usagePlatform + "</p>";
  }
  
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: userEmail }],
    subject: "Order Confirmation #" + orderId,
    html: "<h2>Order Confirmed!</h2>" +
          "<p>Thank you for your purchase.</p>" +
          "<p><strong>Order ID:</strong> " + orderId + "</p>" +
          "<p><strong>Total Amount:</strong> $" + totalPrice + "</p>" +
          itemsHtml +
          "<p><a href='https://yourplatform.com/downloads/" + orderId + "'>Download Your Files</a></p>" +
          "<p><a href='https://yourplatform.com/invoice/" + orderId + "'>View Invoice</a></p>" +
          "<p>Thank you for using our platform!</p>"
  });
  
  try {
    $app.newMailClient().send(message);
  } catch (err) {
    console.log("Error sending order confirmation email: " + err.message);
  }
  
  e.next();
}, "orders");

fix: disable email hook (render crash fix)
