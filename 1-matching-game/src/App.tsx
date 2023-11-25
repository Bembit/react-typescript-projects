import React from 'react';
import MatchingGame from "./MatchingGame"
import './App.css';

function App() {
  return (
    <div className="app">
      <MatchingGame data={{Germany: "Berlin", Hungary: "Budapest", France: "Paris"}}></MatchingGame>
    </div>
  );
}

export default App;
