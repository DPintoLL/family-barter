// src/selectors/tasks.js

import { IQuest, IStage, IState, ITask } from "../interfaces";

/**
 * Returns the task object for a specified id.
 * @param {Object} state
 * @param {number} id
 */
export function getTaskById(state: IState, id: number): ITask | null {
  return (
    state.quests
      .reduce((stages: IStage[], quest: IQuest) => {
        return stages.concat(quest.stages);
      }, [])
      .reduce((tasks: ITask[], stage: IStage) => {
        return tasks.concat(stage.tasks);
      }, [])
      .find((task: ITask) => task.id === id) || null
  );
}

/**
 * Returns the task object for a specified id.
 * @param {Object} state
 * @param {number} id
 */
export function getTaskFromQuestById(quest: IQuest, id: number): ITask | null {
  return (
    quest.stages
      .reduce((tasks: ITask[], stage: IStage) => {
        return tasks.concat(stage.tasks);
      }, [])
      .find((task: ITask) => task.id === id) || null
  );
}

/**
 * Returns the task object for a specified id.
 * @param {Object} stage
 * @param {number} id
 */
export function getTaskFromStageById(stage: IStage, id: number): ITask | null {
  return stage.tasks.find((task: ITask) => task.id === id) || null;
}
