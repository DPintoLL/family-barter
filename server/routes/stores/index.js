// ./routes/stores/index.js

const express = require("express");
const prizes = require("./prizes");
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

// ## /{family_id}/stores/{store_id}/prizes routes
router.use("/:store_id/prizes", prizes);

module.exports = router;
