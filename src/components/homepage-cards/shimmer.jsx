import React from 'react';
import { useStyles } from '../../styles/shimmer-styles';

const Shimmer = ({ type }) => {
  const classes = useStyles();

  return (
    <div className={classes.shimmerDisplay}>
      {!type ? (
        <div className={`${classes.titleLine} ${classes.shimmer}`} />
      ) : (
        <>
          <div className={`${classes.titleLine} ${classes.shimmer}`} />
          <div className={`${classes.line} ${classes.shimmer}`} />
          <div className={`${classes.line} ${classes.shimmer}`} />
        </>
      )}
    </div>
  );
};

export default Shimmer;
