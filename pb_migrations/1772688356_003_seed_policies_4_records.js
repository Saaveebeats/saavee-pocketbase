/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("policies");

  const record0 = new Record(collection);
    record0.set("title", "Terms of Service");
    record0.set("slug", "terms-of-service");
    record0.set("content", "By using our platform, you agree to these terms and conditions. Please read carefully.");
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
    record1.set("content", "We are committed to protecting your privacy. This policy explains how we collect and use your data.");
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
    record2.set("content", "Refunds are processed within 7-10 business days. Please contact support for assistance.");
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
    record3.set("title", "Copyright Policy");
    record3.set("slug", "copyright-policy");
    record3.set("content", "All content on our platform is protected by copyright. Unauthorized use is prohibited.");
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
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})