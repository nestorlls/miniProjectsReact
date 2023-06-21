const GameBoard = ({ board, winningCells, onClick }) => {
  return (
    <div className="button-container">
      {board.map((value, idx) => (
        <div
          key={idx}
          onClick={() => onClick(idx)}
          className={`${
            winningCells.includes(idx)
              ? 'animate-[wiggle_1s_ease-in-out_infinite] border-2 border-gray-800'
              : ''
          } cell`}>
          <span
            className={`${
              value === 'X' ? 'text-violet-600' : 'text-orange-600'
            } text-2xl`}>
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
