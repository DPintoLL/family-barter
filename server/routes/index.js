// ./routes/index.js
const login = require("./login");
const register = require("./register");
const quests = require("./quests");
const tasks = require("./tasks");
const prizes = require("./prizes");
const stores = require("./stores");
const users = require("./users");

/**
 * Initialize all routers.
 * @param {Object} app - Express app
 * @param {Object} db - Database connection
 */
module.exports = (app, db) => {
  app.use("/login", login(db));
  app.use("/register", register(db));
  app.use("/quests", quests(db));
  app.use("/tasks", tasks(db));
  app.use("/prizes", prizes(db));
  app.use("/stores", stores(db));
  app.use("/users", users(db));
};
