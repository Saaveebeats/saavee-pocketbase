/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");

  const existing = collection.fields.getByName("start_date");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("start_date"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "start_date"
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");
  collection.fields.removeByName("start_date");
  return app.save(collection);
})