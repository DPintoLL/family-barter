// db/index.js

// load .env data into process.env
require("dotenv").config();

const { Pool } = require("pg");

const FamiliesTable = require("./tables/families");
const UsersTable = require("./tables/users");
const QuestsTable = require("./tables/quests");
const QuestStagesTable = require("./tables/quest_stages");
const QuestTasksTable = require("./tables/quest_tasks");

/**
 * Manages all interactions with the database.
 */
class DatabaseConnection {
  constructor() {
    this.pool = new Pool(this._parameters());

    // Connected database tables
    this.families = new FamiliesTable(this);
    this.users = new UsersTable(this);
    this.quests = new QuestsTable(this);
    this.stages = new QuestStagesTable(this);
    this.tasks = new QuestTasksTable(this);
  }

  /**
   * Sets database connection parameters from environmental variables.
   */
  _parameters() {
    return {
      host: process.env.PGHOST,
      port: process.env.PGPORT,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      max: 3,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
  }

  /**
   * Execute an SQL query against the connected database.
   * @param {String} text - A valid SQL query string.
   * @param {Object} params - Query parameters.
   */
  async query(text, params) {
    const client = await this.pool.connect();
    const response = await client.query(text, params);
    client.release();
    return response.rows;
  }

  /**
   * Checkout a client from connection pool.
   */
  client() {
    return this.pool.connect();
  }
}

// Instantiate the database connection
const databaseConnection = new DatabaseConnection();

// Freeze the database connection object
Object.freeze(databaseConnection);

// Export the database connection
module.exports = databaseConnection;
