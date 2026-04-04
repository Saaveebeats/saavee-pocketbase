/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("beats");

  const existing = collection.fields.getByName("producer_id");
  if (existing) {
    if (existing.type === "text") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("producer_id"); // exists with wrong type, remove first
  }

  collection.fields.add(new TextField({
    name: "producer_id",
    required: true
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("beats");
  collection.fields.removeByName("producer_id");
  return app.save(collection);
})