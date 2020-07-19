const chalk = require("chalk");
const pg = require("pg");

const client = new pg.Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

console.log(chalk.cyan(`-> Connecting to database ...`));
client
  .connect()
  .then(() =>
    console.log(chalk.green("Successfully connected to Postgres server."))
  )
  .catch((err) =>
    console.error(chalk.red(`Error connecting to Postgres server:\n${err}`))
  );

module.exports = client;
