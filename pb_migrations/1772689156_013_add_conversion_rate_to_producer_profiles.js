/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");

  const existing = collection.fields.getByName("conversion_rate");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("conversion_rate"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "conversion_rate"
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");
  collection.fields.removeByName("conversion_rate");
  return app.save(collection);
})