import React, { useState } from 'react';
import Header from './components/Header'
import Gameboard from './components/Gameboard'
import footballClubs from './components/FootballClubs'

function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clubs, setClubs] = useState(footballClubs)

  const updateScore = (e) => {
    const club = clubs.find(c => c.name === e.target.id)
    if (club.clicked === false) {
      setScore(score + 1)
      club.clicked = true
    } else {
      alert("Game Over")
      if (score > bestScore)
        setBestScore(score)
      setScore(0)
    }
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Gameboard
        clubs={clubs}
        updateScore={updateScore}
      />
    </>
  );
}

export default App;
