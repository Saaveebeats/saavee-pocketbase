/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("settings");

  const record0 = new Record(collection);
    record0.set("setting_key", "platform_name");
    record0.set("setting_value", "SAAVEE BEATS");
    record0.set("category", "Platform");
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
    record1.set("setting_key", "commission_percentage");
    record1.set("setting_value", "30");
    record1.set("category", "Platform");
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
    record2.set("setting_key", "min_payout_amount");
    record2.set("setting_value", "1000");
    record2.set("category", "Platform");
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
    record3.set("setting_key", "max_beat_price");
    record3.set("setting_value", "500");
    record3.set("category", "Platform");
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
    record4.set("setting_key", "maintenance_mode");
    record4.set("setting_value", "false");
    record4.set("category", "Maintenance");
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
    record5.set("setting_key", "stripe_status");
    record5.set("setting_value", "active");
    record5.set("category", "Payment");
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
    record6.set("setting_key", "email_sender_name");
    record6.set("setting_value", "SAAVEE BEATS");
    record6.set("category", "Email");
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
    record7.set("setting_key", "email_sender_address");
    record7.set("setting_value", "noreply@saaveebeats.com");
    record7.set("category", "Email");
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
    record8.set("setting_key", "password_min_length");
    record8.set("setting_value", "8");
    record8.set("category", "Security");
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
    record9.set("setting_key", "session_timeout_minutes");
    record9.set("setting_value", "30");
    record9.set("category", "Security");
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
    record10.set("setting_key", "require_2fa");
    record10.set("setting_value", "false");
    record10.set("category", "Security");
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
    record11.set("setting_key", "maintenance_message");
    record11.set("setting_value", "System under maintenance. Please try again later.");
    record11.set("category", "Maintenance");
  try {
    app.save(record11);
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