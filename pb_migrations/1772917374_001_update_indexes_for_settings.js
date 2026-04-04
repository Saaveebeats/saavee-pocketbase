/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("settings");
  collection.indexes.push("CREATE UNIQUE INDEX idx_settings_setting_key ON settings (setting_key)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("settings");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_settings_setting_key"));
  return app.save(collection);
})