/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("downloads");

  const existing = collection.fields.getByName("token_expiration");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("token_expiration"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "token_expiration",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("downloads");
  collection.fields.removeByName("token_expiration");
  return app.save(collection);
})