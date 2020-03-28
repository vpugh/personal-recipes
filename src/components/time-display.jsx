import React from 'react';

const checkIfArray = passedVar => {
  const isArray = Array.isArray(passedVar);
  if (isArray) {
    return passedVar.join(', ');
  }
  return passedVar;
};

const TimeDisplay = (time, timeHeader, classes) => {
  return (
    <div className={classes.timeDisplay}>
      <p className={classes.timeHeader}>{timeHeader}:</p>
      <p className={classes.timeText}>{checkIfArray(time)}</p>
    </div>
  );
};

export default TimeDisplay;
