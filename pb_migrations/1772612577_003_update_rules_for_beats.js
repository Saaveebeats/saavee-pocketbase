/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("beats");
  collection.listRule = "";
  collection.viewRule = "";
  collection.createRule = "@request.auth.id != \"\" && @request.auth.user_type = 'seller'";
  collection.updateRule = "@request.auth.id != \"\" && (@request.auth.user_type = 'seller' || @request.auth.role = 'admin')";
  collection.deleteRule = "@request.auth.id != \"\" && (@request.auth.user_type = 'seller' || @request.auth.role = 'admin')";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("beats");
  collection.createRule = "@request.auth.id != \"\" && @request.auth.user_type = 'seller'";
  collection.listRule = "";
  collection.viewRule = "";
  collection.updateRule = "@request.auth.id != \"\"";
  collection.deleteRule = "@request.auth.id != \"\"";
  return app.save(collection);
})