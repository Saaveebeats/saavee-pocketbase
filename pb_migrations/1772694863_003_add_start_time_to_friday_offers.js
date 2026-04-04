/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");

  const existing = collection.fields.getByName("start_time");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("start_time"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "start_time",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("start_time");
  return app.save(collection);
})