// load .env data into process.env
require("dotenv").config();

// Dependencies
const fs = require("fs");
const chalk = require("chalk");
const { Client } = require("pg");

// Setup database connection
const client = new Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

// Load files from /db directory
const loadFiles = function (folder) {
  const fileType = folder.charAt(0).toUpperCase() + folder.slice(1);
  console.log(chalk.cyan(`-> Loading ${fileType} Files ...`));
  const filenames = fs.readdirSync(`./db/${folder}`);
  return filenames.map((fn) => {
    return [fn, fs.readFileSync(`./db/${folder}/${fn}`, "utf8")];
  });
};

// Run files from /db directory
const runFiles = function (files, fileType) {
  if (files.length === 0) {
    console.log(`\t-> All ${fileType} files run successfully`);
    return null;
  } else {
    const [fn, sql] = files.shift();
    console.log(`\t-> Running ${chalk.green(fn)}`);
    return client.query(sql).then(() => runFiles(files));
  }
};

// Loads the schema files from db/schema
const runSchemaFiles = function () {
  const schemaFiles = loadFiles("schema");
  return runFiles(schemaFiles, "schema");
};

// Loads the seed files from db/seeds
const runSeedFiles = function () {
  const schemaFiles = loadFiles("seeds");
  return runFiles(schemaFiles, "seed");
};

// Reset database
console.log(chalk.cyan(`-> Connecting to database ...`));
client
  .connect()
  .then(() => {
    console.log(chalk.green("Connected to database!"));
    runSchemaFiles().then(() => runSeedFiles());
    client.end();
    console.log("Database connection closed.");
  })
  .catch((err) => {
    console.error(chalk.red(`Failed due to error:\n${err}`));
    client.end();
  });
