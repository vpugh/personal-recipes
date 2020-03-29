import React from 'react';

const GhostButton = ({ text, func }) => {
  return (
    <div
      role='button'
      onClick={func}
      style={{
        border: '1px solid #FFCCCC',
        boxSizing: 'border-box',
        boxShadow: '2px 4px 22px #FFCCCC',
        display: 'inline-block',
        padding: '16px 38px'
      }}
    >
      {text}
    </div>
  );
};

export default GhostButton;
