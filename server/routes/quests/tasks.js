// ./routes/quests/tasks.js

const express = require("express");
const router = express.Router({ mergeParams: true });

module.exports = (db) => {
  // ## /{family_id}/quests/{quest_id}/tasks/{task_id}/complete
  // ### POST Method
  // Mark a quest tasks as completed.
  router.get("/:task_id/complete", (req, res) => {
    res.send(
      `GET /family_id/quests/:quest_id/tasks/:task_id/complete route hit`
    );
  });

  return router;
};
