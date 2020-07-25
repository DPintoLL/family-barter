import React from "react";

import { render, cleanup } from "@testing-library/react";
import axios from "axios";

import App from "components/App";

afterEach(cleanup);

describe("App", () => {
  xit("renders without crashing", () => {
    render(<App />);
  });
});
