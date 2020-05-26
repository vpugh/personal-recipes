import React from 'react';
import useStyles from '../styles/page-container-styles';

const PageContainer = (props) => {
  const classes = useStyles(props);
  const { children } = props;

  return <div className={classes.pageContainer}>{children}</div>;
};

export default PageContainer;
