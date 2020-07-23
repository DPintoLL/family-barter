// src/selectors/quests.js

import { IQuest, IState } from "../interfaces";

/**
 * Returns the quest object for a specified id.
 * @param {Object} state
 * @param {number} id
 */
export function getQuestById(state: IState, id: number) {
  return state.quests.find((quest: IQuest) => quest.id === id);
}
