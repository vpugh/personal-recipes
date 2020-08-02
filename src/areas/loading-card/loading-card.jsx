import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingBody: {
    maxWidth: 960,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0 auto',
    width: '70%',
    borderRadius: 6,
    boxShadow: `2px 4px 8px ${theme.palette.primary.pale}`,
    background: theme.palette.background.white,
    padding: 20,
    alignItems: 'center',
  },
}));

const LoadingCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingBody}>
      <CircularProgress />
      <Typography variant='body1' style={{ paddingTop: 10 }}>
        Loading Account
      </Typography>
    </div>
  );
};

export default LoadingCard;
