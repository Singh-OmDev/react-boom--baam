import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        state[a] &&
        state[a] === state[b] &&
        state[a] === state[c]
      ) {
        return state[a]; // ✅ return X or O
      }
    }
    return null;
  };

  const winner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null || winner) return;

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";

    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>
        {winner
          ? `Winner: ${winner}`
          : `Turn: ${isXTurn ? "X" : "O"}`}
      </h2>

      <div className="board-container">
        <div className="board-row">
          <Square onClick={() => handleClick(0)} value={state[0]} />
          <Square onClick={() => handleClick(1)} value={state[1]} />
          <Square onClick={() => handleClick(2)} value={state[2]} />
        </div>

        <div className="board-row">
          <Square onClick={() => handleClick(3)} value={state[3]} />
          <Square onClick={() => handleClick(4)} value={state[4]} />
          <Square onClick={() => handleClick(5)} value={state[5]} />
        </div>

        <div className="board-row">
          <Square onClick={() => handleClick(6)} value={state[6]} />
          <Square onClick={() => handleClick(7)} value={state[7]} />
          <Square onClick={() => handleClick(8)} value={state[8]} />
        </div>
      </div>

      <button
        onClick={resetGame}
        style={{ marginTop: "20px", padding: "8px 16px" }}
      >
        Reset  game
      </button>
    </div>
  );
};

export default Board;
