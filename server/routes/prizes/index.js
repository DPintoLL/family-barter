// ./routes/prizes/index.js

const express = require("express");
const router = express.Router({ mergeParams: true });

module.exports = (db) => {
  // ## /{family_id}/prizes
  // ### GET Method
  // Return list of available prizes.
  router.get("/", async (req, res) => {
    const { family_id } = req.params
    const data = await db.query(`SELECT * FROM prizes WHERE family_id = $1`, [family_id])
    res.send(data)
  });

  // ### POST Method
  // Create a new prize.
  // todo: pass in the data from a form
  router.post("/", async (req, res) => {
    const { family_id } = req.params
    console.log(req.body)
    const query = `INSERT INTO prizes ()`
  });

  // ## /{family_id}/prizes/{prize_id}
  // ### GET Method
  // Get details of a prizes.
  router.get("/:prize_id", async (req, res) => {
    const { prize_id } = req.params
    const data = await(`SELECT * FROM prizes WHERE prize_id = $1`, [prize_id])
    res.send(data)
  });

  // ### PUT Method
  // Update reward on server.
  // todo: pass in the data from a form
  router.put("/:prize_id", (req, res) => {
    const { prize_id } = 
    res.send(`PUT /:family_id/prizes/:prize_id route hit`);
  });

  // ## /{family_id}/prizes/{prize_id}/edit
  // ### GET Method
  // Return edit prize page.
  router.get("/:prize_id/edit", (req, res) => {
    res.send(`GET /:family_id/prizes/:prize_id/edit route hit`);
  });

  return router;
};
