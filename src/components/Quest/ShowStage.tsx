import React from "react";

import { IDifficulty, ITask } from "interfaces";

interface ShowProps {
  title: string;
  description: string;
  difficulty: IDifficulty;
  tasks: ITask[];
}

export default function ShowStage(props: ShowProps) {
  const { title, description, difficulty, tasks } = props;

  return (
    <section
      className={`quest__card quest__card--show quest__difficulty-${difficulty}`}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      {tasks.length > 0 && (
        <details>
          <summary>{"Tasks"}</summary>
          <ol>
            {tasks.map((task) => (
              <li>{task.name}</li>
            ))}
          </ol>
        </details>
      )}
    </section>
  );
}
