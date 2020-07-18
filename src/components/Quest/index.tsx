import React from "react";

import "./styles.scss";

type DifficultyTypes = "common" | "uncommon" | "rare" | "legendary" | "epic";

interface QuestProps {
  difficulty: DifficultyTypes;
}

export default function Quest(props: QuestProps) {
  const { difficulty } = props;
  return (
    <div className={["quest", difficulty].join(" ")}>
      <article>A Quest!</article>
    </div>
  );
}
