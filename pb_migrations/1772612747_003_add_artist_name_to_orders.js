/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("orders");

  const existing = collection.fields.getByName("artist_name");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("artist_name"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "artist_name"
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("orders");
  collection.fields.removeByName("artist_name");
  return app.save(collection);
})