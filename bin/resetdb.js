// bin/resetdb.js

const path = require("path");

// set path to .env file
const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../.env." + ENV);

// load .env data into process.env
require("dotenv").config({ path: PATH });

// dependencies
const fs = require("fs");
const chalk = require("chalk");
const { Client } = require("pg");

// setup database connection
const client = new Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

// load files from /db directory
const loadFiles = function (folder) {
  const fileType = folder.charAt(0).toUpperCase() + folder.slice(1);
  console.log(chalk.cyan(`-> Loading ${fileType} Files ...`));
  const filenames = fs.readdirSync(`./db/${folder}`);
  return filenames.map((fn) => {
    return [fn, fs.readFileSync(`./db/${folder}/${fn}`, "utf8")];
  });
};

// run files from /db directory
const runFiles = function (files, fileType) {
  if (files.length === 0) {
    return null;
  } else {
    const [fn, sql] = files.shift();
    console.log(`\t-> Running ${chalk.green(fn)}`);
    return client.query(sql).then(() => runFiles(files, fileType));
  }
};

// loads the schema files from db/schema
const runSchemaFiles = function () {
  const schemaFiles = loadFiles("schema");
  return runFiles(schemaFiles, "schema");
};

// loads the seed files from db/seeds
const runSeedFiles = function () {
  const schemaFiles = loadFiles("seeds");
  return runFiles(schemaFiles, "seed");
};

// reset database
console.log(chalk.cyan(`-> Connecting to database ...`));
client
  .connect()
  .then(() => {
    console.log(chalk.green("Connected to database!"));
  })
  .then(() => runSchemaFiles())
  .then(() => runSeedFiles())
  .then(() => client.end())
  .catch((err) => {
    console.error(chalk.red(`Failed due to error:\n${err}`));
    client.end();
  });

console.log("Database connection closed.");
