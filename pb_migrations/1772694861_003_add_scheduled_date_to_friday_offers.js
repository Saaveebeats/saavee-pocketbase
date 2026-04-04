/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");

  const existing = collection.fields.getByName("scheduled_date");
  if (existing) {
    if (existing.type === "date") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("scheduled_date"); // exists with wrong type, remove first
  }

  collection.fields.add(new DateField({
    name: "scheduled_date",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("scheduled_date");
  return app.save(collection);
})