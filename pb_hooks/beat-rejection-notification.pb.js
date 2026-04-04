/// <reference path="../pb_data/types.d.ts" />
onRecordUpdate((e) => {
  const original = e.record.original();
  if (original.get("status") !== "rejected" && e.record.get("status") === "rejected") {
    const sellerUser = $app.findRecordById("users", e.record.get("producer_id"));
    if (sellerUser) {
      const message = new MailerMessage({
        from: {
          address: $app.settings().meta.senderAddress,
          name: $app.settings().meta.senderName
        },
        to: [{ address: sellerUser.get("email") }],
        subject: "Beat Submission - Review Feedback",
        html: "<h1>Beat Submission Feedback</h1><p>Thank you for submitting your beat <strong>" + e.record.get("title") + "</strong>.</p><p>Unfortunately, it was not approved at this time.</p><p><strong>Review Notes:</strong> " + (e.record.get("review_notes") || "No additional notes provided") + "</p><p>Feel free to make improvements and resubmit.</p>"
      });
      $app.newMailClient().send(message);
    }
  }
  e.next();
}, "beats");