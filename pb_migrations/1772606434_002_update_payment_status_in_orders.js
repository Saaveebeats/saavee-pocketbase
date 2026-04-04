/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("orders");
  const field = collection.fields.getByName("payment_status");
  field.values = ["pending", "completed", "failed"];
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("orders");
  const field = collection.fields.getByName("payment_status");
  field.values = [];
  return app.save(collection);
})