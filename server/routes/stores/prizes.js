// ./routes/stores/prizes.js

const express = require("express");
const router = express.Router({ mergeParams: true });

module.exports = (db) => {
  // ## /{family_id}/stores/{store_id}/prizes/{prize_id}
  // ### GET Method
  // Get details of a reward.
  router.get("/:prize_id", (req, res) => {
    res.send(`GET /:family_id/stores/:store_id/prizes/:prize_id route hit`);
  });

  // ## /{family_id}/stores/{store_id}/prizes/{prize_id}/purchase
  // ### POST Method
  // Purchase a reward from a store.
  router.post("/:prize_id/purchase", (req, res) => {
    res.send(
      `POST /:family_id/stores/:store_id/prizes/:prize_id/purchase route hit`
    );
  });

  return router;
};
