// ./routes/tasks.js

const express = require("express");
const router = express.Router({ mergeParams: true });

module.exports = (db) => {
  // ## /tasks/{task_id}/complete
  // ### POST Method
  // Mark a quest tasks as complete.
  router.post("/:task_id/complete", (req, res) => {
    db.tasks
      .markComplete(req.task_id)
      .then(() => {
        res.status(201).json({
          status: "success",
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // ## /tasks/{task_id}/incomplete
  // ### POST Method
  // Mark a quest tasks as incomplete.
  router.post("/:task_id/incomplete", (req, res) => {
    db.tasks
      .markIncomplete(req.task_id)
      .then(() => {
        res.status(201).json({
          status: "success",
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
