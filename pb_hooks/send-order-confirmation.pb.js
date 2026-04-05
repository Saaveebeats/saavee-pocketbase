/// <reference path="../pb_data/types.d.ts" />

// 🔴 EMAIL SYSTEM TEMP DISABLED (Render crash fix)
// NOTE: This hook is intentionally disabled.
// Reason: Email API endpoint not configured yet.
// Do NOT enable until email service is properly set.

onRecordAfterCreateSuccess((e) => {
  try {
    // Just pass execution forward safely
    e.next();
  } catch (err) {
    // Prevent any crash
    console.log("Email hook disabled safely:", err);
    e.next();
  }
}, "orders");
