import React, { useState } from 'react';
import GameBoard from './Components/GameBoard';
import Dice from './Components/Dice';

const App = () => {
  const [positions, setPositions] = useState([1, 1]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const snakes = {
    16: 6,
    47: 26,
    49: 11,
    56: 53,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78,
  };
  const ladders = {
    1: 38,
    4: 14,
    9: 31,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    80: 100,
  };

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    let newPosition = positions[currentPlayer] + roll;

    if (newPosition in snakes) {
      newPosition = snakes[newPosition];
    } else if (newPosition in ladders) {
      newPosition = ladders[newPosition];
    }

    if (newPosition > 100) {
      newPosition = positions[currentPlayer]; // Stay in the same position if the move is invalid
    }

    const newPositions = [...positions];
    newPositions[currentPlayer] = newPosition;
    setPositions(newPositions);

    setCurrentPlayer((currentPlayer + 1) % 2); // Switch to the next player
  };

  return (
    <div className="App">
      <h1>Snake and Ladder</h1>
      <GameBoard positions={positions} />
      <Dice rollDice={rollDice} />
      <h2>Player {currentPlayer + 1}'s turn</h2>
    </div>
  );
};

export default App;
