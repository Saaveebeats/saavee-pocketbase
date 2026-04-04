/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("seller_profiles");

  const existing = collection.fields.getByName("social_links");
  if (existing) {
    if (existing.type === "json") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("social_links"); // exists with wrong type, remove first
  }

  collection.fields.add(new JSONField({
    name: "social_links"
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("seller_profiles");
  collection.fields.removeByName("social_links");
  return app.save(collection);
})