/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("orders");

  const existing = collection.fields.getByName("usage_platform");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("usage_platform"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "usage_platform"
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("orders");
  collection.fields.removeByName("usage_platform");
  return app.save(collection);
})