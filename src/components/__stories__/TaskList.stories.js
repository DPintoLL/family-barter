import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import QuestCard from "components/QuestCard";

storiesOf("Task List", module)
  .add("No Tasks Completed", () => (
    <QuestCard
      title={"Quest Title"}
      description={"Quest description."}
      assigned_to={1}
      stages={[
        {
          title: "One-Task Quest",
          description: "A quest stage with only a single task to complete.",
          is_completed: false,
          tasks: [
            {
              id: 1,
              name: "Only Task",
            },
          ],
        },
      ]}
      setTaskCompletion={action("setTaskCompletion")}
    />
  ))
  .add("One Task Completed", () => (
    <QuestCard
      title={"Quest Title"}
      description={"Quest description."}
      assigned_to={1}
      stages={[
        {
          title: "Two-Task Quest",
          description:
            "A quest stage with two tasks to complete; one completed.",
          is_completed: false,
          tasks: [
            {
              id: 1,
              name: "First Task",
              is_completed: true,
            },
            {
              id: 2,
              name: "Second Task",
              is_completed: false,
            },
          ],
        },
      ]}
      setTaskCompletion={action("setTaskCompletion")}
    />
  ))
  .add("Two Tasks Completed", () => (
    <QuestCard
      title={"Quest Title"}
      description={"Quest description."}
      assigned_to={1}
      stages={[
        {
          title: "Three-Task Quest",
          description:
            "A quest stage with three tasks to complete; two completed.",
          is_completed: false,
          tasks: [
            {
              id: 1,
              name: "First Task",
              is_completed: true,
            },
            {
              id: 2,
              name: "Second Task",
              is_completed: true,
            },
            {
              id: 3,
              name: "Third Task",
              is_completed: false,
            },
          ],
        },
      ]}
      setTaskCompletion={action("setTaskCompletion")}
    />
  ))
  .add("Three Tasks Completed", () => (
    <QuestCard
      title={"Quest Title"}
      description={"Quest description."}
      assigned_to={1}
      stages={[
        {
          title: "Four-Task Quest",
          description:
            "A quest stage with four tasks to complete; three completed.",
          is_completed: false,
          tasks: [
            {
              id: 1,
              name: "First Task",
              is_completed: true,
            },
            {
              id: 2,
              name: "Second Task",
              is_completed: true,
            },
            {
              id: 3,
              name: "Third Task",
              is_completed: true,
            },
            {
              id: 4,
              name: "Fourth Task",
              is_completed: false,
            },
          ],
        },
      ]}
      setTaskCompletion={action("setTaskCompletion")}
    />
  ))
  .add("Four Tasks Completed", () => (
    <QuestCard
      title={"Quest Title"}
      description={"Quest description."}
      assigned_to={1}
      stages={[
        {
          title: "Five-Task Quest",
          description:
            "A quest stage with five tasks to complete; four completed.",
          is_completed: false,
          tasks: [
            {
              id: 1,
              name: "First Task",
              is_completed: true,
            },
            {
              id: 2,
              name: "Second Task",
              is_completed: true,
            },
            {
              id: 3,
              name: "Third Task",
              is_completed: true,
            },
            {
              id: 4,
              name: "Fourth Task",
              is_completed: true,
            },
            {
              id: 5,
              name: "Fifth Task",
              is_completed: false,
            },
          ],
        },
      ]}
      setTaskCompletion={action("setTaskCompletion")}
    />
  ))
  .add("All Tasks Completed", () => (
    <QuestCard
      title={"Quest Title"}
      description={"Quest description."}
      assigned_to={1}
      stages={[
        {
          title: "Five-Task Quest",
          description:
            "A quest stage with five tasks to complete; all five completed.",
          is_completed: false,
          tasks: [
            {
              id: 1,
              name: "First Task",
              is_completed: true,
            },
            {
              id: 2,
              name: "Second Task",
              is_completed: true,
            },
            {
              id: 3,
              name: "Third Task",
              is_completed: true,
            },
            {
              id: 4,
              name: "Fourth Task",
              is_completed: true,
            },
            {
              id: 5,
              name: "Fifth Task",
              is_completed: true,
            },
          ],
        },
      ]}
      setTaskCompletion={action("setTaskCompletion")}
    />
  ));

storiesOf("Task List Items", module);
