/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  // This hook increments downloads in beat_analytics and creates download_history record
  const beatId = e.record.get("beat_id");
  const userId = e.record.get("user_id");
  const token = e.record.get("token");
  const today = new Date().toISOString().split('T')[0];
  
  try {
    // Find or create analytics record for today
    let analytics = $app.findFirstRecordByFilter("beat_analytics", "beat_id = {:beatId} && date = {:date}", {
      beatId: beatId,
      date: today
    });
    
    if (analytics) {
      // Increment downloads
      const currentDownloads = analytics.get("downloads") || 0;
      analytics.set("downloads", currentDownloads + 1);
      $app.save(analytics);
    } else {
      // Create new analytics record
      const newAnalytics = new Record($app.findCollectionByNameOrId("beat_analytics"), {
        beat_id: beatId,
        date: today,
        plays: 0,
        downloads: 1,
        sales: 0,
        revenue: 0
      });
      $app.save(newAnalytics);
    }
    
    // Create download_history record
    const history = new Record($app.findCollectionByNameOrId("download_history"), {
      beat_id: beatId,
      user_id: userId,
      token: token
    });
    $app.save(history);
    
    // Mark download_link as used if token exists
    if (token) {
      const downloadLink = $app.findFirstRecordByFilter("download_links", "token = {:token}", {
        token: token
      });
      if (downloadLink) {
        downloadLink.set("is_used", true);
        $app.save(downloadLink);
      }
    }
  } catch (err) {
    console.log("Error in download increment:", err);
  }
  e.next();
}, "download_history");