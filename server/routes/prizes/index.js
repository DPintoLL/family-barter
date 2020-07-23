// ./routes/prizes/index.js
const express = require("express");
const router = express.Router({ mergeParams: true });
module.exports = (db) => {
  // ## /{family_id}/prizes
  // ### GET Method
  // Return list of available prizes.
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM prizes`)
    .then(data => res.json(data))
  });

  // ### POST Method
  // Create a new prize.
  // todo: pass in the data from a form
  router.post("/", (req, res) => {
    // const { name, description, cost, icon_url, icon_color, is_shared, created_by } = req.body
    const queryString = `
      INSERT INTO prizes
        (family_id, name, description, cost, icon_url, icon_color, is_shared, created_by)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
    `
    const queryParams = [
      1, 
      'Chocolate chip cookie', 
      'Available for a limited time only, this delicious cookie will improve mental focus and bring joy!',
      '100',
      'ICON_URL_HERE',
      '#FFFFFF',
      true,
      1
    ]
    db.query(queryString, queryParams)
    .then(() => res.send('Prize successfully created'))
    .catch((err) => console.error(`error in creating prize: ${err}`))
    .finally(db)
  });

  // ## /{family_id}/prizes/{prize_id}
  // ### GET Method
  // Get details of a prizes.
  router.get("/:prize_id", async (req, res) => {
    const { prize_id } = req.params
    const data = await db.query(`SELECT * FROM prizes WHERE prize_id = $1`, [prize_id])
    res.send(data)
  });

  // ### PUT Method
  // Update reward on server.
  // todo: pass in the data from a form
  router.put("/:prize_id", (req, res) => {
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
