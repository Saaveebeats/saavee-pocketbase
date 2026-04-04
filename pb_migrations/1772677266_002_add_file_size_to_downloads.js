/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("downloads");

  const existing = collection.fields.getByName("file_size");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("file_size"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "file_size",
    required: false,
    min: 0
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("downloads");
  collection.fields.removeByName("file_size");
  return app.save(collection);
})