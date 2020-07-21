// ./routes/index.js
const home = require("./home");
const login = require("./login");
const register = require("./register");
const family = require("./family");

/**
 * Initialize all routers.
 * @param {Object} app - Express app
 * @param {Object} db - Database connection
 */
module.exports = (app, db) => {
  app.use("/login", login(db));
  app.use("/register", register(db));
  app.use("/:family_id", family(db));
  app.use("/", home(db));
};
