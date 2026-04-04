/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("expiration_date");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.add(new DateField({
    name: "expiration_date",
    required: false
  }));
  return app.save(collection);
})