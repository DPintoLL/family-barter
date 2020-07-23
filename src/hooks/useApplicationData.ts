import { useReducer, useEffect } from "react";
import axios from "axios";

import { IQuest, IStage, ITask } from "../interfaces";

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
    stores: [],
  });

  useEffect(() => {
    Promise.all([axios.get("/quests")]).then((all) => {
      const [quests] = all.map((res) => res.data);
      dispatch({ type: SET_APPLICATION_DATA, quests });
    });
  }, []);

  /**
   * Add a new quest.
   * @param {Object} quest
   */
  function addQuest(quest: IQuest) {
    dispatch({ type: ADD_QUEST, quest });
  }

  /**
   * Edit an existing quest.
   * @param {number} id
   * @param {Object} quest
   */
  function editQuest(id: number, quest: IQuest) {
    dispatch({ type: SET_QUEST, id, quest });
  }

  /**
   * Assign a quest to a user.
   * @param {number} questId
   * @param {number} userId
   */
  function acceptQuest(questId: number, userId: number) {
    dispatch({ type: ASSIGN_QUEST, id: questId, assigned_to: userId });
  }

  /**
   * Add a new stage.
   * @param {Object} stage
   */
  function addStage(stage: IStage) {
    dispatch({ type: ADD_STAGE, stage });
  }

  /**
   * Edit an existing stage.
   * @param {number} id
   * @param {Object} stage
   */
  function editStage(id: number, stage: IStage) {
    dispatch({ type: SET_STAGE, id, stage });
  }

  /**
   * Add a new task.
   * @param {Object} task
   */
  function addTask(task: ITask) {
    dispatch({ type: ADD_TASK, task });
  }

  /**
   * Edit an existing task.
   * @param {number} id
   * @param {Object} task
   */
  function editTask(id: number, task: ITask) {
    dispatch({ type: SET_TASK, id, task });
  }

  /**
   * Complete a task.
   * @param {number} id
   */
  function completeTask(id: number) {
    dispatch({ type: COMPLETE_TASK, id });
  }

  return {
    state,
    addQuest,
    editQuest,
    acceptQuest,
    addStage,
    editStage,
    addTask,
    editTask,
    completeTask,
  };
}
