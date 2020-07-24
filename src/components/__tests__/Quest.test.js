import React from "react";

import { render, cleanup } from "@testing-library/react";

import QuestCard from "components/QuestCard";

afterEach(cleanup);

describe("Quest", () => {
  it("renders without crashing", () => {
    render(<QuestCard />);
  });
});
