/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("downloads");

  const existing = collection.fields.getByName("expiration_date");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("expiration_date"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "expiration_date",
    required: true
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("downloads");
  collection.fields.removeByName("expiration_date");
  return app.save(collection);
})