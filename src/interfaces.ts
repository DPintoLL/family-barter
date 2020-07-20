export type Task = {
  id: number;
  stage_id: number;
  name: string;
  description: string | null;
  is_completed: boolean;
  quest_id?: number;
};

export type Stage = {
  id: number;
  quest_id: number;
  index_num: number;
  title: string;
  description: string | null;
  tasks: Task[];
  is_completed: boolean;
};

export type Quest = {
  id: number;
  family_id: number;
  title: string;
  description: string;
  stages: Stage[];
  base_reward: number;
  assigned_to: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number | null;
};

export interface State {
  quests: Quest[];
  family_members: Object[];
}

export interface Action {
  id?: number;
  assigned_to?: number;
  type: string;
  quest?: Quest;
  quests?: Quest[];
  stage?: Stage;
  task?: Task;
  family_members?: Object[];
}
