import React from 'react';
import useStyles from '../../styles/card-container-styles';

const CardContainer = (props) => {
  const classes = useStyles(props);
  const { children } = props;
  return <div className={classes.cardContainer}>{children}</div>;
};

export default CardContainer;
