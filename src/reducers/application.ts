import { IAction, IQuest, IState, IStage, ITask } from "../interfaces";
import { getQuestById, getStageById } from "../selectors";

export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_QUEST = "SET_QUEST";
export const SET_STAGE = "SET_STAGE";
export const SET_TASK = "SET_TASK";
export const SET_TASK_COMPLETION = "SET_TASK_COMPLETION";

export default function reducer(state: IState, action: IAction) {
  if (action.type === SET_APPLICATION_DATA) {
    const { quests, family_members } = action;
    return { ...state, quests, family_members } as IState;
  }

  if (action.type === SET_QUEST) {
    const { quest } = action;

    return addQuestToState(quest as IQuest, state);
  }

  if (action.type === SET_STAGE) {
    const { stage } = action;
    const quest = addStageToQuest(
      stage as IStage,
      getQuestById(state, stage!.quest_id!) as IQuest
    );

    return addQuestToState(quest, state);
  }

  if (action.type === SET_TASK) {
    const { task } = action;

    const stage = addTaskToStage(
      task as ITask,
      getStageById(state, task!.stage_id!) as IStage
    );

    const quest = addStageToQuest(
      stage,
      getQuestById(state, stage!.quest_id!) as IQuest
    );

    return addQuestToState(quest, state);
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}

const addTaskToStage = (task: ITask, stage: IStage): IStage => {
  const tasks = [
    ...stage!.tasks.filter((t) => t.id !== task!.id),
    task as ITask,
  ] as ITask[];

  return {
    ...stage,
    tasks: tasks.sort((a: ITask, b: ITask) => a.index - b.index),
  } as IStage;
};

const addStageToQuest = (stage: IStage, quest: IQuest): IQuest => {
  const stages = [
    ...quest!.stages.filter((s) => s.id !== stage!.id),
    stage,
  ] as IStage[];

  return {
    ...quest,
    stages: stages.sort((a: IStage, b: IStage) => a.index - b.index),
  } as IQuest;
};

const addQuestToState = (quest: IQuest, state: IState) => {
  const quests = [
    ...state.quests.filter((q) => q.id !== quest!.id),
    quest,
  ] as IQuest[];

  return {
    ...state,
    quests: quests.sort((a: IQuest, b: IQuest) => a.id - b.id),
  } as IState;
};
