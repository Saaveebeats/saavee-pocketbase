/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("samples");

  const record0 = new Record(collection);
    record0.set("name", "Piano Loops Vol 1");
    record0.set("bpm", 120);
    record0.set("key", "C Major");
    record0.set("genre", "Jazz");
    record0.set("mood", "Smooth");
    record0.set("instruments", "Piano");
    record0.set("category", "Loops");
    record0.set("price_basic", 399);
    record0.set("price_premium", 1299);
    record0.set("description", "Versatile piano loop pack");
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
    record1.set("name", "Drum Kits Pro");
    record1.set("bpm", 140);
    record1.set("key", "N/A");
    record1.set("genre", "Trap");
    record1.set("mood", "Punchy");
    record1.set("instruments", "Drums");
    record1.set("category", "Drums");
    record1.set("price_basic", 499);
    record1.set("price_premium", 1599);
    record1.set("description", "Professional drum kit samples");
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
    record2.set("name", "Synth Pads Deluxe");
    record2.set("bpm", 90);
    record2.set("key", "A Minor");
    record2.set("genre", "Ambient");
    record2.set("mood", "Atmospheric");
    record2.set("instruments", "Synth");
    record2.set("category", "Synths");
    record2.set("price_basic", 399);
    record2.set("price_premium", 1299);
    record2.set("description", "Lush synth pad collection");
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
    record3.set("name", "Bass Essentials");
    record3.set("bpm", 110);
    record3.set("key", "E Minor");
    record3.set("genre", "Electronic");
    record3.set("mood", "Deep");
    record3.set("instruments", "Bass");
    record3.set("category", "Bass");
    record3.set("price_basic", 349);
    record3.set("price_premium", 1199);
    record3.set("description", "Essential bass samples");
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
    record4.set("name", "Vocal Chops Pack");
    record4.set("bpm", 100);
    record4.set("key", "C Major");
    record4.set("genre", "Hip-Hop");
    record4.set("mood", "Energetic");
    record4.set("instruments", "Vocals");
    record4.set("category", "Vocals");
    record4.set("price_basic", 599);
    record4.set("price_premium", 1999);
    record4.set("description", "Chopped vocal samples");
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
    record5.set("name", "String Arrangements");
    record5.set("bpm", 95);
    record5.set("key", "G Major");
    record5.set("genre", "Classical");
    record5.set("mood", "Elegant");
    record5.set("instruments", "Strings");
    record5.set("category", "Orchestral");
    record5.set("price_basic", 449);
    record5.set("price_premium", 1499);
    record5.set("description", "Orchestral string samples");
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
    record6.set("name", "Percussion World");
    record6.set("bpm", 120);
    record6.set("key", "N/A");
    record6.set("genre", "World");
    record6.set("mood", "Rhythmic");
    record6.set("instruments", "Percussion");
    record6.set("category", "Percussion");
    record6.set("price_basic", 399);
    record6.set("price_premium", 1299);
    record6.set("description", "Global percussion samples");
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
    record7.set("name", "FX & Transitions");
    record7.set("bpm", 140);
    record7.set("key", "N/A");
    record7.set("genre", "Electronic");
    record7.set("mood", "Experimental");
    record7.set("instruments", "Synth");
    record7.set("category", "Effects");
    record7.set("price_basic", 299);
    record7.set("price_premium", 999);
    record7.set("description", "Sound effects and transitions");
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
    record8.set("name", "Guitar Riffs");
    record8.set("bpm", 110);
    record8.set("key", "E Minor");
    record8.set("genre", "Rock");
    record8.set("mood", "Energetic");
    record8.set("instruments", "Guitar");
    record8.set("category", "Guitars");
    record8.set("price_basic", 449);
    record8.set("price_premium", 1499);
    record8.set("description", "Electric guitar riff samples");
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
    record9.set("name", "Ambient Textures");
    record9.set("bpm", 80);
    record9.set("key", "C Major");
    record9.set("genre", "Ambient");
    record9.set("mood", "Peaceful");
    record9.set("instruments", "Synth, Pad");
    record9.set("category", "Ambient");
    record9.set("price_basic", 349);
    record9.set("price_premium", 1199);
    record9.set("description", "Atmospheric texture pack");
  try {
    app.save(record9);
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