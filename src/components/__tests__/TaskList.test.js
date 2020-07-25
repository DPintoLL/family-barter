import React from "react";

import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
  getAllByTestId,
} from "@testing-library/react";
import ShallowRenderer from "react-test-renderer/shallow";
import axios from "axios";

import TaskList from "components/QuestCard/StageView/TaskList";
import TaskListItem from "components/QuestCard/StageView/TaskListItem";

afterEach(cleanup);

describe("TaskList", () => {
  it("displays a list of the provided tasks", async () => {
    const exampleTasks = Object.entries({
      1: "First",
      2: "Second",
      3: "Third",
      4: "Fourth",
      5: "Fifth",
    }).map((key, value) => ({
      id: key,
      index: key,
      name: `${value} Task`,
      is_completed: false,
    }));

    const { container } = render(<TaskList tasks={exampleTasks} />);
    expect(getByTestId(container, "task-list")).toBeInTheDocument();
    expect(getAllByTestId(container, "task-list-item").length).toEqual(5);
  });
});
