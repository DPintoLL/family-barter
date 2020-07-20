// src/selectors/tasks.js

import { Quest, Stage, State, Task } from "../interfaces";

/**
 * Returns the task object for a specified id.
 * @param {Object} state
 * @param {Number} id
 */
export function getTaskFromStateById(state: State, id: Number): Task | null {
  return (
    state.quests
      .reduce((stages: Array<Stage>, quest: Quest) => {
        return stages.concat(quest.stages);
      }, [])
      .reduce((tasks: Array<Task>, stage: Stage) => {
        return tasks.concat(stage.tasks);
      }, [])
      .find((task: Task) => task.id === id) || null
  );
}

/**
 * Returns the task object for a specified id.
 * @param {Object} state
 * @param {Number} id
 */
export function getTaskFromQuestById(quest: Quest, id: Number): Task | null {
  return (
    quest.stages
      .reduce((tasks: Array<Task>, stage: Stage) => {
        return tasks.concat(stage.tasks);
      }, [])
      .find((task: Task) => task.id === id) || null
  );
}

/**
 * Returns the task object for a specified id.
 * @param {Object} stage
 * @param {Number} id
 */
export function getTaskFromStageById(stage: Stage, id: Number): Task | null {
  return stage.tasks.find((task: Task) => task.id === id) || null;
}
