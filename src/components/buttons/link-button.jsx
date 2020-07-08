import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  linkButton: (props) => ({
    padding: '8px 16px',
    background: props.color ? theme.palette.primary.tertiary : '#ddd',
    marginTop: 8,
    color: '#fff',
    textDecoration: 'none',
    display: 'inline-block',
    transition: '300ms ease-in-out',
    fontWeight: 'bold',
    '&:hover': {
      background: props.color ? theme.palette.primary.secondary : '#ccc',
    },
  }),
}));

export const LinkButton = (props) => {
  const classes = useStyles(props);
  const { to, children } = props;
  return (
    <Link to={to} className={classes.linkButton}>
      {children}
    </Link>
  );
};
