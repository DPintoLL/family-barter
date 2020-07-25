import React from "react";

import QuestCard from "components/QuestCard";
import { useApplicationData } from "../hooks/useApplicationData";

export default function App() {
  const { state, acceptQuest, setTaskCompletion } = useApplicationData();

  return (
    <main className="App">
      {state.quests.map((quest) => (
        <QuestCard
          key={quest.id}
          id={quest.id}
          title={quest.title}
          description={quest.description}
          base_reward={quest.base_reward}
          assigned_to={quest.assigned_to}
          stages={quest.stages}
          acceptQuest={acceptQuest}
          setTaskCompletion={setTaskCompletion}
        />
      ))}
    </main>
  );
}
