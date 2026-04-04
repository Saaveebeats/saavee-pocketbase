/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("beats");

  const existing = collection.fields.getByName("trending_rank");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("trending_rank"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "trending_rank",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("beats");
  collection.fields.removeByName("trending_rank");
  return app.save(collection);
})