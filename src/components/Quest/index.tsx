import React from "react";

import ShowStage from "components/Quest/ShowStage";
import TitleCard from "components/Quest/TitleCard";
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

interface QuestProps extends IQuest {}

export default function Quest(props: QuestProps) {
  const difficulty = DIFFICULTY[props.stages.length - 1];
  const activeStage = props.assigned_to ? getActiveStage(props.stages) : null;

  return (
    <article className="quest" data-testid="quest">
      {!props.assigned_to && !activeStage && (
        <TitleCard
          title={props.title}
          description={props.description}
          difficulty={difficulty}
        />
      )}
      {props.assigned_to && activeStage && (
        <ShowStage
          title={activeStage!.title}
          description={activeStage!.description!}
          difficulty={difficulty}
          tasks={activeStage!.tasks}
        />
      )}
    </article>
  );
}
