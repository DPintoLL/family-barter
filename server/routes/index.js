// ./routes/index.js
const home = require("./home");
const login = require("./login");
const register = require("./register");
const family = require("./family");

module.exports = (app) => {
  app.use("/login", login);
  app.use("/register", register);
  app.use("/:family_id", family);
  app.use("/", home);
};
