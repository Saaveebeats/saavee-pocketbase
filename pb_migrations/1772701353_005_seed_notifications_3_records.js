/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("notifications");

  const record0 = new Record(collection);
    record0.set("user_id", "test_user_1");
    record0.set("type", "order");
    record0.set("title", "Order Confirmation");
    record0.set("message", "Your order has been confirmed and is being processed.");
    record0.set("is_read", false);
    record0.set("action_url", "/orders/test_order_1");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("user_id", "test_user_1");
    record1.set("type", "system");
    record1.set("title", "System Update");
    record1.set("message", "Platform maintenance scheduled for tonight at 2 AM UTC.");
    record1.set("is_read", false);
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("user_id", "test_user_1");
    record2.set("type", "announcement");
    record2.set("title", "New Feature Available");
    record2.set("message", "Check out our new beat discovery algorithm!");
    record2.set("is_read", true);
    record2.set("read_at", "2024-01-15");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})