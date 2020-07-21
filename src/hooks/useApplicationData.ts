import { useReducer, useEffect } from "react";
import axios from "axios";

import { Quest } from "../interfaces";

import reducer, {
  SET_APPLICATION_DATA,
  SET_QUEST,
  SET_STAGE,
  SET_TASK,
  ADD_QUEST,
  ADD_STAGE,
  ADD_TASK,
  ASSIGN_QUEST,
  COMPLETE_TASK,
} from "reducers/application";

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    quests: [],
    family_members: [],
    stores: []
  });

  // useEffect(() => {
  //   Promise.all([axios.get("/api/users"), axios.get("/api/quests")]).then(
  //     (all) => {
  //       const [family_members, quests] = all.map((res) => res.data);
  //       dispatch({ type: SET_APPLICATION_DATA, quests, family_members });
  //     }
  //   );
  // }, []);

  /**
   * Add a new quest.
   * @param {Object} quest
   */
  function addQuest(quest: Quest) {
    dispatch({ type: ADD_QUEST, quest });
  }

  /**
   * Edit an existing quest.
   * @param {Number} id
   * @param {Object} quest
   */
  function editQuest(id: number, quest: Quest) {
    dispatch({ type: SET_QUEST, id, quest });
  }

  /**
   * Assign a quest to a user.
   * @param {Number} questId
   * @param {Number} userId
   */
  function acceptQuest(questId: number, userId: number) {
    dispatch({ type: ASSIGN_QUEST, id: questId, assigned_to: userId });
  }

  return { state, addQuest, editQuest, acceptQuest };
}
