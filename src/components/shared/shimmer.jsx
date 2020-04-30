import React from 'react';
import { useStyles } from '../../styles/shimmer-styles';

const Shimmer = (props) => {
  const { type } = props;
  const classes = useStyles();

  return (
    <div
      className={`${classes.floatLeft}`}
      style={{
        color: 'rgb(87, 87, 87)',
        fontSize: 18,
        borderRadius: 6,
        boxShadow: 'rgb(255, 204, 204) 4px 8px 44px',
        background: 'rgb(254, 254, 254)',
        padding: 20,
        width: 'auto',
        '&:lastChild': {
          marginRight: 0,
        },
      }}
    >
      {type === 'category' ? (
        <div className={`${classes.titleLine} ${classes.shimmer}`} />
      ) : (
        <>
          <div className={`${classes.titleLine} ${classes.shimmer}`} />
          <div className={`${classes.line} ${classes.shimmer}`} />
          <div className={`${classes.line} ${classes.shimmer}`} />
          <div className={`${classes.line} ${classes.shimmer}`} />
        </>
      )}
    </div>
  );
};

export default Shimmer;
