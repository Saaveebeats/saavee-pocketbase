/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("notifications");

  const existing = collection.fields.getByName("is_read");
  if (existing) {
    if (existing.type === "bool") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("is_read"); // exists with wrong type, remove first
  }

  collection.fields.add(new BoolField({
    name: "is_read",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("notifications");
  collection.fields.removeByName("is_read");
  return app.save(collection);
})