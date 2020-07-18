import React from "react";
import { storiesOf } from "@storybook/react";

import Quest from "components/Quest";

storiesOf("Quest", module)
  .add("Common Quest", () => <Quest length={1} />)
  .add("Uncommon Quest", () => <Quest length={2} />)
  .add("Rare Quest", () => <Quest length={3} />)
  .add("Legendary Quest", () => <Quest length={4} />)
  .add("Epic Quest", () => <Quest length={5} />);
