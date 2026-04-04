/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("users");
  const field = collection.fields.getByName("status");
  field.values = ["active", "suspended", "banned"];
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("users");
  const field = collection.fields.getByName("status");
  field.values = ["active", "suspended", "banned"];
  return app.save(collection);
})