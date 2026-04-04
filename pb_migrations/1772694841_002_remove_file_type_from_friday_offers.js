/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("file_type");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.add(new SelectField({
    name: "file_type",
    required: true,
    values: ["beat", "sample", "kit"]
  }));
  return app.save(collection);
})