/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const usersCollection = app.findCollectionByNameOrId("users");
  const collection = app.findCollectionByNameOrId("friday_offers");

  const existing = collection.fields.getByName("seller_id");
  if (existing) {
    if (existing.type === "relation") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("seller_id"); // exists with wrong type, remove first
  }

  collection.fields.add(new RelationField({
    name: "seller_id",
    required: false,
    collectionId: usersCollection.id
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offers");
  collection.fields.removeByName("seller_id");
  return app.save(collection);
})