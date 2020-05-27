import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tagContainer: {
    background: '#F4F4F4',
    padding: '4px 12px',
    borderRadius: 6,
    display: 'inline-flex',
    flexDirection: 'row',
    marginRight: 10,
    fontSize: '.9rem',
  },
});

const Tags = ({ content }) => {
  const classes = useStyles();

  if (content) {
    return (
      <span className={classes.tagContainer}>
        {Array.isArray(content) ? content.join(', ') : content}
      </span>
    );
  }
};

export default Tags;
