// ./routes/family.js

const express = require("express");
const quests = require("./quests");
const prizes = require("./prizes");
const stores = require("./stores");
const users = require("./users");

const router = express.Router({ mergeParams: true });

// ## /{family_id}
// ### GET Method
// Return family index page.
router.get("/:family_id", (req, res) => {
  res.send(`GET /:family_id route hit`);
});

// ## /{family_id}/quests routes
router.use("/:family_id/quests", quests);

// ## /{family_id}/prizes routes
router.use("/:family_id/prizes", prizes);

// ## /{family_id}/stores routes
router.use("/:family_id/stores", stores);

// ## /{family_id}/users routes
router.use("/:family_id/users", users);

module.exports = router;
