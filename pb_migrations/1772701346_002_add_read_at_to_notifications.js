/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("notifications");

  const existing = collection.fields.getByName("read_at");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("read_at"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "read_at",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("notifications");
  collection.fields.removeByName("read_at");
  return app.save(collection);
})