/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const beatsCollection = app.findCollectionByNameOrId("beats");
  const collection = app.findCollectionByNameOrId("friday_offers");

  const existing = collection.fields.getByName("beat_id");
  if (existing) {
    if (existing.type === "relation") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("beat_id"); // exists with wrong type, remove first
  }

  collection.fields.add(new RelationField({
    name: "beat_id",
    required: true,
    collectionId: beatsCollection.id
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("beat_id");
  return app.save(collection);
})