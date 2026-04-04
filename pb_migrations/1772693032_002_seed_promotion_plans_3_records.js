/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("promotion_plans");

  const record0 = new Record(collection);
    record0.set("name", "Starter");
    record0.set("price", 999);
    record0.set("duration_days", 7);
    record0.set("features", ["Featured on homepage", "Trending section"]);
    record0.set("description", "Perfect for new sellers looking to boost visibility");
    record0.set("is_active", true);
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
    record1.set("name", "Pro");
    record1.set("price", 2499);
    record1.set("duration_days", 30);
    record1.set("features", ["Featured on homepage", "Trending section", "Email blast", "Social media promotion"]);
    record1.set("description", "Comprehensive promotion package for growing sellers");
    record1.set("is_active", true);
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
    record2.set("name", "Premium");
    record2.set("price", 4999);
    record2.set("duration_days", 60);
    record2.set("features", ["Featured on homepage", "Trending section", "Email blast", "Social media promotion", "Priority support", "Custom promotion strategy"]);
    record2.set("description", "Ultimate promotion package with dedicated support");
    record2.set("is_active", true);
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