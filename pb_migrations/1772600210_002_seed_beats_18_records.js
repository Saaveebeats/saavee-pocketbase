/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("beats");

  const record0 = new Record(collection);
    record0.set("name", "Dark Life");
    record0.set("bpm", 143);
    record0.set("key", "Eb Minor");
    record0.set("genre", "Drill");
    record0.set("mood", "Dark");
    record0.set("instruments", "808, Snare, Hi-Hat");
    record0.set("category", "Trap");
    record0.set("price_basic", 599);
    record0.set("price_premium", 1999);
    record0.set("description", "Heavy drill beat with dark atmosphere");
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
    record1.set("name", "Trap Vibes");
    record1.set("bpm", 140);
    record1.set("key", "C Minor");
    record1.set("genre", "Trap");
    record1.set("mood", "Aggressive");
    record1.set("instruments", "Kick, Snare, Synth");
    record1.set("category", "Trap");
    record1.set("price_basic", 599);
    record1.set("price_premium", 1999);
    record1.set("description", "Classic trap beat with aggressive energy");
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
    record2.set("name", "LoFi Dreams");
    record2.set("bpm", 85);
    record2.set("key", "A Minor");
    record2.set("genre", "LoFi");
    record2.set("mood", "Chill");
    record2.set("instruments", "Piano, Vinyl Crackle, Drums");
    record2.set("category", "LoFi");
    record2.set("price_basic", 599);
    record2.set("price_premium", 1999);
    record2.set("description", "Relaxing lofi hip-hop beat");
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
    record3.set("name", "Punjabi Groove");
    record3.set("bpm", 120);
    record3.set("key", "G Major");
    record3.set("genre", "Punjabi");
    record3.set("mood", "Melodic");
    record3.set("instruments", "Dhol, Strings, Synth");
    record3.set("category", "World");
    record3.set("price_basic", 599);
    record3.set("price_premium", 1999);
    record3.set("description", "Energetic Punjabi-inspired beat");
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
    record4.set("name", "UK Drill");
    record4.set("bpm", 150);
    record4.set("key", "F# Minor");
    record4.set("genre", "UK Drill");
    record4.set("mood", "Dark");
    record4.set("instruments", "808, Snare, Strings");
    record4.set("category", "Drill");
    record4.set("price_basic", 599);
    record4.set("price_premium", 1999);
    record4.set("description", "Authentic UK drill sound");
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
    record5.set("name", "Afrobeats Fire");
    record5.set("bpm", 108);
    record5.set("key", "D Minor");
    record5.set("genre", "Afrobeats");
    record5.set("mood", "Energetic");
    record5.set("instruments", "Percussion, Synth, Bass");
    record5.set("category", "Afro");
    record5.set("price_basic", 599);
    record5.set("price_premium", 1999);
    record5.set("description", "Modern afrobeats production");
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
    record6.set("name", "Boom Bap Classic");
    record6.set("bpm", 95);
    record6.set("key", "Bb Minor");
    record6.set("genre", "Hip-Hop");
    record6.set("mood", "Smooth");
    record6.set("instruments", "Drums, Bass, Strings");
    record6.set("category", "Hip-Hop");
    record6.set("price_basic", 599);
    record6.set("price_premium", 1999);
    record6.set("description", "Classic boom bap hip-hop beat");
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
    record7.set("name", "Rage Mode");
    record7.set("bpm", 160);
    record7.set("key", "E Minor");
    record7.set("genre", "Trap");
    record7.set("mood", "Aggressive");
    record7.set("instruments", "Kick, Snare, Synth Lead");
    record7.set("category", "Trap");
    record7.set("price_basic", 599);
    record7.set("price_premium", 1999);
    record7.set("description", "High-energy trap beat");
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
    record8.set("name", "Ambient Vibes");
    record8.set("bpm", 70);
    record8.set("key", "C Major");
    record8.set("genre", "Ambient");
    record8.set("mood", "Peaceful");
    record8.set("instruments", "Pad, Strings, Bells");
    record8.set("category", "Ambient");
    record8.set("price_basic", 599);
    record8.set("price_premium", 1999);
    record8.set("description", "Atmospheric ambient production");
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
    record9.set("name", "Reggae Sunset");
    record9.set("bpm", 90);
    record9.set("key", "G Major");
    record9.set("genre", "Reggae");
    record9.set("mood", "Relaxed");
    record9.set("instruments", "Guitar, Bass, Drums");
    record9.set("category", "Reggae");
    record9.set("price_basic", 599);
    record9.set("price_premium", 1999);
    record9.set("description", "Smooth reggae vibes");
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
    record10.set("name", "Techno Pulse");
    record10.set("bpm", 128);
    record10.set("key", "A Minor");
    record10.set("genre", "Techno");
    record10.set("mood", "Hypnotic");
    record10.set("instruments", "Synth, Kick, Percussion");
    record10.set("category", "Electronic");
    record10.set("price_basic", 599);
    record10.set("price_premium", 1999);
    record10.set("description", "Driving techno beat");
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
    record11.set("name", "Melodic Trap");
    record11.set("bpm", 145);
    record11.set("key", "G Minor");
    record11.set("genre", "Trap");
    record11.set("mood", "Melodic");
    record11.set("instruments", "Strings, Synth, 808");
    record11.set("category", "Trap");
    record11.set("price_basic", 599);
    record11.set("price_premium", 1999);
    record11.set("description", "Trap beat with melodic elements");
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
    record12.set("name", "Grime Energy");
    record12.set("bpm", 140);
    record12.set("key", "D Minor");
    record12.set("genre", "Grime");
    record12.set("mood", "Aggressive");
    record12.set("instruments", "Synth, Kick, Snare");
    record12.set("category", "Grime");
    record12.set("price_basic", 599);
    record12.set("price_premium", 1999);
    record12.set("description", "Authentic grime production");
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
    record13.set("name", "Jazz Fusion");
    record13.set("bpm", 110);
    record13.set("key", "F Major");
    record13.set("genre", "Jazz");
    record13.set("mood", "Sophisticated");
    record13.set("instruments", "Piano, Bass, Drums");
    record13.set("category", "Jazz");
    record13.set("price_basic", 599);
    record13.set("price_premium", 1999);
    record13.set("description", "Modern jazz fusion beat");
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
    record14.set("name", "Dubstep Drop");
    record14.set("bpm", 140);
    record14.set("key", "B Minor");
    record14.set("genre", "Dubstep");
    record14.set("mood", "Intense");
    record14.set("instruments", "Synth, Bass, Kick");
    record14.set("category", "Electronic");
    record14.set("price_basic", 599);
    record14.set("price_premium", 1999);
    record14.set("description", "Heavy dubstep with massive drop");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.set("name", "Indie Pop");
    record15.set("bpm", 115);
    record15.set("key", "E Major");
    record15.set("genre", "Indie Pop");
    record15.set("mood", "Upbeat");
    record15.set("instruments", "Guitar, Synth, Drums");
    record15.set("category", "Pop");
    record15.set("price_basic", 599);
    record15.set("price_premium", 1999);
    record15.set("description", "Modern indie pop production");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.set("name", "Boom Trap");
    record16.set("bpm", 155);
    record16.set("key", "C# Minor");
    record16.set("genre", "Trap");
    record16.set("mood", "Dark");
    record16.set("instruments", "808, Snare, Synth");
    record16.set("category", "Trap");
    record16.set("price_basic", 599);
    record16.set("price_premium", 1999);
    record16.set("description", "Heavy trap with booming bass");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.set("name", "Soulful Groove");
    record17.set("bpm", 100);
    record17.set("key", "A Major");
    record17.set("genre", "Soul");
    record17.set("mood", "Soulful");
    record17.set("instruments", "Strings, Piano, Bass");
    record17.set("category", "Soul");
    record17.set("price_basic", 599);
    record17.set("price_premium", 1999);
    record17.set("description", "Smooth soulful beat");
  try {
    app.save(record17);
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