// ./routes/register.js

const express = require("express");
const router = express.Router();

// Register (/register) path
module.exports = (db) => {
  // GET /register route
  // Returns the register user page.
  // Should allow a registration code parameter.
  router.get("/", (req, res) => {
    res.send("GET /register route hit");
  });

  return router;
};
