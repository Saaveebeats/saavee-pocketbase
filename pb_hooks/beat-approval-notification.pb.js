/// <reference path="../pb_data/types.d.ts" />
onRecordUpdate((e) => {
  const original = e.record.original();
  if (original.get("status") !== "approved" && e.record.get("status") === "approved") {
    const sellerUser = $app.findRecordById("users", e.record.get("producer_id"));
    if (sellerUser) {
      const message = new MailerMessage({
        from: {
          address: $app.settings().meta.senderAddress,
          name: $app.settings().meta.senderName
        },
        to: [{ address: sellerUser.get("email") }],
        subject: "Your Beat Has Been Approved!",
        html: "<h1>Beat Approval Notification</h1><p>Great news! Your beat <strong>" + e.record.get("title") + "</strong> has been approved and is now live on the platform.</p><p>Start earning from your music today!</p>"
      });
      $app.newMailClient().send(message);
    }
  }
  e.next();
}, "beats");