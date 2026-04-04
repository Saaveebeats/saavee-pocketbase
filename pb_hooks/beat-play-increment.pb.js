/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  // This hook increments plays count in beat_analytics when a beat is played
  // Triggered when a play event is recorded
  if (e.record.get("action_type") === "play") {
    const beatId = e.record.get("beat_id");
    const today = new Date().toISOString().split('T')[0];
    
    try {
      // Find or create analytics record for today
      let analytics = $app.findFirstRecordByFilter("beat_analytics", "beat_id = {:beatId} && date = {:date}", {
        beatId: beatId,
        date: today
      });
      
      if (analytics) {
        // Increment plays
        const currentPlays = analytics.get("plays") || 0;
        analytics.set("plays", currentPlays + 1);
        $app.save(analytics);
      } else {
        // Create new analytics record
        const newAnalytics = new Record($app.findCollectionByNameOrId("beat_analytics"), {
          beat_id: beatId,
          date: today,
          plays: 1,
          downloads: 0,
          sales: 0,
          revenue: 0
        });
        $app.save(newAnalytics);
      }
    } catch (err) {
      console.log("Error incrementing plays:", err);
    }
  }
  e.next();
}, "analytics_logs");