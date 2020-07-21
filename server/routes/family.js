// ./routes/family.js

const express = require("express");
const quests = require("./quests");
const prizes = require("./prizes");
const stores = require("./stores");
const users = require("./users");

const router = express.Router({ mergeParams: true });

module.exports = (db) => {
  // ## /{family_id}
  // ### GET Method
  // Return family index page.
  router.get("/", (req, res) => {
    res.send(`GET /:family_id route hit`);
  });

  // ## /{family_id}/quests routes
  router.use("/quests", quests(db));

  // ## /{family_id}/prizes routes
  router.use("/prizes", prizes);

  // ## /{family_id}/stores routes
  router.use("/stores", stores);

  // ## /{family_id}/users routes
  router.use("/users", users(db));

  return router;
};
