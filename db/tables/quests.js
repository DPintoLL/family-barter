// db/tables/quests.js

/**
 * Manages all requests to the quests table of the database.
 */
class QuestsTable {
  constructor(database) {
    this.db = database;
  }

  /**
   * Retrieve all quests for a familyId.
   * @param {Number} familyId
   */
  all(familyId) {
    const queryString = `
      SELECT *
      FROM quests
      WHERE id = $1;
    `;
    return this.db.query(queryString, [familyId]);
  }

  /**
   * Retrieve a quest by its id.
   * @param {String} questId
   */
  get(questId) {
    const queryString = `
      SELECT *
      FROM quests
      WHERE id = $1;
    `;
    return this.db.query(queryString, [questId]);
  }

  /**
   * Add a new quest.
   * @param {Object} quest
   */
  add(quest) {
    const {
      familyId,
      title,
      description,
      baseReward,
      assignedTo,
      createdBy,
    } = quest;

    const queryString = `
      INSERT INTO quests (family_id, title, description, base_reward, assigned_to, created_by)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    return this.db.query(queryString, [
      familyId,
      title,
      description,
      baseReward,
      assignedTo,
      createdBy,
    ]);
  }

  /**
   * Update an existing quest.
   * @param {Object} quest
   */
  update(quest) {
    const {
      id,
      familyId,
      title,
      description,
      baseReward,
      assignedTo,
      updatedBy,
    } = quest;

    const queryString = `
      UPDATE quests
      SET family_id = $2,
          title = $3,
          description = $4,
          base_reward = $5,
          assigned_to = $6,
          updated_at = NOW(),
          updated_by = $7
      WHERE id = $1;
    `;

    return this.db.query(queryString, [
      id,
      familyId,
      title,
      description,
      baseReward,
      assignedTo,
      updatedBy,
    ]);
  }

  /**
   * Delete a quest.
   * @param {Number} questId
   */
  delete(questId) {
    const queryString = `
      DELETE FROM quests
      WHERE id = $1;
    `;

    return this.db.query(queryString, [questId]);
  }
}

module.exports = QuestsTable;
