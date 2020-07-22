// src/selectors/stages.js

import { IQuest, IStage, IState } from "../interfaces";

/**
 * Returns the stage object for a specified id.
 * @param {Object} state
 * @param {Number} id
 */
export function getStageFromStateById(
  state: IState,
  id: number
): IStage | null {
  return (
    state.quests
      .reduce((stages: IStage[], quest: IQuest) => {
        return stages.concat(quest.stages);
      }, [])
      .find((stage: IStage) => stage.id === id) || null
  );
}

/**
 * Returns the stage object for a specified id.
 * @param {Object} quest
 * @param {number} id
 */
export function getStageFromQuestById(
  quest: IQuest,
  id: number
): IStage | null {
  return quest.stages.find((stage: IStage) => stage.id === id) || null;
}

/**
 * Return the active stage of a quest.
 * @param {Array} stages
 */
export function getActiveStage(stages: IStage[]) {
  return stages.find((stage: IStage) => !stage.is_completed) || null;
}
