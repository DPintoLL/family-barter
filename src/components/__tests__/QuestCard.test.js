import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";
import ShallowRenderer from "react-test-renderer/shallow";
import axios from "axios";

import QuestCard from "components/QuestCard";
import TitleView from "components/QuestCard/TitleView";
import StageView from "components/QuestCard/StageView";

afterEach(cleanup);

describe("Quest", () => {
  it("renders without crashing", () => {
    const exampleQuest = { stages: [{}] };
    render(<QuestCard {...exampleQuest} />);
  });

  it("displays a title card when the quest is not yet assigned", () => {
    const exampleQuest = {
      title: "Test Quest",
      assigned_to: null,
      stages: [{}],
    };

    const renderer = new ShallowRenderer();
    renderer.render(<QuestCard {...exampleQuest} />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe("article");
    expect(result.props.children).toEqual([
      <TitleView title="Test Quest" difficulty="common" />,
      null,
    ]);
  });

  it("displays a stage card when the quest is assigned", () => {
    const exampleQuest = {
      title: "Test Quest",
      assigned_to: 1,
      stages: [
        {
          title: "Quest Stage",
          is_completed: false,
          tasks: [],
        },
      ],
    };

    const renderer = new ShallowRenderer();
    renderer.render(<QuestCard {...exampleQuest} />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe("article");
    expect(result.props.children).toEqual([
      false,
      <StageView
        title="Quest Stage"
        is_completed={false}
        difficulty="common"
        tasks={[]}
      />,
    ]);
  });
});
