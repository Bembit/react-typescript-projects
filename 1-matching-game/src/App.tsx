import React from 'react';
import MatchingGame from "./MatchingGame"
import MatchingGameVariant from './MatchingGameVariant';
import './App.css';

function App() {
  return (
    <div className="app">
      <MatchingGame data={{Germany: "Berlin", Hungary: "Budapest", France: "Paris"}}></MatchingGame>
      <MatchingGameVariant data={{Germany: "Berlin", Hungary: "Budapest", France: "Paris"}}></MatchingGameVariant>
    </div>
  );
}

export default App;
