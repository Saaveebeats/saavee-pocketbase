/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("beats");

  const existing = collection.fields.getByName("featured_until");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("featured_until"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "featured_until",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("beats");
  collection.fields.removeByName("featured_until");
  return app.save(collection);
})