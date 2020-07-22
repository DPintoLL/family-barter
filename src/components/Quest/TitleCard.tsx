import React from "react";

import { IDifficulty } from "interfaces";

interface TitleProps {
  title: string;
  description: string;
  difficulty: IDifficulty;
}

export default function TitleCard(props: TitleProps) {
  const { title, description, difficulty } = props;

  return (
    <section
      className={`quest__card quest__card--show quest__difficulty-${difficulty}`}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </section>
  );
}
