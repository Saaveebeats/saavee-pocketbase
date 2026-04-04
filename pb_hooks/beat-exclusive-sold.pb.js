/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const paymentStatus = e.record.get("payment_status");
  
  if (paymentStatus === "completed") {
    const items = e.record.get("items");
    
    if (items) {
      try {
        const itemsArray = typeof items === "string" ? JSON.parse(items) : items;
        
        if (Array.isArray(itemsArray)) {
          for (let i = 0; i < itemsArray.length; i++) {
            const item = itemsArray[i];
            if (item.license_type === "exclusive") {
              const beatId = item.product_id;
              const beat = $app.findRecordById("beats", beatId);
              beat.set("is_exclusive_sold", true);
              $app.save(beat);
            }
          }
        }
      } catch (err) {
        console.log("Error updating exclusive beat: " + err.message);
      }
    }
  }
  
  e.next();
}, "orders");