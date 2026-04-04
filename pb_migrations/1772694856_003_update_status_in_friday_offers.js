/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  const field = collection.fields.getByName("status");
  field.values = ["scheduled", "active", "expired", "locked", "disabled"];
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  const field = collection.fields.getByName("status");
  field.values = ["active", "inactive"];
  return app.save(collection);
})