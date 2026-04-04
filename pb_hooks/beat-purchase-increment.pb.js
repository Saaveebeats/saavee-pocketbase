/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  // This hook increments sales/revenue in beat_analytics and generates download_link when beat is purchased
  const paymentStatus = e.record.get("payment_status");
  const userId = e.record.get("user_id");
  const totalPrice = e.record.get("total_price");
  const orderId = e.record.id;
  
  if (paymentStatus === "completed") {
    try {
      // Parse items to get beat_id and product_type
      const itemsStr = e.record.get("items");
      if (!itemsStr) {
        e.next();
        return;
      }
      
      let items = [];
      try {
        items = JSON.parse(itemsStr);
      } catch (parseErr) {
        console.log("Could not parse items:", parseErr);
        e.next();
        return;
      }
      
      const today = new Date().toISOString().split('T')[0];
      
      // Process each item
      items.forEach((item) => {
        const beatId = item.product_id;
        const itemPrice = item.price || 0;
        
        try {
          // Find or create analytics record for today
          let analytics = $app.findFirstRecordByFilter("beat_analytics", "beat_id = {:beatId} && date = {:date}", {
            beatId: beatId,
            date: today
          });
          
          if (analytics) {
            // Increment sales and revenue
            const currentSales = analytics.get("sales") || 0;
            const currentRevenue = analytics.get("revenue") || 0;
            analytics.set("sales", currentSales + 1);
            analytics.set("revenue", currentRevenue + itemPrice);
            $app.save(analytics);
          } else {
            // Create new analytics record
            const newAnalytics = new Record($app.findCollectionByNameOrId("beat_analytics"), {
              beat_id: beatId,
              date: today,
              plays: 0,
              downloads: 0,
              sales: 1,
              revenue: itemPrice
            });
            $app.save(newAnalytics);
          }
          
          // Generate download_link with 24-hour expiration
          const expiresAt = new Date();
          expiresAt.setDate(expiresAt.getDate() + 1);
          const expiresAtStr = expiresAt.toISOString().split('T')[0];
          
          // Generate unique token
          const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          
          const downloadLink = new Record($app.findCollectionByNameOrId("download_links"), {
            beat_id: beatId,
            user_id: userId,
            token: token,
            expires_at: expiresAtStr,
            is_used: false
          });
          $app.save(downloadLink);
          
          // Send email with download link
          const user = $app.findRecordById("users", userId);
          const beat = $app.findRecordById("beats", beatId);
          
          if (user && beat) {
            const userEmail = user.get("email");
            const beatTitle = beat.get("title");
            const downloadUrl = "https://yourapp.com/download/" + token; // Replace with actual domain
            
            const message = new MailerMessage({
              from: {
                address: $app.settings().meta.senderAddress,
                name: $app.settings().meta.senderName
              },
              to: [{ address: userEmail }],
              subject: "Your Beat Download Link - " + beatTitle,
              html: "<h2>Download Your Beat</h2><p>Thank you for your purchase!</p><p><strong>Beat:</strong> " + beatTitle + "</p><p><strong>Download Link:</strong> <a href='" + downloadUrl + "'>Click here to download</a></p><p><em>This link expires in 24 hours.</em></p>"
            });
            $app.newMailClient().send(message);
          }
        } catch (itemErr) {
          console.log("Error processing item:", itemErr);
        }
      });
    } catch (err) {
      console.log("Error in purchase increment:", err);
    }
  }
  e.next();
}, "orders");