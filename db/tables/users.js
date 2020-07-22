// db/tables/users.js

const bcrypt = require("bcrypt");

/**
 * Manages all requests to the users table of the database.
 */
class UsersTable {
  constructor(database) {
    this.db = database;
  }

  /**
   * Retrieve a user by their id.
   * @param {string} userId
   */
  getByID(userId) {
    const queryString = `
      SELECT *
      FROM users
      WHERE id = $1;
    `;
    return this.db.query(queryString, [userId]);
  }

  /**
   * Retrieve a user by their email.
   * @param {string} email
   */
  getByEmail(email) {
    const queryString = `
      SELECT *
      FROM users
      WHERE email = $1;
    `;
    return this.db.query(queryString, [email]);
  }

  /**
   * Add a new user.
   * @param {number} familyId
   * @param {object} user
   */
  add(user) {
    const {
      familyId,
      firstName,
      lastName,
      email,
      password,
      typeId,
      invitedBy,
    } = user;

    const passwordHash = bcrypt.hashSync(password, 10);

    const queryString = `
      INSERT INTO users (family_id, first_name, last_name, email, password_hash, type_id, invited_by)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    return this.db.query(queryString, [
      familyId,
      firstName,
      lastName,
      email,
      passwordHash,
      typeId,
      invitedBy,
    ]);
  }

  /**
   * Update an existing user.
   * @param {number} userId
   * @param {object} userData
   */
  update(userId, userData) {
    const { familyId, firstName, lastName, email, balance, typeId } = userData;

    const queryString = `
      UPDATE users
      SET family_id = $2,
          first_name = $3,
          last_name = $4,
          email = $5,
          balance = $6,
          type_id = $7
      WHERE id = $1;
    `;

    return this.db.query(queryString, [
      userId,
      familyId,
      firstName,
      lastName,
      email,
      balance,
      typeId,
    ]);
  }

  /**
   * Delete a user.
   * @param {number} userId
   */
  delete(userId) {
    const queryString = `
      DELETE FROM users
      WHERE id = $1;
    `;

    return this.db.query(queryString, [userId]);
  }

  /**
   * Check if an email address is in use.
   * @param {string} email
   */
  emailInUse(email) {
    const queryString = `
      SELECT *
      FROM users
      WHERE email = $1
    `;
    const result = this.db.query(queryString, [email]);
    return result && result.length > 0 ? true : false;
  }

  /**
   * Confirm a user's password.
   * @param {number} userId
   * @param {string} password
   */
  confirmPassword(userId, password) {
    const queryString = `
      SELECT password_hash
      FROM users
      WHERE id = $1
    `;
    const hash = this.db.query(queryString, [userId]);
    return bcrypt.compareSync(password, hash);
  }
}

module.exports = UsersTable;
