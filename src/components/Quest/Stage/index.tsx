import React from "react";
import TaskList from "./TaskList";
import { IDifficulty, IStage } from "interfaces";

interface ShowProps extends IStage {
  difficulty: IDifficulty;
  setTaskCompletion: Function;
}

export default function ShowStage(props: ShowProps) {
  const { title, description, difficulty, tasks, setTaskCompletion } = props;

  const incompleteTasks = tasks.filter((task) => task.is_completed !== true);

  return (
    <section
      className={`quest__card quest__card--show quest__difficulty-${difficulty}`}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      {incompleteTasks.length > 0 && (
        <TaskList tasks={tasks} setTaskCompletion={setTaskCompletion} />
      )}
      {incompleteTasks.length === 0 && <button>Turn In</button>}
    </section>
  );
}
