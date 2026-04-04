/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("producer_promotions");
  collection.listRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.viewRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.createRule = "@request.auth.id != \"\"";
  collection.updateRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.deleteRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("producer_promotions");
  collection.listRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.viewRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.createRule = "@request.auth.id != ''";
  collection.updateRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  collection.deleteRule = "seller_id = @request.auth.id || @request.auth.role = 'admin'";
  return app.save(collection);
})