import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  tags: {
    display: 'inline-flex',
    flexDirection: 'row',
    padding: '2px 9px',
    background: '#F4F4F4',
    borderRadius: 6,
    marginRight: 5
  }
});

const checkIfArray = passedVar => {
  const isArray = Array.isArray(passedVar);
  if (isArray) {
    return passedVar.join(', ');
  }
  return passedVar;
};

const Tag = ({ text, fontSize = 10 }) => {
  const classes = useStyles();
  return (
    <div className={classes.tags} style={{ fontSize }}>
      {checkIfArray(text)}
    </div>
  );
};

export default Tag;
