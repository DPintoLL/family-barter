import React from "react";

type DifficultyTypes = "common" | "uncommon" | "rare" | "legendary" | "epic";

interface ShowProps {
  title: string;
  difficulty: DifficultyTypes;
}

export default function Show(props: ShowProps) {
  const { title, difficulty } = props;

  return (
    <section
      className={`quest__card quest__card--show quest__difficulty-${difficulty}`}
    >
      <h4>{title}</h4>
    </section>
  );
}
