import React from 'react';
import { useStyles } from '../../styles/shimmer-styles';
import { useStyles as cardStyles } from '../../styles/horizontal-card-styles';
import { useAuth } from '../../context/new-auth-context';

const Shimmer = (props) => {
  const { type } = props;
  const { selectedTheme } = useAuth();
  const classes = useStyles();
  const classe = cardStyles(selectedTheme);

  return (
    <div
      className={`${classes.floatLeft} ${classe.horizontalCard}`}
      style={{
        width: 'auto',
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
