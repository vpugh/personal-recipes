import React from 'react';
import Landing from './landing';
import Container from '../grid/container';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  padding: {
    margin: '54px auto 0 auto'
  }
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.padding}>
      <Container>
        <Landing />
      </Container>
    </div>
  );
};

export default Main;
