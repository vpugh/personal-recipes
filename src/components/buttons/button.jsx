import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: (props) => ({
    background: props.color ? theme.palette.primary.secondary : '#ddd',
    boxShadow: props.color
      ? `4px 8px 44px ${theme.palette.primary.pale}`
      : null,
    width: props.fullSize ? '100%' : null,
    fontSize: 16,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: props.color ? '#fff' : '#000',
    paddingLeft: props.fullSize ? null : 16,
    paddingRight: props.fullSize ? null : 16,
    paddingTop: 16,
    paddingBottom: 16,
    border: 'none',
    textDecoration: 'none',
    marginTop: 40,
    transition: '300ms ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      background: props.color ? theme.palette.primary.tertiary : '#ccc',
    },
  }),
}));

const Button = (props) => {
  const classes = useStyles(props);
  const { children } = props;
  return (
    <button type='submit' className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
