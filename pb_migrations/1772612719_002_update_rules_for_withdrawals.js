/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("withdrawals");
  collection.listRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.viewRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.createRule = "@request.auth.id != \"\"";
  collection.updateRule = "@request.auth.role = 'admin'";
  collection.deleteRule = "@request.auth.role = 'admin'";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("withdrawals");
  collection.listRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.viewRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.createRule = "@request.auth.id != \"\"";
  collection.updateRule = "@request.auth.role = 'admin'";
  collection.deleteRule = "@request.auth.role = 'admin'";
  return app.save(collection);
})