/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("notifications");
  collection.listRule = "user_id = @request.auth.id || user_id = @request.query.userId";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("notifications");
  collection.listRule = "user_id = @request.auth.id";
  return app.save(collection);
})