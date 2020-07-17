// ./routes/login.js

const express = require('express')
const router = express.Router()

// Login (/login) path

// GET /login route
// Returns the login page
router.get('/', (req, res) =>  {
  res.send(`GET /login route hit`)
})

// POST /login route
// Logs in a user.
router.post('/', (req, res) => {
  res.send(`POST /login route hit`)
})

module.exports = router