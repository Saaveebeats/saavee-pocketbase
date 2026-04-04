/// <reference path="../pb_data/types.d.ts" />
onRecordCreate((e) => {
  const userId = e.record.get("user_id");
  const offerId = e.record.get("offer_id");
  if (userId && offerId) {
    const existing = $app.findFirstRecordByFilter("friday_offer_downloads", "user_id = {:userId} && offer_id = {:offerId}", { userId: userId, offerId: offerId });
    if (existing) {
      throw new BadRequestError("You have already downloaded this offer");
    }
  }
  e.next();
}, "friday_offer_downloads");