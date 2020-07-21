// ./routes/home.js

const express = require("express");
const router = express.Router();

// Home (/) path
module.exports = (db) => {
  // GET / route
  router.get("/", (req, res) => {
    res.send(`GET Home (/) route hit`);
  });

  return router;
};
