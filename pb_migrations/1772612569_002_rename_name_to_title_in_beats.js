/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("beats");
  const field = collection.fields.getByName("name");
  field.name = "title";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("beats");
  const field = collection.fields.getByName("title");
  field.name = "name";
  return app.save(collection);
})