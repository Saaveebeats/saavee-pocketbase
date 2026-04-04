/// <reference path="../pb_data/types.d.ts" />
onRecordAfterUpdateSuccess((e) => {
  const paymentStatus = e.record.get("payment_status");
  const originalPaymentStatus = e.record.original().get("payment_status");
  
  if (paymentStatus === "completed" && originalPaymentStatus !== "completed") {
    const items = e.record.get("items");
    const totalPrice = e.record.get("total_price");
    
    if (items && totalPrice) {
      try {
        const itemsArray = typeof items === "string" ? JSON.parse(items) : items;
        
        if (Array.isArray(itemsArray)) {
          for (let i = 0; i < itemsArray.length; i++) {
            const item = itemsArray[i];
            const beatId = item.product_id;
            
            try {
              const beat = $app.findRecordById("beats", beatId);
              const sellerId = beat.get("producer_id");
              
              const sellerWallet = $app.findFirstRecordByData("seller_wallet", "seller_id", sellerId);
              const earningsAmount = totalPrice * 0.8;
              const currentPending = sellerWallet.get("pending_earnings") || 0;
              
              sellerWallet.set("pending_earnings", currentPending + earningsAmount);
              $app.save(sellerWallet);
            } catch (beatErr) {
              console.log("Error processing earnings for beat " + beatId + ": " + beatErr.message);
            }
          }
        }
      } catch (err) {
        console.log("Error processing order earnings: " + err.message);
      }
    }
  }
  
  e.next();
}, "orders");