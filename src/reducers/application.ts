import { Action, State } from "../interfaces";
import { getQuestById, getStageById, getTaskById } from "../selectors";

export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_QUEST = "SET_QUEST";
export const SET_STAGE = "SET_STAGE";
export const SET_TASK = "SET_TASK";
export const ASSIGN_QUEST = "ASSIGN_QUEST";
export const COMPLETE_TASK = "COMPLETE_TASK";

export default function reducer(state: State, action: Action) {
  if (action.type === SET_APPLICATION_DATA) {
    const { quests, family_members } = action;
    return { ...state, quests, family_members } as State;
  }

  if (action.type === SET_QUEST) {
    const { quest } = action;
    return {
      ...state,
      quests: [...state.quests, quest],
    } as State;
  }

  if (action.type === SET_STAGE) {
    const { stage } = action;
    const quest = getQuestById(state, stage!.quest_id);

    const stages = [...quest!.stages.filter((s) => s.id !== stage!.id), stage];

    const quests = [
      ...state.quests.filter((q) => q.id !== quest!.id),
      { ...quest, stages },
    ];

    return { ...state, quests } as State;
  }

  if (action.type === SET_TASK) {
    const { task } = action;
    const stage = getStageById(state, task!.stage_id);
    const quest = getQuestById(state, stage!.quest_id);

    const tasks = [...stage!.tasks.filter((t) => t.id !== task!.id), task];

    const stages = [
      ...quest!.stages.filter((s) => s.id !== stage!.id),
      { ...stage, tasks },
    ];

    const quests = [
      ...state.quests.filter((q) => q.id !== quest!.id),
      { ...quest, stages },
    ];

    return { ...state, quests } as State;
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
    } as State;
  }

  if (action.type === COMPLETE_TASK) {
    const { id } = action;
    const task = getTaskById(state, id!);
    const stage = getStageById(state, task!.stage_id);
    const quest = getQuestById(state, stage!.quest_id);

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

    return { ...state, quests } as State;
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}
