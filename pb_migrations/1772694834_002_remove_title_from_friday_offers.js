/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("title");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.add(new TextField({
    name: "title",
    required: true
  }));
  return app.save(collection);
})