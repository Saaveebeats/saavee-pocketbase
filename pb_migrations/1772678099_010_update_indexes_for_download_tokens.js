/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("download_tokens");
  collection.indexes.push("CREATE UNIQUE INDEX idx_download_tokens_token ON download_tokens (token)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("download_tokens");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_download_tokens_token"));
  return app.save(collection);
})