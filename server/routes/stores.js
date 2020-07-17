// ./routes/stores.js

const express = require("express");
const router = express.Router({ mergeParams: true });

// ## /{family_id}/stores
// ### GET Method
// Get list of available stores.
router.get("/", (req, res) => {
  res.send(`GET /:family_id/stores route hit`);
});

// ## /{family_id}/stores/{store_id}
// ### GET Method
// Get details of store (including list of available prizes and discounts).
router.get("/:store_id", (req, res) => {
  res.send(`GET /:family_id/stores/:store_id route hit`);
});

// ## /{family_id}/stores/{store_id}/prizes/{prize_id}
// ### GET Method
// Get details of a reward.
router.get("/:store_id/prizes/:prize_id", (req, res) => {
  res.send(`GET /:family_id/stores/:store_id/prizes/:prize_id route hit`);
});

// ## /{family_id}/stores/{store_id}/prizes/{prize_id}/purchase
// ### POST Method
// Purchase a reward from a store.
router.post("/:store_id/prizes/:prize_id/purchase", (req, res) => {
  res.send(
    `POST /:family_id/stores/:store_id/prizes/:prize_id/purchase route hit`
  );
});

module.exports = router;
