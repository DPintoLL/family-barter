import React from "react";

import { IDifficulty } from "interfaces";

interface TitleProps {
  id: number;
  title: string;
  description: string;
  difficulty: IDifficulty;
  acceptQuest: Function;
}

export default function TitleView(props: TitleProps) {
  const { id, title, description, difficulty, acceptQuest } = props;

  const onClick = (event: React.MouseEvent) => {
    acceptQuest(id);
  };

  return (
    <section
      className={`quest__card quest__card--show quest__difficulty-${difficulty}`}
      data-testid="quest-card-title"
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={onClick}>Accept</button>
    </section>
  );
}
