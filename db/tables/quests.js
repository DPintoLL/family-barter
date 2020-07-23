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
      SELECT quests.id, quests.title, quests.description, quests.base_reward, quests.assigned_to,
        ARRAY(
          SELECT json_build_object(
            'id', quest_stages.id,
            'index', quest_stages.index_num,
            'title', quest_stages.title,
            'description', quest_stages.description,
            'tasks', ARRAY(
              SELECT json_build_object(
                'id', quest_tasks.id,
                'index', quest_tasks.index_num,
                'name', quest_tasks.name,
                'description', quest_tasks.description,
                'is_completed', quest_tasks.is_completed
              )
              FROM quest_tasks
              WHERE stage_id = quest_stages.id
              ORDER BY quest_tasks.index_num
            ),
            'is_completed', quest_stages.is_completed
          )
          FROM quest_stages
          WHERE quest_id = quests.id
          ORDER BY quest_stages.index_num
        ) AS stages
      FROM quests
      WHERE family_id = $1;
    `;
    return this.db.query(queryString, [familyId]);
  }

  /**
   * Retrieve a quest by its id.
   * @param {number} questId
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
   * @param {number} familyId
   * @param {Object} quest
   */
  add(familyId, quest) {
    const { title, description, baseReward, assignedTo, createdBy } = quest;

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
   * @param {number} questId
   * @param {Object} data
   */
  update(questId, data) {
    const {
      familyId,
      title,
      description,
      baseReward,
      assignedTo,
      updatedBy,
    } = data;

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
      questId,
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
   * @param {number} questId
   */
  delete(questId) {
    const queryString = `
      DELETE FROM quests
      WHERE id = $1;
    `;

    return this.db.query(queryString, [questId]);
  }

  /**
   * Assign a quest to a user.
   * @param {number} questId
   * @param {number} userId
   */
  assign(questId, userId) {
    const queryString = `
      UPDATE quests
      SET assigned_to = $2,
      WHERE id = $1;
    `;

    return this.db.query(queryString, [questId, userId]);
  }
}

module.exports = QuestsTable;
