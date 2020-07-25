import React from "react";

interface TaskListItemProps {
  id: number;
  name: string;
  checked: boolean;
  disabled: boolean;
  setTaskCompletion: Function;
}

export default function TaskListItem(props: TaskListItemProps) {
  const { id, name, checked, disabled, setTaskCompletion } = props;

  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setTaskCompletion(id, !checked);
  };

  return (
    <li data-testid="task-list-item">
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          disabled={disabled}
          onClick={onClick}
        />
        {name}
      </label>
    </li>
  );
}
