/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("policies");

  const record0 = new Record(collection);
    record0.set("title", "Footer");
    record0.set("slug", "footer");
    record0.set("content", "\u00a9 2026 Saavee Beats. All rights reserved.");
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
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})