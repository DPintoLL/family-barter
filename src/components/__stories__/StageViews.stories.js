import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import QuestCard from "components/QuestCard";

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
