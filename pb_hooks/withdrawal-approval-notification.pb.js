/// <reference path="../pb_data/types.d.ts" />
onRecordUpdate((e) => {
  const original = e.record.original();
  if (original.get("status") !== "approved" && e.record.get("status") === "approved") {
    const sellerUser = $app.findRecordById("users", e.record.get("seller_id"));
    if (sellerUser) {
      const message = new MailerMessage({
        from: {
          address: $app.settings().meta.senderAddress,
          name: $app.settings().meta.senderName
        },
        to: [{ address: sellerUser.get("email") }],
        subject: "Withdrawal Approved",
        html: "<h1>Withdrawal Confirmation</h1><p>Your withdrawal request has been approved!</p><p><strong>Amount:</strong> $" + e.record.get("amount") + "</p><p><strong>Method:</strong> " + e.record.get("method") + "</p><p>The funds will be transferred to your account within 3-5 business days.</p>"
      });
      $app.newMailClient().send(message);
    }
  }
  e.next();
}, "withdrawals");