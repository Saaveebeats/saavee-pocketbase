/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("orders");

  const existing = collection.fields.getByName("license_type");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("license_type"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "license_type",
    required: false,
    values: ["basic", "premium", "unlimited", "exclusive"]
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("orders");
  collection.fields.removeByName("license_type");
  return app.save(collection);
})