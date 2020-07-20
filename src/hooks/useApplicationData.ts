import { useReducer, useEffect } from "react";
import axios from "axios";

import reducer, {
  SET_APPLICATION_DATA,
  SET_QUEST,
  SET_STAGE,
  SET_TASK,
  ASSIGN_QUEST,
  COMPLETE_TASK,
} from "reducers/application";

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    quests: [],
    family_members: [],
  });

  // useEffect(() => {
  //   Promise.all([axios.get("/api/users"), axios.get("/api/quests")]).then(
  //     (all) => {
  //       const [family_members, quests] = all.map((res) => res.data);
  //       dispatch({ type: SET_APPLICATION_DATA, quests, family_members });
  //     }
  //   );
  // }, []);

  function acceptQuest(questId: number, userId: number) {
    dispatch({ type: ASSIGN_QUEST, id: questId, assigned_to: userId });
  }

  return { state, acceptQuest };
}
