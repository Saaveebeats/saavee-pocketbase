/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");

  const existing = collection.fields.getByName("promotion_status");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("promotion_status"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "promotion_status",
    values: ["active", "expired"]
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");
  collection.fields.removeByName("promotion_status");
  return app.save(collection);
})