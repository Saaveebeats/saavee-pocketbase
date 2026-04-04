/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("download_links");
  collection.indexes.push("CREATE UNIQUE INDEX idx_download_links_token ON download_links (token)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("download_links");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_download_links_token"));
  return app.save(collection);
})