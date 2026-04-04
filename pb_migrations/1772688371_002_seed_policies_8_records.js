/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("policies");

  const record0 = new Record(collection);
    record0.set("title", "Terms & Conditions");
    record0.set("slug", "terms");
    record0.set("published", true);
    record0.set("footer_visibility", true);
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
    record1.set("title", "Privacy Policy");
    record1.set("slug", "privacy-policy");
    record1.set("published", true);
    record1.set("footer_visibility", true);
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
    record2.set("title", "Refund Policy");
    record2.set("slug", "refund-policy");
    record2.set("published", true);
    record2.set("footer_visibility", true);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("title", "License Agreement");
    record3.set("slug", "license-agreement");
    record3.set("published", true);
    record3.set("footer_visibility", true);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("title", "Cookie Policy");
    record4.set("slug", "cookie-policy");
    record4.set("published", true);
    record4.set("footer_visibility", true);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("title", "DMCA / Copyright Policy");
    record5.set("slug", "dmca-policy");
    record5.set("published", true);
    record5.set("footer_visibility", true);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("title", "Seller Agreement");
    record6.set("slug", "seller-agreement");
    record6.set("published", true);
    record6.set("footer_visibility", true);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("title", "Buyer Agreement");
    record7.set("slug", "buyer-agreement");
    record7.set("published", true);
    record7.set("footer_visibility", true);
  try {
    app.save(record7);
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