// ./routes/stores/index.js

const express = require("express");
const prizes = require("./prizes");
const router = express.Router({ mergeParams: true });
const db = require('../../../db')

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
  const queryString = `
    SELECT name, description, cost, quantity FROM prizes
    INNER JOIN store_prizes ON prizes.id=store_prizes.prize_id
    INNER JOIN stores ON store_prizes.store_id = stores.id
    WHERE stores.id = $1
  ` 
  const queryParams = [req.params.store_id]
  db.query(queryString, queryParams)
  .then(response => res.send(response))
});

// ## /{family_id}/stores/{store_id}/prizes routes
router.use("/:store_id/prizes", prizes);

module.exports = router;
