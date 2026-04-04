/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");

  const existing = collection.fields.getByName("discount_percentage");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("discount_percentage"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "discount_percentage",
    required: true,
    min: 0,
    max: 100
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("discount_percentage");
  return app.save(collection);
})