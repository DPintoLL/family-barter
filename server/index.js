const PORT = process.env.PORT || 8000;
const ENV = require("./environment");

const express = require("express");
const mountRoutes = require("./routes");

const app = express();
mountRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${ENV} mode.`);
});
