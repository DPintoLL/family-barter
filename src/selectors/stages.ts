// src/selectors/stages.js

import { Quest, Stage, State } from "../interfaces";

/**
 * Returns the stage object for a specified id.
 * @param {Object} state
 * @param {Number} id
 */
export function getStageById(state: State, id: Number): Stage | null {
  return (
    state.quests
      .reduce((stages: Array<Stage>, quest: Quest) => {
        return stages.concat(quest.stages);
      }, [])
      .find((stage: Stage) => stage.id === id) || null
  );
}
