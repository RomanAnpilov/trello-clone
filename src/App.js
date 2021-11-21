import React from "react";
import { Panel, Card } from "./components";

function App() {
  return (
    <div className="app">
      <Panel items={[{text: "React"}, {text: "React"}, {text: "React"}]} />
      <Panel items={null} />
    </div>
  );
}

export default App;
