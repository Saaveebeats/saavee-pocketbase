/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("notifications");

  const existing = collection.fields.getByName("title");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("title"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "title",
    required: true
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("notifications");
  collection.fields.removeByName("title");
  return app.save(collection);
})