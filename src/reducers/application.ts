import { IAction, IState } from "../interfaces";
import {
  getQuestById,
  getStageFromStateById,
  getStageFromQuestById,
  getTaskFromStateById,
  getTaskFromStageById,
} from "../selectors";

export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_QUEST = "SET_QUEST";
export const SET_STAGE = "SET_STAGE";
export const SET_TASK = "SET_TASK";
export const ADD_QUEST = "ADD_QUEST";
export const ADD_STAGE = "ADD_STAGE";
export const ADD_TASK = "ADD_TASK";
export const ASSIGN_QUEST = "ASSIGN_QUEST";
export const COMPLETE_TASK = "COMPLETE_TASK";

export default function reducer(state: IState, action: IAction) {
  if (action.type === SET_APPLICATION_DATA) {
    const { quests, family_members } = action;
    return { ...state, quests, family_members } as IState;
  }

  if (action.type === SET_QUEST) {
    const { id, quest } = action;

    const quests = [
      ...state.quests.filter((q) => q.id !== id),
      { ...getQuestById(state, id!), ...quest! },
    ];
    return { ...state, quests } as IState;
  }

  if (action.type === SET_STAGE) {
    const { id, stage } = action;
    const quest = getQuestById(state, stage!.quest_id!);

    const stages = [
      ...quest!.stages.filter((s) => s.id !== id),
      { ...getStageFromQuestById(quest!, id!), ...stage! },
    ];

    const quests = [
      ...state.quests.filter((q) => q.id !== quest!.id),
      { ...quest, stages },
    ];

    return { ...state, quests } as IState;
  }

  if (action.type === SET_TASK) {
    const { id, task } = action;
    const stage = getStageFromStateById(state, task!.stage_id!);
    const quest = getQuestById(state, stage!.quest_id!);

    const tasks = [
      ...stage!.tasks.filter((t) => t.id !== id!),
      { ...getTaskFromStageById(stage!, id!), ...task! },
    ];

    const stages = [
      ...quest!.stages.filter((s) => s.id !== stage!.id),
      { ...stage, tasks },
    ];

    const quests = [
      ...state.quests.filter((q) => q.id !== quest!.id),
      { ...quest, stages },
    ];

    return { ...state, quests } as IState;
  }

  if (action.type === ADD_QUEST) {
    const { quest } = action;
    return {
      ...state,
      quests: [...state.quests, quest],
    } as IState;
  }

  if (action.type === ADD_STAGE) {
    const { id, stage } = action;
    const quest = getQuestById(state, id!);

    const stages = [...quest!.stages, stage];

    const quests = [
      ...state.quests.filter((q) => q.id !== id),
      { ...quest, stages },
    ];

    return { ...state, quests } as IState;
  }

  if (action.type === ADD_TASK) {
    const { id, task } = action;
    const stage = getStageFromStateById(state, id!);
    const quest = getQuestById(state, stage!.quest_id!);

    const tasks = [...stage!.tasks.filter((t) => t.id !== id!), task];

    const stages = [
      ...quest!.stages.filter((s) => s.id !== stage!.id),
      { ...stage, tasks },
    ];

    const quests = [
      ...state.quests.filter((q) => q.id !== quest!.id),
      { ...quest, stages },
    ];

    return { ...state, quests } as IState;
  }

  if (action.type === ASSIGN_QUEST) {
    const { id, assigned_to } = action;
    const quest = {
      ...getQuestById(state, id!),
      assigned_to,
    };
    return {
      ...state,
      quests: [...state.quests.filter((q) => q.id !== id), quest],
    } as IState;
  }

  if (action.type === COMPLETE_TASK) {
    const { id } = action;
    const task = getTaskFromStateById(state, id!);
    const stage = getStageFromStateById(state, task!.stage_id!);
    const quest = getQuestById(state, stage!.quest_id!);

    const tasks = [
      ...stage!.tasks.filter((t) => t.id !== task!.id),
      { ...task, is_completed: true },
    ];

    const stages = [
      ...quest!.stages.filter((s) => s.id !== stage!.id),
      { ...stage, tasks },
    ];

    const quests = [
      ...state.quests.filter((q) => q.id !== quest!.id),
      { ...quest, stages },
    ];

    return { ...state, quests } as IState;
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}
