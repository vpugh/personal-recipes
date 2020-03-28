import React from 'react';

const TimeDisplay = (time, timeHeader, classes) => {
  return (
    <div className={classes.timeDisplay}>
      <p className={classes.timeHeader}>{timeHeader}:</p>
      <p className={classes.timeText}>{time}</p>
    </div>
  );
};

export default TimeDisplay;
