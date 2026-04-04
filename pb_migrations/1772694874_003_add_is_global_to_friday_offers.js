/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");

  const existing = collection.fields.getByName("is_global");
  if (existing) {
    if (existing.type === "bool") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("is_global"); // exists with wrong type, remove first
  }

  collection.fields.add(new BoolField({
    name: "is_global",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("is_global");
  return app.save(collection);
})