/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("blacklist_phones");
  collection.indexes.push("CREATE UNIQUE INDEX idx_blacklist_phones_phone ON blacklist_phones (phone)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("blacklist_phones");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_blacklist_phones_phone"));
  return app.save(collection);
})