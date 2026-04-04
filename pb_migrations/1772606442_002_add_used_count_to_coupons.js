/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("coupons");

  const existing = collection.fields.getByName("used_count");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("used_count"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "used_count",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("coupons");
  collection.fields.removeByName("used_count");
  return app.save(collection);
})