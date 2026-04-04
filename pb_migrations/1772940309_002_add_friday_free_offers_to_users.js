/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("users");

  const existing = collection.fields.getByName("friday_free_offers");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("friday_free_offers"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "friday_free_offers",
    required: false,
    min: 0
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("users");
  collection.fields.removeByName("friday_free_offers");
  return app.save(collection);
})