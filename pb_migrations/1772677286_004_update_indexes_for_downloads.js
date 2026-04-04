/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("downloads");
  collection.indexes.push("CREATE UNIQUE INDEX idx_downloads_download_token ON downloads (download_token)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("downloads");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_downloads_download_token"));
  return app.save(collection);
})