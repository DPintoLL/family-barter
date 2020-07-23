// ./routes/stores/prizes.js

const express = require("express");
const router = express.Router({ mergeParams: true });

module.exports = (db) => {
  // ## /{family_id}/stores/{store_id}/prizes/{prize_id}
  // ### GET Method
  // Get details of a reward.
  router.get("/:prize_id", async (req, res) => {
    const data = await db.query(`SELECT * FROM prizes WHERE prizes.id = $1`, [req.params.prize_id])
    res.send(data)
  });

  // ## /{family_id}/stores/{store_id}/prizes/{prize_id}/purchase
  // ### POST Method
  // Purchase a reward from a store.
  router.post("/:prize_id/purchase", async (req, res) => {
    const { prize_id, store_id } = req.params
    const user_id = req.session.user_id
    // two updates required, one with the user inventory, one with the store. if the item is already
    // in the inventory of the user, we need to update the inventory and increment, if not we need to
    // create a new record. With the store update we're just changing the inventory value.
    const checkForRecord = await db.query(`
      SELECT * FROM user_prizes 
      WHERE user_id = $1
      AND prize_id = $2
    `, [user_id, prize_id])
    const inUserInventory = checkForRecord.length > 0
    // insert if the record doesn't already exist, update if it does
    const insertQuery = `
      INSERT INTO user_prizes (user_id, prize_id, quantity)
      VALUES ($1, $2, $3)
    `
    const insertParams = [user_id, prize_id, 1]
    const updateQuery = `
      UPDATE user_prizes
      SET quantity = $1
      WHERE user_id = $2
      AND prize_id = $3
    `
    const updateParams = [
      inUserInventory && checkForRecord[0].quantity + 1,
      user_id,
      prize_id 
    ]
    const queryString = inUserInventory ? updateQuery : insertQuery
    const queryParams = inUserInventory ? updateParams : insertParams
    
    // get the prize record from store_prizes to get the quantity
    const storePrizeRecord = await db.query(`
      SELECT * from store_prizes
      WHERE store_id = $1
      AND prize_id = $2
    `, [store_id, prize_id])
    
    const { quantity } = storePrizeRecord[0]
    const storeUpdateQuery = `
      UPDATE store_prizes
      SET quantity = $1
      WHERE store_id = $2
      AND prize_id = $3
    `
    const storeUpdateParams = [
      quantity - 1,
      store_id,
      prize_id
    ]

    db.query(queryString, queryParams)
    .then(() => db.query(storeUpdateQuery, storeUpdateParams))
    .then(() => console.log(`Completed updates.`))
    .catch(err => console.error(err))
  });

  return router;
};
