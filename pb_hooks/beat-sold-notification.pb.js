/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  if (e.record.get("payment_status") === "completed") {
    const beat = $app.findRecordById("beats", e.record.get("beat_id"));
    if (beat) {
      const seller = $app.findFirstRecordByData("sellers", "user_id", beat.get("producer_id"));
      if (seller) {
        const sellerUser = $app.findRecordById("users", beat.get("producer_id"));
        if (sellerUser) {
          const message = new MailerMessage({
            from: {
              address: $app.settings().meta.senderAddress,
              name: $app.settings().meta.senderName
            },
            to: [{ address: sellerUser.get("email") }],
            subject: "Your Beat Was Sold!",
            html: "<h1>Beat Sold Notification</h1><p>Congratulations! Your beat <strong>" + beat.get("title") + "</strong> has been purchased.</p><p><strong>License Type:</strong> " + e.record.get("license_type") + "</p><p><strong>Amount:</strong> $" + e.record.get("price") + "</p><p>Check your wallet for earnings details.</p>"
          });
          $app.newMailClient().send(message);
        }
      }
    }
  }
  e.next();
}, "orders");