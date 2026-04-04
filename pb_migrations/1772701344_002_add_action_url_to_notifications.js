/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("notifications");

  const existing = collection.fields.getByName("action_url");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("action_url"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "action_url",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("notifications");
  collection.fields.removeByName("action_url");
  return app.save(collection);
})