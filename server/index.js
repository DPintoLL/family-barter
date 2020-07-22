const PORT = process.env.PORT || 8000;
const ENV = require("./environment");

const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const { authenticate } = require("./middleware/authenticate");
const setupRoutes = require("./routes");
const db = require("../db");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["testkey1", "testkey2", "testkey3"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(authenticate(db));
setupRoutes(app, db);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${ENV} mode.`);
});
