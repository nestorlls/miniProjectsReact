import { useState } from 'react';
import Title from './baseComponents/Title';
import State from './baseComponents/State';
import GameBoard from './baseComponents/GameBoard';
import ResetButton from './baseComponents/Button';

const Tictactoe = () => {
  const initialValues = Array(9).fill(null);
  const [board, setBoard] = useState(initialValues);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);

  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winnerCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const condition of winnerCondition) {
      const [a, b, c] = condition;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setWinningCells([a, b, c]);
        return;
      }

      if (board.every((idx) => idx !== null)) {
        setWinner('draw');
      }
    }
  };

  const handleReset = () => {
    setBoard(initialValues);
    setCurrentPlayer('X');
    setWinner(null);
    setWinningCells([]);
  };

  return (
    <div className=" flex w-full h-screen justify-center items-center flex-col">
      <Title />
      <div className="flex flex-col gap-2 justify-center items-center">
        <State
          winner={winner}
          isDraw="It's a draw!!"
          currentPlayer={currentPlayer}
        />
        <GameBoard
          board={board}
          winningCells={winningCells}
          onClick={handleClick}
        />
        <ResetButton
          winner={winner}
          onClick={handleReset}
          text="Play again!!"
        />
      </div>
    </div>
  );
};

export default Tictactoe;
