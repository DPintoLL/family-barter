import React from "react";

import { useApplicationData } from "./hooks/useApplicationData";

export default function App() {
  const { state, addQuest, editQuest, acceptQuest } = useApplicationData();
  return <div className="App"></div>;
}
