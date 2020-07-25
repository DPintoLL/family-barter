export type ITask = {
  id: number;
  index: number;
  name: string;
  description: string | null;
  is_completed: boolean;
  quest_id?: number;
  stage_id?: number;
};

export type IStage = {
  id: number;
  index: number;
  title: string;
  description: string | null;
  tasks: ITask[];
  is_completed: boolean;
  quest_id?: number;
};

export type IQuest = {
  id: number;
  title: string;
  description: string;
  base_reward: number;
  assigned_to: number;
  stages: IStage[];
};

export type Prize = {
  id: number;
  family_id: number;
  name: string;
  description: string;
  cost: number;
  icon_url: string;
  icon_color: string;
  is_shared: boolean;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
};

export type Store = {
  id: number;
  user_id: number;
  family_id: number;
  prizes: Prize[];
};

export type IDifficulty = "common" | "uncommon" | "rare" | "legendary" | "epic";

export interface IState {
  user: { id: number; family_id: number };
  quests: IQuest[];
  stores: Store[];
  family_members: Object[];
}

export interface IAction {
  id?: number;
  assigned_to?: number;
  type: string;
  quest?: IQuest;
  quests?: IQuest[];
  stage?: IStage;
  task?: ITask;
  isComplete?: boolean;
  family_members?: Object[];
}
