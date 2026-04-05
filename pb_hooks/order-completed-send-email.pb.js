/// <reference path="../pb_data/types.d.ts" />

// 🔴 EMAIL SYSTEM TEMP DISABLED (Render crash fix)
// NOTE: Disabled because email endpoint is not configured.
// Safe placeholder hook — prevents crashes.

onRecordAfterCreateSuccess((e) => {
  try {
    // Skip email logic completely
    e.next();
  } catch (err) {
    console.log("Email hook disabled safely:", err);
    e.next();
  }
}, "orders");
