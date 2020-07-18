import React, { useEffect, useState } from "react";

import "./styles.scss";

const COMMON = "COMMON";
const UNCOMMON = "UNCOMMON";
const RARE = "RARE";
const LEGENDARY = "LEGENDARY";
const EPIC = "EPIC";

interface QuestProps {
  length: number;
}

export default function Quest(props: QuestProps) {
  const [difficulty, setDifficulty] = useState(UNCOMMON);

  useEffect(() => {
    if (props.length === 1) {
      setDifficulty(COMMON);
    }
    if (props.length === 2) {
      setDifficulty(UNCOMMON);
    }
    if (props.length === 3) {
      setDifficulty(RARE);
    }
    if (props.length === 4) {
      setDifficulty(LEGENDARY);
    }
    if (props.length === 5) {
      setDifficulty(EPIC);
    }
  }, [props.length, setDifficulty]);

  return (
    <div className={"quest " + difficulty.toLowerCase()}>
      <article>A Quest!</article>
    </div>
  );
}
