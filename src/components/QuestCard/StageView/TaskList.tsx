import React from "react";

import TaskListItem from "./TaskListItem";
import { ITask } from "interfaces";

interface TaskListProps {
  tasks: ITask[];
  setTaskCompletion: Function;
}

export default function TaskList(props: TaskListProps) {
  const { tasks, setTaskCompletion } = props;

  const isDisabled = (idx: number, arr: ITask[]): boolean => {
    if (idx < arr.length - 1 && arr[idx + 1].is_completed) {
      return true;
    } else if (idx >= 1 && !arr[idx - 1].is_completed) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <details>
      <summary>{"Tasks"}</summary>
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <ol className="task-list" data-testid="task-list">
          {tasks.map((task, idx, arr) => (
            <TaskListItem
              key={task.index}
              id={task.id}
              name={task.name}
              checked={task.is_completed}
              disabled={isDisabled(idx, arr)}
              setTaskCompletion={setTaskCompletion}
            />
          ))}
        </ol>
      </form>
    </details>
  );
}
