/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("description");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.add(new TextField({
    name: "description",
    required: false
  }));
  return app.save(collection);
})