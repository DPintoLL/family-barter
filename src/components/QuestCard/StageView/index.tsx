import React from "react";
import TaskList from "./TaskList";
import { IDifficulty, IStage } from "interfaces";

interface StageViewProps extends IStage {
  difficulty: IDifficulty;
  completeStage: Function;
  setTaskCompletion: Function;
}

export default function StageView(props: StageViewProps) {
  const {
    id,
    title,
    description,
    difficulty,
    tasks,
    completeStage,
    setTaskCompletion,
  } = props;

  const incompleteTasks = tasks.filter((task) => task.is_completed !== true);

  const onClick = (event: React.MouseEvent) => {
    completeStage(id);
  };

  return (
    <section
      className={`quest__card quest__card--show quest__difficulty-${difficulty}`}
      data-testid="quest-card-stage"
    >
      <h4>{title}</h4>
      <p>{description}</p>
      {tasks.length > 0 && (
        <TaskList tasks={tasks} setTaskCompletion={setTaskCompletion} />
      )}
      {incompleteTasks.length === 0 && (
        <button onClick={onClick}>Turn In</button>
      )}
    </section>
  );
}
