// ./routes/users/index.js

const express = require("express");
const router = express.Router({ mergeParams: true });

module.exports = (db) => {
  // ## /{family_id}/users
  // ### GET Method
  // Return list of users in a family.
  router.get("/", (req, res) => {
    res.send("GET /:family_id/users route hit");
  });

  // ## /{family_id}/users/{user_id}
  // ### GET Method
  // Get details of a specific user in a family.
  router.get("/:user_id", (req, res) => {
    res.send("GET /:family_id/users/:user_id route hit");
  });

  // ## /{family_id}/users/{user_id}/gold
  // ### GET Method
  // Return amount of gold available to a user.
  router.get("/:user_id/gold", (req, res) => {
    res.send(`GET /:family_id/users/:user_id/gold route hit`);
  });

  // ## /{family_id}/users/{user_id}/prizes
  // ### GET Method
  // Return prizes in user's inventory.
  router.get("/:user_id/prizes", (req, res) => {
    res.send(`GET /:family_id/users/:user_id/prizes route hit`);
  });

  // ## /{family_id}/users/{user_id}/store
  // ### GET Method
  // Return details of user's store.
  router.get("/:user_id/store", (req, res) => {
    res.send(`GET /:family_id/users/:user_id/store route hit`);
  });

  // ### PUT Method
  // Update details of user's store.
  router.put("/:user_id/store", (req, res) => {
    res.send(`GET /family_id/users/:user_id/store route hit`);
  });

  // ## /{family_id}/users/{user_id}/store/prizes
  // ### POST Method
  // Add prizes to store.
  router.post("/:user_id/store/prizes", (req, res) => {
    res.send(`POST /:family_id/users/:user_id/store/prizes route hit`);
  });

  return router;
};
