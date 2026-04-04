/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("blacklist_ips");
  collection.indexes.push("CREATE UNIQUE INDEX idx_blacklist_ips_ip_address ON blacklist_ips (ip_address)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("blacklist_ips");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_blacklist_ips_ip_address"));
  return app.save(collection);
})