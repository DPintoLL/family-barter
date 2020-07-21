// db/tables/quest_stages.js

/**
 * Manages all requests to the quest_stages table of the database.
 */
class QuestStagesTable {
  constructor(database) {
    this.db = database;
  }

  /**
   * Retrieve all stages for a questId.
   * @param {Number} questId
   */
  all(questId) {
    const queryString = `
      SELECT *
      FROM quest_stages
      WHERE quest_id = $1;
    `;
    return this.db.query(queryString, [questId]);
  }

  /**
   * Retrieve a quest stage by its id.
   * @param {Number} stageId
   */
  get(stageId) {
    const queryString = `
      SELECT *
      FROM quest_stages
      WHERE id = $1;
    `;
    return this.db.query(queryString, [stageId]);
  }

  /**
   * Add a new stage to a quest.
   * @param {Object} stage
   */
  add(stage) {
    const { questId, index_num, title, description } = stage;

    const queryString = `
      INSERT INTO quest_stages (quest_id, index_num, title, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    return this.db.query(queryString, [questId, index_num, title, description]);
  }

  /**
   * Update an existing stage.
   * @param {Object} stage
   */
  update(stage) {
    const { id, questId, title, description, isCompleted } = stage;

    const queryString = `
      UPDATE quest_stages
      SET quest_id = $2,
          title = $3,
          description = $4,
          is_completed = $5
      WHERE id = $1;
    `;

    return this.db.query(queryString, [
      id,
      questId,
      title,
      description,
      isCompleted,
    ]);
  }

  /**
   * Delete a stage from a quest.
   * @param {Number} stageId
   */
  delete(stageId) {
    const queryString = `
      DELETE FROM quest_stages
      WHERE id = $1;
    `;

    return this.db.query(queryString, [stageId]);
  }
}

module.exports = QuestStagesTable;
