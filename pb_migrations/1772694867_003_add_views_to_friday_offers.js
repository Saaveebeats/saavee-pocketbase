/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");

  const existing = collection.fields.getByName("views");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("views"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "views",
    required: false,
    min: 0
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("views");
  return app.save(collection);
})