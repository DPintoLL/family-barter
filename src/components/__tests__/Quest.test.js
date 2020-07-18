import React from "react";

import { render, cleanup } from "@testing-library/react";

import Quest from "components/Quest";

afterEach(cleanup);

describe("Quest", () => {
  it("renders without crashing", () => {
    render(<Quest />);
  });
});
