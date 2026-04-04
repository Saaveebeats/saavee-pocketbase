/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("seller_profiles");
  collection.indexes.push("CREATE UNIQUE INDEX idx_seller_profiles_user_id ON seller_profiles (user_id)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("seller_profiles");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_seller_profiles_user_id"));
  return app.save(collection);
})