// db/tables/quest_tasks.js

/**
 * Manages all requests to the quest_tasks table of the database.
 */
class QuestTasksTable {
  constructor(database) {
    this.db = database;
  }

  /**
   * Retrieve all taks for a stage by the stage id.
   * @param {Number} stageId
   */
  all(stageId) {
    const queryString = `
      SELECT *
      FROM quest_tasks
      WHERE stage_id = $1;
    `;
    return this.db.query(queryString, [stageId]);
  }

  /**
   * Retrieve a task by its id.
   * @param {Number} taskId
   */
  get(taskId) {
    const queryString = `
      SELECT *
      FROM quest_tasks
      WHERE id = $1;
    `;
    return this.db.query(queryString, [taskId]);
  }

  /**
   * Add a new task to a quest stage.
   * @param {Object} task
   */
  add(task) {
    const { stageId, index, name, description } = task;

    const queryString = `
      INSERT INTO quest_tasks (stage_id, index_num, title, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    return this.db.query(queryString, [stageId, index, name, description]);
  }

  /**
   * Update an existing task.
   * @param {Object} task
   */
  update(task) {
    const { id, stageId, index, name, description, isCompleted } = task;

    const queryString = `
      UPDATE quest_tasks
      SET stage_id = $2,
          index_num = $3,
          name = $4,
          description = $5,
          is_completed = $6
      WHERE id = $1;
    `;

    return this.db.query(queryString, [
      id,
      stageId,
      index,
      name,
      description,
      isCompleted,
    ]);
  }

  /**
   * Delete a task from a quest stage.
   * @param {Number} taskId
   */
  delete(taskId) {
    const queryString = `
      DELETE FROM quest_tasks
      WHERE id = $1;
    `;

    return this.db.query(queryString, [taskId]);
  }

  /**
   * Mark a task as complete.
   * @param {number} taskId
   */
  markComplete(taskId) {
    const queryString = `
      UPDATE quest_tasks
      SET is_completed = true
      WHERE id = $1;
    `;
    return this.db.query(queryString, [taskId]);
  }

  /**
   * Mark a task as incomplete.
   * @param {number} taskId
   */
  markIncomplete(taskId) {
    const queryString = `
      UPDATE quest_tasks
      SET is_completed = false
      WHERE id = $1;
    `;
    return this.db.query(queryString, [taskId]);
  }
}

module.exports = QuestTasksTable;
