/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");

  const existing = collection.fields.getByName("extra_plays");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("extra_plays"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "extra_plays"
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("producer_profiles");
  collection.fields.removeByName("extra_plays");
  return app.save(collection);
})