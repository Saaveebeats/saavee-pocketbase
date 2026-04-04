/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  // Check if this is an exclusive license purchase
  const licenseType = e.record.get("license_type");
  
  if (licenseType !== "exclusive") {
    e.next();
    return;
  }
  
  const beatId = e.record.get("beat_id");
  
  // Update beat to mark exclusive as sold
  try {
    const beat = $app.findRecordById("beats", beatId);
    beat.set("is_exclusive_sold", true);
    $app.save(beat);
  } catch (err) {
    console.log("Error updating beat exclusive status: " + err.message);
  }
  
  // Get beat producer info and send email
  try {
    const beat = $app.findRecordById("beats", beatId);
    const producerId = beat.get("producer_id");
    
    // Find seller record to get email
    const seller = $app.findFirstRecordByData("sellers", "user_id", producerId);
    if (!seller) {
      console.log("Could not find seller for producer " + producerId);
      e.next();
      return;
    }
    
    // Get producer user email
    const producer = $app.findRecordById("users", producerId);
    const producerEmail = producer.get("email");
    const producerName = producer.get("name") || "Producer";
    
    const beatTitle = beat.get("title");
    const licenseId = e.record.id;
    
    const message = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress,
        name: $app.settings().meta.senderName
      },
      to: [{ address: producerEmail }],
      subject: "Exclusive License Sold - " + beatTitle,
      html: "<h2>Exclusive License Sold!</h2>" +
            "<p>Congratulations " + producerName + "!</p>" +
            "<p>Your beat <strong>" + beatTitle + "</strong> has been purchased with an exclusive license.</p>" +
            "<p><strong>License ID:</strong> " + licenseId + "</p>" +
            "<p>This beat is now marked as exclusively sold and is no longer available for other buyers.</p>" +
            "<p>Check your dashboard for earnings details.</p>" +
            "<p>Thank you for your contribution to our platform!</p>"
    });
    
    $app.newMailClient().send(message);
  } catch (err) {
    console.log("Error sending exclusive license email: " + err.message);
  }
  
  e.next();
}, "licenses");