import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import QuestCard from "components/QuestCard";

storiesOf("Quest Cards", module)
  .add("Common Quest", () => (
    <QuestCard
      title={"A Common Quest"}
      description={"A quest with only a single stage to complete."}
      stages={[{}]}
    />
  ))
  .add("Uncommon Quest", () => (
    <QuestCard
      title={"An Uncommon Quest"}
      description={"A quest with two stages to complete."}
      stages={[{}, {}]}
    />
  ))
  .add("Rare Quest", () => (
    <QuestCard
      title={"A Rare Quest"}
      description={"A quest with three stages to complete."}
      stages={[{}, {}, {}]}
    />
  ))
  .add("Legendary Quest", () => (
    <QuestCard
      title={"A Legendary Quest"}
      description={"A quest with four stages to complete."}
      stages={[{}, {}, {}, {}]}
    />
  ))
  .add("Epic Quest", () => (
    <QuestCard
      title={"An Epic Quest"}
      description={"A quest with five stages to complete."}
      stages={[{}, {}, {}, {}, {}]}
    />
  ));

storiesOf("Stage Views", module)
  .add("First Stage", () => (
    <QuestCard
      title={"A Common Quest"}
      description={"A quest with only a single stage to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of a common quest.",
          is_completed: false,
          tasks: [],
        },
      ]}
    />
  ))
  .add("Second Stage", () => (
    <QuestCard
      title={"An Uncommon Quest"}
      description={"A quest with two stages to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of an uncommon quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Second Stage",
          description: "The second stage of an uncommon quest.",
          is_completed: false,
          tasks: [],
        },
      ]}
    />
  ))
  .add("Third Stage", () => (
    <QuestCard
      title={"A Rare Quest"}
      description={"A quest with three stages to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of a rare quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Second Stage",
          description: "The second stage of a rare quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Third Stage",
          description: "The third stage of a rare quest.",
          is_completed: false,
          tasks: [],
        },
      ]}
    />
  ))
  .add("Fourth Stage", () => (
    <QuestCard
      title={"A Legendary Quest"}
      description={"A quest with four stages to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of a legendary quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Second Stage",
          description: "The second stage of a legendary quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Third Stage",
          description: "The third stage of a legendary quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Fourth Stage",
          description: "The fourth stage of a legendary quest.",
          is_completed: false,
          tasks: [],
        },
      ]}
    />
  ))
  .add("Fifth Stage", () => (
    <QuestCard
      title={"An Epic Quest"}
      description={"A quest with five stages to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of an epic quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Second Stage",
          description: "The second stage of an epic quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Third Stage",
          description: "The third stage of an epic quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Fourth Stage",
          description: "The fourth stage of an epic quest.",
          is_completed: true,
          tasks: [],
        },
        {
          title: "Fifth Stage",
          description: "The fifth stage of an epic quest.",
          is_completed: false,
          tasks: [],
        },
      ]}
    />
  ));

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
