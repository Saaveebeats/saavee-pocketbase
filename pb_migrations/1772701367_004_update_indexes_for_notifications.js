/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("notifications");
  collection.indexes.push("CREATE INDEX idx_notifications_user_id ON notifications (user_id)");
  collection.indexes.push("CREATE INDEX idx_notifications_created_at ON notifications (created_at)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("notifications");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_notifications_user_id"));
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_notifications_created_at"));
  return app.save(collection);
})