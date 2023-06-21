import React from 'react';

const State = ({ winner, isDraw, currentPlayer }) => {
  return (
    <div className="py-6">
      {winner ? (
        winner === 'draw' ? (
          <h2 className="text-4xl text-white p-6">{isDraw}</h2>
        ) : (
          <h2 className="text-4xl text-white p-6">
            Player
            <span className="text-red-500 mx-2">{winner}</span>
            wins
          </h2>
        )
      ) : (
        <h2 className="text-4xl text-white p-6">
          current player <span className="text-red-500">{currentPlayer}</span>
        </h2>
      )}
    </div>
  );
};

export default State;
