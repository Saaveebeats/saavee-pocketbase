/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("friday_offer_downloads");
  collection.listRule = "user_id = @request.auth.id";
  collection.viewRule = "user_id = @request.auth.id";
  collection.createRule = "";
  collection.updateRule = "user_id = @request.auth.id";
  collection.deleteRule = "user_id = @request.auth.id";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("friday_offer_downloads");
  collection.listRule = "user_id = @request.auth.id";
  collection.viewRule = "user_id = @request.auth.id";
  collection.createRule = "";
  collection.updateRule = "user_id = @request.auth.id";
  collection.deleteRule = "user_id = @request.auth.id";
  return app.save(collection);
})