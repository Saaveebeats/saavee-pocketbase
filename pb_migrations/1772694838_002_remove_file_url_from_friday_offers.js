/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("file_url");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.add(new TextField({
    name: "file_url",
    required: true
  }));
  return app.save(collection);
})