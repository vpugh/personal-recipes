import React from 'react';
import useStyles from '../styles/page-container-styles';
import PageBuffer from './page-buffer';

const PageContainer = (props) => {
  const classes = useStyles(props);
  const { children } = props;

  return (
    <PageBuffer>
      <div className={classes.pageContainer}>{children}</div>
    </PageBuffer>
  );
};

export default PageContainer;
