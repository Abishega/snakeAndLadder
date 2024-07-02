import React from 'react';

const Dice = ({ rollDice }) => {
  return (
    <div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Dice;
