import React from 'react';
import './GameBoard.css'; // Add styles for your board

const GameBoard = ({ positions }) => {
  const createBoard = () => {
    const board = [];
    for (let i = 100; i > 0; i--) {
      board.push(
        <div key={i} className="board-cell">
          {i}
          {positions[0] === i && <div className="player player-1">P1</div>}
          {positions[1] === i && <div className="player player-2">P2</div>}
        </div>
      );
    }
    return board;
  };

  return <div className="board">{createBoard()}</div>;
};

export default GameBoard;
