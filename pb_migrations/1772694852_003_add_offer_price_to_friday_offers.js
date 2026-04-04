/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");

  const existing = collection.fields.getByName("offer_price");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("offer_price"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "offer_price",
    required: true,
    min: 0
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("offer_price");
  return app.save(collection);
})