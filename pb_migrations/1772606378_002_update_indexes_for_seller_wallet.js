/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("seller_wallet");
  collection.indexes.push("CREATE UNIQUE INDEX idx_seller_wallet_seller_id ON seller_wallet (seller_id)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("seller_wallet");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_seller_wallet_seller_id"));
  return app.save(collection);
})