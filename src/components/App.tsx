import React from "react";

import Quest from "components/Quest";
import { useApplicationData } from "../hooks/useApplicationData";

export default function App() {
  const { state, addQuest, editQuest, acceptQuest } = useApplicationData();

  return <main className="App"></main>;
}
