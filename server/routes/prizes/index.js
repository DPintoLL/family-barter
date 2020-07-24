// ./routes/prizes/index.js
const express = require("express");
const router = express.Router({ mergeParams: true });

module.exports = (db) => {
  // ## /prizes
  // ### GET Method
  // Return list of available prizes.
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM prizes`)
    .then(data => res.json(data))
  });

  // ### POST Method
  // Create a new prize.
  // todo: pass in the data from a form
  router.post("/", async (req, res) => {
    // const { family_id } = req.session
    let { name, description, cost, icon_url, icon_color, is_shared, created_by } = req.body
    cost = parseInt(cost)
    created_by = parseInt(created_by)
    const family_id = 1
    const countQuery = await db.query(`SELECT * FROM prizes`)
    const rowCount = countQuery.length
    const queryString = `
      INSERT INTO prizes
        (id, family_id, name, description, cost, icon_url, icon_color, is_shared, created_by)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
    `
    // // const queryParams = [
    // //   rowCount + 1,
    // //   1, 
    // //   'Chocolate chip cookie', 
    // //   'Available for a limited time only, this delicious cookie will improve mental focus and bring joy!',
    // //   '100',
    // //   'ICON_URL_HERE',
    // //   '#FFFFFF',
    // //   true,
    // //   1
    // // ]
    const queryParams = [
      rowCount + 1,
      family_id,
      name,
      description,
      cost,
      icon_url,
      icon_color,
      is_shared,
      created_by
    ]
    db.query(queryString, queryParams)
    .then(() => res.send('Prize successfully created'))
    .catch((err) => console.error(`error in creating prize: ${err}`))
    .finally(db)
  });

  // ## /prizes/{prize_id}
  // ### GET Method
  // Get details of a prizes.
  router.get("/:prize_id", async (req, res) => {
    const { prize_id } = req.params
    const data = await db.query(`SELECT * FROM prizes WHERE id = $1`, [prize_id])
    res.send(data)
  });

  // ### PUT Method
  // Update reward on server.
  // todo: pass in the data from a form
  router.put("/:prize_id", (req, res) => {
    // join the keys and values into a query string
    const { prize_id } = req.params
    const queryArray = []
    for (const [key, value] of Object.entries(req.body)) {
      let str = (key === "cost") ? `${key} = ${value}` : `${key} = '${value}'`
      queryArray.push(str)
    }
    const fields = queryArray.join(`, `)
    const queryString = `UPDATE prizes SET ${fields} WHERE id = $1`
    db.query(queryString, [prize_id]) 
    .then(() => res.send(`Prize successfully updated`))
    .catch(err => console.error(err))
  });

  // ## /{family_id}/prizes/{prize_id}/edit
  // ### GET Method
  // Return edit prize page.
  router.get("/:prize_id/edit", (req, res) => {
    res.send(`GET /:family_id/prizes/:prize_id/edit route hit`);
  });

  return router;
};
