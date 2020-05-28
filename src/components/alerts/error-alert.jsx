import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  alert: {
    color: '#ff4e4e',
    fontSize: '1.2rem',
    marginBottom: 0,
    background: '#fef2f3',
    padding: '8px 16px',
    borderRadius: 4,
    border: '1px solid #ff4e4e',
    fontWeight: 'bold',
  },
}));

export const ErrorAlert = ({ children }) => {
  const classes = useStyles();
  return <p className={classes.alert}>{children}</p>;
};
