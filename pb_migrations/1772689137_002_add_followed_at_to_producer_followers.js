/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("producer_followers");

  const existing = collection.fields.getByName("followed_at");
  if (existing) {
    if (existing.type === "autodate") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("followed_at"); // exists with wrong type, remove first
  }

  collection.fields.add(new AutodateField({
    name: "followed_at",
    onCreate: true,
    onUpdate: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("producer_followers");
  collection.fields.removeByName("followed_at");
  return app.save(collection);
})