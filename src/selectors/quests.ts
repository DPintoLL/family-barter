// src/selectors/quests.js

import { Quest, State } from "../interfaces";

/**
 * Returns the quest object for a specified id.
 * @param {Object} state
 * @param {Number} id
 */
export function getQuestById(state: State, id: Number) {
  return state.quests.find((quest: Quest) => quest.id === id);
}
