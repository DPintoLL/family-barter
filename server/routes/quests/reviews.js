// ./routes/quests/reviews.js

const express = require("express");
const router = express.Router({ mergeParams: true });

// ## /{family_id}/quests/{quest_id}/reviews
// ### GET Method
// Return reviews for a completed quest.
router.get("/", (req, res) => {
  res.send(`GET /:family_id/quests/:quest_id/reviews route hit`);
});

// ### POST Method
// Submit quest review to server.
router.post("/", (req, res) => {
  res.send(`POST /:family_id/quests/:quest_id/reviews route hit`);
});

// ## /{family_id}/quests/{quest_id}/reviews/{review_id}
// ### GET Method
// Return details of quest review.
router.get("/:review_id", (req, res) => {
  res.send(`GET /:family_id/quests/:quest_id/reviews/:review_id route hit`);
});

module.exports = router;
