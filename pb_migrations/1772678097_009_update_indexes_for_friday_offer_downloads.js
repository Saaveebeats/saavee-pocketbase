/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offer_downloads");
  collection.indexes.push("CREATE UNIQUE INDEX idx_friday_offer_downloads_user_offer ON friday_offer_downloads (user_id, offer_id)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offer_downloads");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_friday_offer_downloads_user_offer"));
  return app.save(collection);
})