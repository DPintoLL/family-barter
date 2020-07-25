import React, { useState, useEffect } from "react";

interface TaskListItemProps {
  id: number;
  name: string;
  is_completed: boolean;
  disabled: boolean;
  setTaskCompletion: Function;
}

export default function TaskListItem(props: TaskListItemProps) {
  const { id, name, is_completed, disabled, setTaskCompletion } = props;
  const [checked, setChecked] = useState(false);

  const onChange = (event: React.ChangeEvent) => {
    event.preventDefault();
    setTaskCompletion(id, !checked);
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    setChecked(is_completed);
  }, [is_completed]);

  return (
    <li data-testid="task-list-item">
      <label>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        {name}
      </label>
    </li>
  );
}
