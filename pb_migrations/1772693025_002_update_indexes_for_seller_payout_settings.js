/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("seller_payout_settings");
  collection.indexes.push("CREATE UNIQUE INDEX idx_seller_payout_settings_seller_id ON seller_payout_settings (seller_id)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("seller_payout_settings");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_seller_payout_settings_seller_id"));
  return app.save(collection);
})