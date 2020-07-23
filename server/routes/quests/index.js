// ./routes/quests/index.js

const express = require("express");
const reviews = require("./reviews");
const tasks = require("./tasks");

const router = express.Router({ mergeParams: true });

module.exports = (db) => {
  // ## /quests path
  // ### GET Method
  // Return list of most recent quests.
  router.get("/", (req, res) => {
    db.quests
      .all(1)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // ### POST Method
  // Add a new quest.
  router.post("/", (req, res) => {
    db.quests
      .add(1, req.body)
      .then(() => {
        res.status(201).json({
          status: "success",
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // ## /quests/available
  // ### GET Method
  // Return list of currently active quests.
  router.get("/available", (req, res) => {
    res.send(`GET /quests/available route hit`);
  });

  // ## /quests/assigned
  // ### GET Method
  // Return list of currently active quests.
  router.get("/assigned", (req, res) => {
    res.send(`GET /quests/assigned route hit`);
  });

  // ## /quests/completed
  // ### GET Method
  // Return list of completed quests.
  router.get("/completed", (req, res) => {
    res.send(`GET /quests/completed route hit`);
  });

  // ## /quests/{quest_id}
  // ### GET Method
  // Return quest object (should have a "next" property with the quest_id of the next stage of the quest, if available).
  router.get("/:quest_id", (req, res) => {
    db.quests
      .get(req.params.quest_id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // ### PUT Method
  // Send edited quest to server.
  router.put("/:quest_id", (req, res) => {
    db.quests
      .update(req.params.quest_id, req.body)
      .then(() => {
        res.status(204).json({
          status: "success",
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // ### DELETE Method
  // Remove quest from server.
  router.delete("/:quest_id", (req, res) => {
    db.quests
      .delete(req.params.quest_id)
      .then(() => {
        res.status(204).json({
          status: "success",
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // ## quests/{quest_id}/accept
  // ### POST Method
  // Assign user to active quest.
  router.post("/:quest_id/accept", (req, res) => {
    db.quests
      .assign(req.params.quest_id, req.body.user_id)
      .then(() => {
        res.status(204).json({
          status: "success",
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // ## /quests/{quest_id}/reviews routes
  router.use("/:quest_id/reviews", reviews(db));

  // ## /quests/{quest_id}/tasks routes
  router.use("/:quest_id/tasks", tasks(db));

  return router;
};
