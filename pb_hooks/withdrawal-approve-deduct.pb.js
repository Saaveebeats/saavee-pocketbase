/// <reference path="../pb_data/types.d.ts" />
onRecordUpdate((e) => {
  if (e.record.get("status") === "approved") {
    const sellerId = e.record.get("seller_id");
    const amount = e.record.get("amount");
    if (sellerId && amount) {
      const wallet = $app.findFirstRecordByData("seller_wallet", "seller_id", sellerId);
      if (wallet) {
        const currentBalance = wallet.get("balance") || 0;
        wallet.set("balance", currentBalance - amount);
        $app.save(wallet);
      }
    }
  }
  e.next();
}, "withdrawals");