import React from 'react';

const ResetButton = ({ winner, onClick, text }) => {
  return (
    <div>
      {(winner || winner === 'draw') && (
        <button className="btn-reset" onClick={onClick}>
          <span>{text}</span>
        </button>
      )}
    </div>
  );
};

export default ResetButton;
