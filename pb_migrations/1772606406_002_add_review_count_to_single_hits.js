/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("single_hits");

  const existing = collection.fields.getByName("review_count");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("review_count"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "review_count",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("single_hits");
  collection.fields.removeByName("review_count");
  return app.save(collection);
})