import React from "react";
import { storiesOf } from "@storybook/react";

import Quest from "components/Quest";

storiesOf("Quest", module)
  .add("Common Quest", () => <Quest difficulty={"common"} />)
  .add("Uncommon Quest", () => <Quest difficulty={"uncommon"} />)
  .add("Rare Quest", () => <Quest difficulty={"rare"} />)
  .add("Legendary Quest", () => <Quest difficulty={"legendary"} />)
  .add("Epic Quest", () => <Quest difficulty={"epic"} />);
