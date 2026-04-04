/// <reference path="../pb_data/types.d.ts" />
onRecordAfterUpdateSuccess((e) => {
  const status = e.record.get("status");
  const originalStatus = e.record.original().get("status");
  
  if (status === "rejected" && originalStatus !== "rejected") {
    const producerId = e.record.get("producer_id");
    const reviewNotes = e.record.get("review_notes") || "No specific reason provided";
    
    try {
      const producer = $app.findRecordById("users", producerId);
      const producerEmail = producer.get("email");
      const beatTitle = e.record.get("title");
      
      const message = new MailerMessage({
        from: {
          address: $app.settings().meta.senderAddress,
          name: $app.settings().meta.senderName
        },
        to: [{ address: producerEmail }],
        subject: "Beat Submission Rejected",
        html: "<h2>Submission Update</h2><p>Unfortunately, your beat <strong>" + beatTitle + "</strong> was not approved.</p><p><strong>Reason:</strong> " + reviewNotes + "</p><p>Please review the feedback and feel free to resubmit an improved version.</p>"
      });
      $app.newMailClient().send(message);
    } catch (err) {
      console.log("Error sending rejection email: " + err.message);
    }
  }
  
  e.next();
}, "beats");