/// <reference path="../pb_data/types.d.ts" />
onRecordAfterUpdateSuccess((e) => {
  const status = e.record.get("status");
  const originalStatus = e.record.original().get("status");
  
  if (status === "approved" && originalStatus !== "approved") {
    const sellerId = e.record.get("seller_id");
    const withdrawalAmount = e.record.get("amount");
    
    try {
      const sellerWallet = $app.findFirstRecordByData("seller_wallet", "seller_id", sellerId);
      const currentBalance = sellerWallet.get("balance") || 0;
      
      sellerWallet.set("balance", currentBalance - withdrawalAmount);
      $app.save(sellerWallet);
    } catch (err) {
      console.log("Error updating seller wallet on withdrawal approval: " + err.message);
    }
  }
  
  e.next();
}, "withdrawals");