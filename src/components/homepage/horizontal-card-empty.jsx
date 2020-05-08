import React from 'react';
import useStyles from '../../styles/horizontal-card-styles';

const HorizontalCardEmpty = () => {
  const classes = useStyles();

  return (
    <div className={classes.horizontalCard}>
      <h3 className='card-title' style={{ marginTop: 0, marginBottom: 0 }}>
        Add some recipes to fill out
      </h3>
    </div>
  );
};

export default HorizontalCardEmpty;
