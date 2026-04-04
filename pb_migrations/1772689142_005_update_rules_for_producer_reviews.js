/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("producer_reviews");
  collection.listRule = "";
  collection.viewRule = "";
  collection.createRule = "@request.auth.id != \"\"";
  collection.updateRule = "reviewer_id = @request.auth.id";
  collection.deleteRule = "reviewer_id = @request.auth.id";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("producer_reviews");
  collection.listRule = "";
  collection.viewRule = "";
  collection.createRule = "@request.auth.id != \"\"";
  collection.updateRule = "reviewer_id = @request.auth.id";
  collection.deleteRule = "reviewer_id = @request.auth.id";
  return app.save(collection);
})