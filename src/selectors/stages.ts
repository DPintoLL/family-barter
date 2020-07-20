// src/selectors/stages.js

import { Quest, Stage, State } from "../interfaces";

/**
 * Returns the stage object for a specified id.
 * @param {Object} state
 * @param {Number} id
 */
export function getStageFromStateById(state: State, id: Number): Stage | null {
  return (
    state.quests
      .reduce((stages: Array<Stage>, quest: Quest) => {
        return stages.concat(quest.stages);
      }, [])
      .find((stage: Stage) => stage.id === id) || null
  );
}

/**
 * Returns the stage object for a specified id.
 * @param {Object} state
 * @param {Number} id
 */
export function getStageFromQuestById(quest: Quest, id: Number): Stage | null {
  return quest.stages.find((stage: Stage) => stage.id === id) || null;
}
