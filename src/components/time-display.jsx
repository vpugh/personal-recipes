import React from 'react';
import useStyles from '../styles/time-display-styles';

const checkIfArray = passedVar => {
  const isArray = Array.isArray(passedVar);
  if (isArray) {
    return passedVar.join(', ');
  }
  return passedVar;
};

const TimeDisplay = ({ time, timeHeader }) => {
  const classes = useStyles();
  return (
    <div className={classes.timeDisplay}>
      <p className={classes.timeHeader}>{timeHeader}:</p>
      <p className={classes.timeText}>{checkIfArray(time)}</p>
    </div>
  );
};

export default TimeDisplay;
