/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("downloads");

  const existing = collection.fields.getByName("file_type");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("file_type"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "file_type",
    required: false,
    values: ["MP3", "WAV", "Stems"]
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("downloads");
  collection.fields.removeByName("file_type");
  return app.save(collection);
})