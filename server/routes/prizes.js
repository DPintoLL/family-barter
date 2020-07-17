// ./routes/prizes.js

const express = require("express");
const router = express.Router({ mergeParams: true });

// ## /{family_id}/prizes
// ### GET Method
// Return list of available prizes.
router.get("/", (req, res) => {
  res.send(`GET /:family_id/prizes route hit`);
});

// ### POST Method
// Create a new prize.
router.post("/", (req, res) => {
  res.send(`POST /:family_id/prizes route hit`);
});

// ## /{family_id}/prizes/{prize_id}
// ### GET Method
// Get details of a prizes.
router.get("/:prize_id", (req, res) => {
  res.send(`GET /:family_id/prizes/:prize_id route hit`);
});

// ### PUT Method
// Update reward on server.
router.put("/:prize_id", (req, res) => {
  res.send(`PUT /:family_id/prizes/:prize_id route hit`);
});

// ## /{family_id}/prizes/{prize_id}/edit
// ### GET Method
// Return edit prize page.
router.get("/:prize_id/edit", (req, res) => {
  res.send(`GET /:family_id/prizes/:prize_id/edit route hit`);
});

module.exports = router;
