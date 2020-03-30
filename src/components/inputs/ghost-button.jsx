import React from 'react';
import useStyles from '../../styles/ghost-button-styles';

const GhostButton = ({ text, func }) => {
  const classes = useStyles();
  return (
    <div
      role='button'
      onClick={func}
      className={`${classes.hoverLink} ${classes.button}`}
    >
      {text}
    </div>
  );
};

export default GhostButton;
