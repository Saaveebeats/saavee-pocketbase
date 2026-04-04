/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");

  const existing = collection.fields.getByName("promotion_type");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("promotion_type"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "promotion_type",
    values: ["paid", "admin_featured"]
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");
  collection.fields.removeByName("promotion_type");
  return app.save(collection);
})