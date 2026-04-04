/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("policies");
  collection.indexes.push("CREATE UNIQUE INDEX idx_policies_slug ON policies (slug)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("policies");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_policies_slug"));
  return app.save(collection);
})