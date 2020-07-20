// src/selectors/tasks.js

import { Quest, Stage, State, Task } from "../interfaces";

/**
 * Returns the task object for a specified id.
 * @param {Object} state
 * @param {Number} id
 */
export function getTaskById(state: State, id: Number) {
  return state.quests
    .reduce((stages: Array<Stage>, quest: Quest) => {
      return stages.concat(
        quest.stages.map((stage) => {
          return { ...stage, questId: quest.id };
        })
      );
    }, [])
    .reduce((tasks: Array<Task>, stage: Stage) => {
      return tasks.concat(
        stage.tasks.map((task) => {
          return { ...task, questId: stage.quest_id, stageId: stage.id };
        })
      );
    }, [])
    .find((task: Task) => task.id === id);
}
