/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("beats");

  const existing = collection.fields.getByName("license_types");
  if (existing) {
    if (existing.type === "json") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("license_types"); // exists with wrong type, remove first
  }

  collection.fields.add(new JSONField({
    name: "license_types",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("beats");
  collection.fields.removeByName("license_types");
  return app.save(collection);
})