/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("blacklist_emails");
  collection.indexes.push("CREATE UNIQUE INDEX idx_blacklist_emails_email ON blacklist_emails (email)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("blacklist_emails");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_blacklist_emails_email"));
  return app.save(collection);
})