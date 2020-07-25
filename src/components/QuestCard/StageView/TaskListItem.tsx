import React from "react";

interface TaskListItemProps {
  id: number;
  name: string;
  is_completed: boolean;
  disabled: boolean;
  setTaskCompletion: Function;
}

export default function TaskListItem(props: TaskListItemProps) {
  const { id, name, is_completed, disabled, setTaskCompletion } = props;

  const onChange = (event: React.ChangeEvent) => {
    setTaskCompletion(id, !is_completed);
  };

  return (
    <li data-testid="task-list-item">
      <label>
        <input
          type="checkbox"
          checked={is_completed}
          disabled={disabled}
          onChange={onChange}
        />
        {name}
      </label>
    </li>
  );
}
