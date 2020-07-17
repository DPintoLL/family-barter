// ./routes/home.js

const express = require("express");
const router = express.Router();

// Home (/) path

// GET / route
router.get("/", (req, res) => {
  res.send(`GET Home (/) route hit`);
});

module.exports = router;
