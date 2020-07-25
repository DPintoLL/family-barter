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
