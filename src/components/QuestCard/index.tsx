import React from "react";

import StageView from "components/QuestCard/StageView";
import TitleView from "components/QuestCard/TitleView";
import { getActiveStage } from "selectors";
import { IQuest, IDifficulty } from "interfaces";

import "./styles.scss";

const DIFFICULTY: IDifficulty[] = [
  "common",
  "uncommon",
  "rare",
  "legendary",
  "epic",
];

interface QuestProps extends IQuest {
  setTaskCompletion: Function;
}

export default function QuestCard(props: QuestProps) {
  const difficulty = DIFFICULTY[props.stages.length - 1];
  const activeStage = props.assigned_to ? getActiveStage(props.stages) : null;

  return (
    <article className="quest" data-testid="quest">
      {!props.assigned_to && !activeStage && (
        <TitleView
          title={props.title}
          description={props.description}
          difficulty={difficulty}
        />
      )}
      {props.assigned_to && activeStage && (
        <StageView
          id={activeStage!.id}
          index={activeStage!.index}
          title={activeStage!.title}
          description={activeStage!.description!}
          difficulty={difficulty}
          tasks={activeStage!.tasks}
          is_completed={activeStage!.is_completed}
          setTaskCompletion={props.setTaskCompletion}
        />
      )}
    </article>
  );
}
