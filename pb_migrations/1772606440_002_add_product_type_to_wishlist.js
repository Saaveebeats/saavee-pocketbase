/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("wishlist");

  const existing = collection.fields.getByName("product_type");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("product_type"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "product_type",
    required: true,
    values: ["beat", "sample", "single_hit"]
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("wishlist");
  collection.fields.removeByName("product_type");
  return app.save(collection);
})