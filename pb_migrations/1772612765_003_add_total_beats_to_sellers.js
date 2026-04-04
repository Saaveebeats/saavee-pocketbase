/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("sellers");

  const existing = collection.fields.getByName("total_beats");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("total_beats"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "total_beats"
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("sellers");
  collection.fields.removeByName("total_beats");
  return app.save(collection);
})