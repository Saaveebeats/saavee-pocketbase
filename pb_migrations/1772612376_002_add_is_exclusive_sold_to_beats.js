/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("beats");

  const existing = collection.fields.getByName("is_exclusive_sold");
  if (existing) {
    if (existing.type === "bool") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("is_exclusive_sold"); // exists with wrong type, remove first
  }

  collection.fields.add(new BoolField({
    name: "is_exclusive_sold",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("beats");
  collection.fields.removeByName("is_exclusive_sold");
  return app.save(collection);
})