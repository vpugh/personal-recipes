import React from 'react';
import { useStyles } from '../../styles/shimmer-styles';

const Shimmer = () => {
  const classes = useStyles();
  const rows = 4;

  return (
    <>
      {Array(...Array(rows)).map((r, index) => (
        <div className={`${classes.floatLeft}`} key={`${r} ${index}`}>
          <div className={`${classes.titleLine} ${classes.shimmer}`} />
          <div className={`${classes.line} ${classes.shimmer}`} />
        </div>
      ))}
    </>
  );
};

export default Shimmer;
