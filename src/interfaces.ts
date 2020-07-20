export interface Task {
  id: number;
  stage_id: number;
  name: string;
  description: string | null;
  is_completed: boolean;
  quest_id?: number;
}

export interface Stage {
  id: number;
  quest_id: number;
  index_num: number;
  title: string;
  description: string | null;
  tasks: Array<Task>;
  is_completed: boolean;
}

export interface Quest {
  id: number;
  family_id: number;
  title: string;
  description: string;
  stages: Array<Stage>;
  base_reward: number;
  assigned_to: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number | null;
}

export interface State {
  quests: Array<Quest>;
  family_members: Array<Object>;
}

export interface Action {
  id?: number;
  assigned_to?: number;
  type: string;
  quest?: object;
  quests?: Array<Quest>;
  family_members?: Array<Object>;
}
