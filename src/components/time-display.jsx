import React from 'react';

const TimeDisplay = (time, timeHeader) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: 20,
        marginRight: 20,
        borderRight: '1px solid #ddd'
      }}
    >
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '.75rem',
          margin: 0,
          padding: 0
        }}
      >
        {timeHeader}:
      </p>
      <p style={{ margin: '.5rem 0' }}>{time}</p>
    </div>
  );
};

export default TimeDisplay;
