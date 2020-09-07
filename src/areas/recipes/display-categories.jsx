import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingRight: 20,
      marginRight: 20,
      borderRight: '1px solid #ddd',
    },
    [theme.breakpoints.down('sm')]: {
      border: '1px solid #ddd',
      padding: 10,
      marginBottom: 10,
    },
  },
  header: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      margin: 0,
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      margin: 0,
    },
  },
  data: {
    [theme.breakpoints.up('md')]: {
      margin: '.5rem 0',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      margin: '0 0 0 5px',
    },
  },
}));

const DisplayCategories = ({ header, data }) => {
  const classes = useStyles();
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <div className={classes.container}>
      <p className={classes.header}>
        <strong>{header}:</strong>{' '}
        {Array.isArray(data) ? data.join(', ') : data}
      </p>
    </div>
  );
};

export default DisplayCategories;
