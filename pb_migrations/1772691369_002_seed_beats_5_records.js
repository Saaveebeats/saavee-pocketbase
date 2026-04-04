/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("beats");

  const record0 = new Record(collection);
    record0.set("title", "Summer Vibes");
    record0.set("bpm", 95);
    record0.set("key", "C Major");
    record0.set("genre", "Hip-Hop");
    record0.set("mood", "Uplifting");
    record0.set("category", "Rap");
    record0.set("price_basic", 29.99);
    record0.set("price_premium", 99.99);
    record0.set("status", "approved");
    record0.set("plays_count", 150);
    record0.set("producer_id", "sample_producer");
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
    record1.set("title", "Midnight Dreams");
    record1.set("bpm", 85);
    record1.set("key", "A Minor");
    record1.set("genre", "Trap");
    record1.set("mood", "Dark");
    record1.set("category", "Trap");
    record1.set("price_basic", 24.99);
    record1.set("price_premium", 79.99);
    record1.set("status", "approved");
    record1.set("plays_count", 87);
    record1.set("producer_id", "sample_producer");
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
    record2.set("title", "Electric Pulse");
    record2.set("bpm", 128);
    record2.set("key", "E Major");
    record2.set("genre", "Electronic");
    record2.set("mood", "Energetic");
    record2.set("category", "Electronic");
    record2.set("price_basic", 34.99);
    record2.set("price_premium", 119.99);
    record2.set("status", "approved");
    record2.set("plays_count", 203);
    record2.set("producer_id", "sample_producer");
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
    record3.set("title", "Smooth Jazz");
    record3.set("bpm", 72);
    record3.set("key", "F Major");
    record3.set("genre", "Jazz");
    record3.set("mood", "Relaxing");
    record3.set("category", "Jazz");
    record3.set("price_basic", 19.99);
    record3.set("price_premium", 69.99);
    record3.set("status", "approved");
    record3.set("plays_count", 65);
    record3.set("producer_id", "sample_producer");
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
    record4.set("title", "Urban Groove");
    record4.set("bpm", 92);
    record4.set("key", "G Minor");
    record4.set("genre", "R&B");
    record4.set("mood", "Smooth");
    record4.set("category", "R&B");
    record4.set("price_basic", 27.99);
    record4.set("price_premium", 89.99);
    record4.set("status", "approved");
    record4.set("plays_count", 124);
    record4.set("producer_id", "sample_producer");
  try {
    app.save(record4);
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