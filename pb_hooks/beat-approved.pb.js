/// <reference path="../pb_data/types.d.ts" />
onRecordAfterUpdateSuccess((e) => {
  const status = e.record.get("status");
  const originalStatus = e.record.original().get("status");
  
  if (status === "approved" && originalStatus !== "approved") {
    const producerId = e.record.get("producer_id");
    
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
        subject: "Your Beat Has Been Approved!",
        html: "<h2>Great News!</h2><p>Your beat <strong>" + beatTitle + "</strong> has been approved and is now live on the marketplace.</p><p>You can now start earning from your creation!</p>"
      });
      $app.newMailClient().send(message);
    } catch (err) {
      console.log("Error sending approval email: " + err.message);
    }
  }
  
  e.next();
}, "beats");