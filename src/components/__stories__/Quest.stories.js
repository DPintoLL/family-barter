import React from "react";
import { storiesOf } from "@storybook/react";

import Quest from "components/Quest";

storiesOf("Quest", module)
  .add("Common Quest", () => (
    <Quest title={"A Common Quest"} difficulty={"common"} />
  ))
  .add("Uncommon Quest", () => (
    <Quest title={"An Uncommon Quest"} difficulty={"uncommon"} />
  ))
  .add("Rare Quest", () => <Quest title={"A Rare Quest"} difficulty={"rare"} />)
  .add("Legendary Quest", () => (
    <Quest title={"A Legendary Quest"} difficulty={"legendary"} />
  ))
  .add("Epic Quest", () => (
    <Quest title={"An Epic Quest"} difficulty={"epic"} />
  ));
