import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  horizontalCard: {
    color: theme.palette.grey.one,
    fontSize: 18,
    borderRadius: 6,
    boxShadow: `0 2px 4px 0 ${theme.palette.primary.pale}`,
    background: theme.palette.background.white,
    padding: 20,
    transition: '300ms ease-in-out',
    '&:hover': {
      boxShadow: `0 4px 8px 0 ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.up('md')]: {
      '&:last-child': {
        marginRight: 0,
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    fontWeight: 'normal',
    textDecoration: 'none',
  },
}));

const CardBase = ({ children, to, query }) => {
  const classes = useStyles();
  return (
    <Link to={to} query={query} className={classes.horizontalCard}>
      {children}
    </Link>
  );
};

export default CardBase;
