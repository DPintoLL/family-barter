import React from "react";

import { ITask } from "interfaces";

interface TaskListItemProps extends ITask {
  isDisabled: boolean;
  setTaskCompletion: Function;
}

export default function TaskListItem(props: TaskListItemProps) {
  const { id, is_completed, isDisabled, setTaskCompletion } = props;

  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setTaskCompletion(id, !is_completed);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={is_completed}
          disabled={isDisabled}
          onClick={onClick}
        />
        {props.name}
      </label>
    </li>
  );
}
