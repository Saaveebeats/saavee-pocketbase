/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("producer_followers");
  collection.indexes.push("CREATE UNIQUE INDEX idx_producer_followers_producer_follower ON producer_followers (producer_id, follower_id)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("producer_followers");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_producer_followers_producer_follower"));
  return app.save(collection);
})