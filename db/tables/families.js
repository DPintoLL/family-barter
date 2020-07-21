// db/tables/families.js

/**
 * Manages all requests to the families table of the database.
 */
class FamiliesTable {
  constructor(database) {
    this.db = database;
  }

  /**
   * Retrieve all families.
   * @param {String} visitorId
   */
  all() {
    const queryString = `
      SELECT *
      FROM families;
    `;
    return this.db.query(queryString);
  }

  /**
   * Retrieve a family by its id.
   * @param {String} familyId
   */
  get(familyId) {
    const queryString = `
      SELECT *
      FROM families
      WHERE families.id = $1;
    `;
    return this.db.query(queryString, [familyId]);
  }

  /**
   * Add a new family.
   * @param {*} surname
   */
  add(surname) {
    const queryString = `
      INSERT INTO families (surname)
      VALUES ($1)
      RETURNING *;
    `;
    return this.db.query(queryString, [surname]);
  }
}

module.exports = FamiliesTable;
