import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container3: {
    // List Recipes Style
    fontSize: 18,
    background: '#FEFEFE',
    padding: '30px 20px',
    boxShadow: '4px 8px 44px #FFCCCC',
    maxWidth: 650,
    margin: '0 auto 72px auto',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    }
  },
  container: {
    // Add Recipes Style
    fontSize: 18,
    background: '#FEFEFE',
    padding: '40px 50px',
    boxShadow: '4px 8px 44px #FFCCCC',
    maxWidth: 972,
    margin: '0 auto 72px auto',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    }
  },
  recipeContainer: {
    // View Recipe Style
    background: '#FEFEFE',
    boxShadow: '4px 8px 44px #FFCCCC',
    padding: '40px 50px',
    color: '#575757',
    margin: '0 auto 72px auto',
    maxWidth: 660,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    }
  },
  cardContainer: props => ({
    maxWidth: props.maxWidth || 850,
    background: '#FEFEFE',
    boxShadow: '4px 8px 44px #FFCCCC',
    padding: props.padding || '40px 50px',
    margin: '0 auto 72px auto',
    fontSize: 18,
    color: '#575757',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    }
  })
}));

const CardContainer = props => {
  const classes = useStyles(props);
  const { children } = props;
  return <div className={classes.cardContainer}>{children}</div>;
};

export default CardContainer;
