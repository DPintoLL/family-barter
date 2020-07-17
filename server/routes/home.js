// ./routes/home.js

const express = require('express')
const router = express.Router()

// Home (/) path

// GET / route
router.get('/', (req, res) => {
  res.send(`GET Home (/) route hit`)
})

// GET /{family_id} path
// ## /{family_id}
// ### GET Method
// Return family index page.
router.get('/:family_id', (req, res) => {
  res.send(`GET /:family_id route hit`)
})

// ## /{family_id}/quests path
// ### GET Method
// Return list of most recent quests.
router.get('/:family_id/quests', (req, res) => {
  res.send(`GET /:family_id/quests route hit`)
})


// ### POST Method
// Add a new quest.
router.post('/:family_id/quests', (req, res) => {
  res.send(`POST /:family_id/quests route hit`)
})


// ## /{family_id}/quests/active
// ### GET Method
// Return list of currently active quests.
router.get('/:family_id/quests/active', (req, res) => {
  res.send(`GET /:family_id/quests/active route hit`)
})

// ## /{family_id}/quests/completed
// ### GET Method
// Return list of completed quests.
router.get('/:family_id/quests/completed', (req, res) => {
  res.send(`GET /:family_id/quests/completed route hit`)
})


// ## /{family_id}/quests/{quest_id}
// ### GET Method
// Return quest object (should have a "next" property with the quest_id of the next stage of the quest, if available).
router.get('/:family_id/quests/:quest_id', (req, res) => {
  res.send(`GET /:family_id/quests/:quest_id route hit`)
})

// ### PUT Method
// Send edited quest to server.
router.put('/:family_id/quests/:quest_id', (req, res) => {
  res.send(`PUT /:family_id/quests/:quest_id route hit`)
})

// ### DELETE Method
// Remove quest from server.
router.delete('/:family_id/quests/:quest_id', (req, res) => {
  res.send(`DELETE /:family_id/quests/:quest_id route hit`)
})

// ## /{family_id}/quests/{quest_id}/accept
// ### POST Method
// Assign user to active quest.
router.post('/:family_id/quests/:quest_id/accept', (req, res) => {
  res.send(`POST /:family_id/quests/:quest_id/accept route hit`)
})

// ## /{family_id}/quests/{quest_id}/edit
// ### GET Method
// Return edit quest page for an active quest.
router.get('/:family_id/quests/:quest_id/edit', (req, res) => {
  res.send(`GET /:family_id/quests/:quest_id/edit route hit`)
})

// ## /{family_id}/quests/{quest_id}/reviews
// ### GET Method
// Return reviews for a completed quest.
router.get('/:family_id/quests/:quest_id/reviews', (req, res) => {
  res.send(`GET /:family_id/quests/:quest_id/reviews route hit`)
})

// ### POST Method
// Submit quest review to server.
router.post('/:family_id/quests/:quest_id/reviews', (req, res) => {
  res.send(`POST /:family_id/quests/:quest_id/reviews route hit`)
})

// ## /{family_id}/quests/{quest_id}/reviews/{review_id}
// ### GET Method
// Return details of quest review.
router.get('/:family_id/quests/:quest_id/reviews/:review_id', (req, res) => {
  res.send(`GET /:family_id/quests/:quest_id/reviews/:review_id route hit`)
})

// ## /{family_id}/quests/{quest_id}/steps/{step_id}/complete
// ### POST Method
// Mark a quest step as completed.
router.get('/:family_id/quests/:quest_id/steps/:step_id/complete', (req, res) => {
  res.send(`GET /family_id/quests/:quest_id/steps/:step_id/complete route hit`)
})


// ## /{family_id}/rewards
// ### GET Method
// Return list of available rewards.
router.get('/:family_id/rewards', (req, res) => {
  res.send(`GET /:family_id/rewards route hit`)
})

// ### POST Method
// Create a new reward.
router.post('/:family_id/rewards', (req, res) => {
  res.send(`POST /:family_id/rewards route hit`)
})

// ## /{family_id}/rewards/{reward_id}
// ### GET Method
// Get details of a reward.
router.get('/:family_id/rewards/:reward_id', (req, res) => {
  res.send(`GET /:family_id/rewards/:reward_id route hit`)
})

// ### PUT Method
// Update reward on server.
router.put('/:family_id/rewards/:reward_id', (req, res) => {
  res.send(`PUT /:family_id/rewards/:reward_id route hit`)
})

// ## /{family_id}/rewards/{reward_id}/edit
// ### GET Method
// Return edit reward page.
router.get('/:family_id/rewards/:reward_id/edit', (req, res) => {
  res.send(`GET /:family_id/rewards/:reward_id/edit route hit`)
})

// ## /{family_id}/stores
// ### GET Method
// Get list of available stores.
router.get('/:family_id/stores', (req, res) => {
  res.send(`GET /:family_id/stores route hit`)
})


// ## /{family_id}/stores/{store_id}
// ### GET Method
// Get details of store (including list of available rewards and discounts).
router.get('/:family_id/stores/:store_id', (req, res) => {
  res.send(`GET /:family_id/stores/:store_id route hit`)
})


// ## /{family_id}/stores/{store_id}/rewards/{reward_id}
// ### GET Method
// Get details of a reward.
router.get('/:family_id/stores/:store_id/rewards/:reward_id', (req, res) => {
  res.send(`GET /:family_id/stores/:store_id/rewards/:reward_id route hit`)
})

// ## /{family_id}/stores/{store_id}/rewards/{reward_id}/purchase
// ### POST Method
// Purchase a reward from a store.
router.post('/:family_id/stores/:store_id/rewards/:reward_id/purchase', (req, res) => {
  res.send(`POST /:family_id/stores/:store_id/rewards/:reward_id/purchase route hit`)
})

// ## /{family_id}/users
// ### GET Method
// Return list of users in a family.
router.get('/:family_id/users', (req, res) => {
  res.send('GET /:family_id/users route hit')
})

// ## /{family_id}/users/{user_id}
// ### GET Method
// Get details of a specific user in a family.
router.get('/family_id/users/:user_id', (req, res) => {
  res.send('GET /:family_id/users/:user_id route hit')
})

// ## /{family_id}/users/{user_id}/gold
// ### GET Method
// Return amount of gold available to a user.
router.get('/:family_id/users/:user_id/gold', (req, res) => {
  res.send(`GET /:family_id/users/:user_id/gold route hit`)
})

// ## /{family_id}/users/{user_id}/rewards
// ### GET Method
// Return rewards in user's inventory.
router.get('/:family_id/users/:user_id/rewards', (req, res) => {
  res.send(`GET /:family_id/users/:user_id/rewards route hit`)
})

// ## /{family_id}/users/{user_id}/store
// ### GET Method
// Return details of user's store.
router.get('/:family_id/users/:user_id/store', (req, res) => {
  res.send(`GET /:family_id/users/:user_id/store route hit`)
})

// ### PUT Method
// Update details of user's store.
router.put('/:family_id/users/:user_id/store', (req, res) => {
  res.send(`GET /family_id/users/:user_id/store route hit`)
})

// ## /{family_id}/users/{user_id}/store/rewards
// ### POST Method
// Add rewards to store.
router.post('/:family_id/users/:user_id/store/rewards', (req, res) => {
  res.send(`POST /:family_id/users/:user_id/store/rewards route hit`)
})

module.exports = router