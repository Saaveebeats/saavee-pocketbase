/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("single_hits");

  const record0 = new Record(collection);
    record0.set("name", "Kick 808 Deep");
    record0.set("bpm", 140);
    record0.set("key", "N/A");
    record0.set("genre", "Trap");
    record0.set("mood", "Punchy");
    record0.set("hit_type", "Kick");
    record0.set("category", "Drums");
    record0.set("price_basic", 99);
    record0.set("price_premium", 299);
    record0.set("description", "Deep 808 kick drum");
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
    record1.set("name", "Snare Crisp");
    record1.set("bpm", 140);
    record1.set("key", "N/A");
    record1.set("genre", "Trap");
    record1.set("mood", "Punchy");
    record1.set("hit_type", "Snare");
    record1.set("category", "Drums");
    record1.set("price_basic", 99);
    record1.set("price_premium", 299);
    record1.set("description", "Crisp snare hit");
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
    record2.set("name", "Clap Tight");
    record2.set("bpm", 120);
    record2.set("key", "N/A");
    record2.set("genre", "Hip-Hop");
    record2.set("mood", "Punchy");
    record2.set("hit_type", "Clap");
    record2.set("category", "Drums");
    record2.set("price_basic", 99);
    record2.set("price_premium", 299);
    record2.set("description", "Tight clap sound");
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
    record3.set("name", "HiHat Closed");
    record3.set("bpm", 140);
    record3.set("key", "N/A");
    record3.set("genre", "Trap");
    record3.set("mood", "Punchy");
    record3.set("hit_type", "HiHat");
    record3.set("category", "Drums");
    record3.set("price_basic", 99);
    record3.set("price_premium", 299);
    record3.set("description", "Closed hi-hat cymbal");
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
    record4.set("name", "HiHat Open");
    record4.set("bpm", 140);
    record4.set("key", "N/A");
    record4.set("genre", "Trap");
    record4.set("mood", "Punchy");
    record4.set("hit_type", "HiHat");
    record4.set("category", "Drums");
    record4.set("price_basic", 99);
    record4.set("price_premium", 299);
    record4.set("description", "Open hi-hat cymbal");
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
    record5.set("name", "808 Sub");
    record5.set("bpm", 140);
    record5.set("key", "N/A");
    record5.set("genre", "Trap");
    record5.set("mood", "Deep");
    record5.set("hit_type", "Bass");
    record5.set("category", "Bass");
    record5.set("price_basic", 99);
    record5.set("price_premium", 299);
    record5.set("description", "Sub bass 808 hit");
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
    record6.set("name", "Percussion Shaker");
    record6.set("bpm", 120);
    record6.set("key", "N/A");
    record6.set("genre", "World");
    record6.set("mood", "Rhythmic");
    record6.set("hit_type", "Percussion");
    record6.set("category", "Percussion");
    record6.set("price_basic", 99);
    record6.set("price_premium", 299);
    record6.set("description", "Shaker percussion hit");
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
    record7.set("name", "Cymbal Crash");
    record7.set("bpm", 120);
    record7.set("key", "N/A");
    record7.set("genre", "Jazz");
    record7.set("mood", "Energetic");
    record7.set("hit_type", "Cymbal");
    record7.set("category", "Drums");
    record7.set("price_basic", 99);
    record7.set("price_premium", 299);
    record7.set("description", "Crash cymbal sound");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("name", "Tom High");
    record8.set("bpm", 140);
    record8.set("key", "N/A");
    record8.set("genre", "Trap");
    record8.set("mood", "Punchy");
    record8.set("hit_type", "Tom");
    record8.set("category", "Drums");
    record8.set("price_basic", 99);
    record8.set("price_premium", 299);
    record8.set("description", "High tom drum");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("name", "Tom Low");
    record9.set("bpm", 140);
    record9.set("key", "N/A");
    record9.set("genre", "Trap");
    record9.set("mood", "Punchy");
    record9.set("hit_type", "Tom");
    record9.set("category", "Drums");
    record9.set("price_basic", 99);
    record9.set("price_premium", 299);
    record9.set("description", "Low tom drum");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.set("name", "Cowbell");
    record10.set("bpm", 120);
    record10.set("key", "N/A");
    record10.set("genre", "Latin");
    record10.set("mood", "Rhythmic");
    record10.set("hit_type", "Percussion");
    record10.set("category", "Percussion");
    record10.set("price_basic", 99);
    record10.set("price_premium", 299);
    record10.set("description", "Cowbell percussion");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.set("name", "Reverse Cymbal");
    record11.set("bpm", 140);
    record11.set("key", "N/A");
    record11.set("genre", "Electronic");
    record11.set("mood", "Experimental");
    record11.set("hit_type", "FX");
    record11.set("category", "Effects");
    record11.set("price_basic", 99);
    record11.set("price_premium", 299);
    record11.set("description", "Reversed cymbal effect");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.set("name", "Vinyl Crackle");
    record12.set("bpm", 85);
    record12.set("key", "N/A");
    record12.set("genre", "LoFi");
    record12.set("mood", "Nostalgic");
    record12.set("hit_type", "FX");
    record12.set("category", "Effects");
    record12.set("price_basic", 99);
    record12.set("price_premium", 299);
    record12.set("description", "Vinyl crackle texture");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.set("name", "Laser Zap");
    record13.set("bpm", 140);
    record13.set("key", "N/A");
    record13.set("genre", "Electronic");
    record13.set("mood", "Experimental");
    record13.set("hit_type", "FX");
    record13.set("category", "Effects");
    record13.set("price_basic", 99);
    record13.set("price_premium", 299);
    record13.set("description", "Laser sound effect");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.set("name", "Kick Boom");
    record14.set("bpm", 95);
    record14.set("key", "N/A");
    record14.set("genre", "Hip-Hop");
    record14.set("mood", "Punchy");
    record14.set("hit_type", "Kick");
    record14.set("category", "Drums");
    record14.set("price_basic", 99);
    record14.set("price_premium", 299);
    record14.set("description", "Booming kick drum");
  try {
    app.save(record14);
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