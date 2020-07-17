// ./routes/quests/index.js

const express = require("express");
const reviews = require("./reviews");
const tasks = require("./tasks");
const router = express.Router({ mergeParams: true });

// ## /{family_id}/quests path
// ### GET Method
// Return list of most recent quests.
router.get("/", (req, res) => {
  res.send(`GET /:family_id/quests route hit`);
});

// ### POST Method
// Add a new quest.
router.post("/", (req, res) => {
  res.send(`POST /:family_id/quests route hit`);
});

// ## /{family_id}/quests/active
// ### GET Method
// Return list of currently active quests.
router.get("/active", (req, res) => {
  res.send(`GET /:family_id/quests/active route hit`);
});

// ## /{family_id}/quests/completed
// ### GET Method
// Return list of completed quests.
router.get("/completed", (req, res) => {
  res.send(`GET /:family_id/quests/completed route hit`);
});

// ## /{family_id}/quests/{quest_id}
// ### GET Method
// Return quest object (should have a "next" property with the quest_id of the next stage of the quest, if available).
router.get("/:quest_id", (req, res) => {
  res.send(`GET /:family_id/quests/:quest_id route hit`);
});

// ### PUT Method
// Send edited quest to server.
router.put("/:quest_id", (req, res) => {
  res.send(`PUT /:family_id/quests/:quest_id route hit`);
});

// ### DELETE Method
// Remove quest from server.
router.delete("/:quest_id", (req, res) => {
  res.send(`DELETE /:family_id/quests/:quest_id route hit`);
});

// ## /{family_id}/quests/{quest_id}/accept
// ### POST Method
// Assign user to active quest.
router.post("/:quest_id/accept", (req, res) => {
  res.send(`POST /:family_id/quests/:quest_id/accept route hit`);
});

// ## /{family_id}/quests/{quest_id}/edit
// ### GET Method
// Return edit quest page for an active quest.
router.get("/:quest_id/edit", (req, res) => {
  res.send(`GET /:family_id/quests/:quest_id/edit route hit`);
});

// ## /{family_id}/quests/{quest_id}/reviews routes
router.use("/:quest_id/reviews", reviews);

// ## /{family_id}/quests/{quest_id}/tasks routes
router.use("/:quest_id/tasks", tasks);

module.exports = router;
