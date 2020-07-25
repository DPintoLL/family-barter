import { useReducer, useEffect } from "react";
import axios from "axios";

import { IQuest, IStage, ITask } from "../interfaces";

import reducer, {
  SET_APPLICATION_DATA,
  SET_QUEST,
  SET_STAGE,
  SET_TASK,
} from "reducers/application";

import { getQuestById, getStageById, getTaskById } from "../selectors";

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      id: 1,
      family_id: 1,
    },
    quests: [],
    family_members: [],
    stores: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/quests"),
      axios.get("/prizes"),
      axios.get("/stores"),
    ]).then((all) => {
      const [quests] = all.map((res) => res.data);
      dispatch({ type: SET_APPLICATION_DATA, quests });
    });
  }, []);

  /**
   * Add a new quest.
   * @param {Object} quest
   */
  function addQuest(quest: IQuest) {
    dispatch({ type: SET_QUEST, quest });
  }

  /**
   * Edit an existing quest.
   * @param {number} id
   * @param {Object} quest
   */
  function editQuest(id: number, data: Object) {
    const quest = Object.assign(getQuestById(state, id), data);
    dispatch({ type: SET_QUEST, quest });
  }

  /**
   * Assign a quest to a user.
   * @param {number} questId
   * @param {number} userId
   */
  function acceptQuest(questId: number) {
    editQuest(questId, {
      assigned_to: state.user.id,
    });
  }

  /**
   * Add a new stage.
   * @param {Object} stage
   */
  function addStage(stage: IStage) {
    dispatch({ type: SET_STAGE, stage });
  }

  /**
   * Edit an existing stage.
   * @param {number} id
   * @param {Object} stage
   */
  function editStage(id: number, data: Object) {
    const stage = Object.assign(getStageById(state, id), data);
    dispatch({ type: SET_STAGE, stage });
  }

  /**
   * Add a new task.
   * @param {Object} task
   */
  function addTask(task: ITask) {
    dispatch({ type: SET_TASK, task });
  }

  /**
   * Edit an existing task.
   * @param {number} id
   * @param {Object} data
   */
  function editTask(id: number, data: Object) {
    const task = Object.assign(getTaskById(state, id), data);
    dispatch({ type: SET_TASK, task });
  }

  /**
   * Toggle task completion.
   * @param {number} id
   * @param {boolean} isComplete
   */
  function setTaskCompletion(id: number, is_complete: boolean) {
    editTask(id, { is_complete });
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
    setTaskCompletion,
  };
}
