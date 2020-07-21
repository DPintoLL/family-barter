const PORT = process.env.PORT || 8000;
const ENV = require("./environment");

const db = require("../db");
const express = require("express");
const setupRoutes = require("./routes");

const app = express();
setupRoutes(app, db);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${ENV} mode.`);
});
