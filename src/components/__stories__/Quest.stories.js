import React from "react";
import { storiesOf } from "@storybook/react";

import Quest from "components/Quest";

storiesOf("Quest", module)
  .add("Common Quest", () => (
    <Quest
      title={"A Common Quest"}
      description={"A quest with only a single stage to complete."}
      stages={[{}]}
    />
  ))
  .add("Uncommon Quest", () => (
    <Quest
      title={"An Uncommon Quest"}
      description={"A quest with two stages to complete."}
      stages={[{}, {}]}
    />
  ))
  .add("Rare Quest", () => (
    <Quest
      title={"A Rare Quest"}
      description={"A quest with three stages to complete."}
      stages={[{}, {}, {}]}
    />
  ))
  .add("Legendary Quest", () => (
    <Quest
      title={"A Legendary Quest"}
      description={"A quest with four stages to complete."}
      stages={[{}, {}, {}, {}]}
    />
  ))
  .add("Epic Quest", () => (
    <Quest
      title={"An Epic Quest"}
      description={"A quest with five stages to complete."}
      stages={[{}, {}, {}, {}, {}]}
    />
  ));

storiesOf("Stages", module)
  .add("First Stage", () => (
    <Quest
      title={"A Common Quest"}
      description={"A quest with only a single stage to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of a quest.",
          is_completed: false,
        },
      ]}
    />
  ))
  .add("Second Stage", () => (
    <Quest
      title={"An Uncommon Quest"}
      description={"A quest with two stages to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of a quest.",
          is_completed: true,
        },
        {
          title: "Second Stage",
          description: "The second stage of a quest.",
          is_completed: false,
        },
      ]}
    />
  ))
  .add("Third Stage", () => (
    <Quest
      title={"A Rare Quest"}
      description={"A quest with three stages to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of a quest.",
          is_completed: true,
        },
        {
          title: "Second Stage",
          description: "The second stage of a quest.",
          is_completed: true,
        },
        {
          title: "Third Stage",
          description: "The third stage of a quest.",
          is_completed: false,
        },
      ]}
    />
  ))
  .add("Fourth Stage", () => (
    <Quest
      title={"A Legendary Quest"}
      description={"A quest with four stages to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of a quest.",
          is_completed: true,
        },
        {
          title: "Second Stage",
          description: "The second stage of a quest.",
          is_completed: true,
        },
        {
          title: "Third Stage",
          description: "The third stage of a quest.",
          is_completed: true,
        },
        {
          title: "Fourth Stage",
          description: "The fourth stage of a quest.",
          is_completed: false,
        },
      ]}
    />
  ))
  .add("Fifth Stage", () => (
    <Quest
      title={"An Epic Quest"}
      description={"A quest with five stages to complete."}
      assigned_to={1}
      stages={[
        {
          title: "First Stage",
          description: "The first stage of a quest.",
          is_completed: true,
        },
        {
          title: "Second Stage",
          description: "The second stage of a quest.",
          is_completed: true,
        },
        {
          title: "Third Stage",
          description: "The third stage of a quest.",
          is_completed: true,
        },
        {
          title: "Fourth Stage",
          description: "The fourth stage of a quest.",
          is_completed: true,
        },
        {
          title: "Fifth Stage",
          description: "The fifth stage of a quest.",
          is_completed: false,
        },
      ]}
    />
  ));
