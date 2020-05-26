import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listContainer: {
    background: '#F4F4F4',
    padding: '4px 12px',
    borderRadius: 6,
    display: 'inline-flex',
    flexDirection: 'row',
    marginRight: 10,
    fontSize: '.9rem',
  },
  listContent: {
    '&:not(:last-child)': {
      marginBottom: 40,
    },
    '& h2': {
      marginBottom: '0.7rem',
      fontWeight: 'normal',
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  tagContainer: {
    display: 'flex',
  },
});

const GenericList = ({ list }) => {
  const classes = useStyles();
  if (!list) {
    return null;
  }

  const tag = (content) => {
    return (
      <span className={classes.listContainer}>
        {Array.isArray(content) ? content.join(', ') : content}
      </span>
    );
  };

  return list.map((recipe) => {
    const { title, course, cuisine, main_dish, id } = recipe;
    return (
      <div key={id} className={classes.listContent}>
        <h2>
          <Link to={`/recipe/${id}`}>{title}</Link>
        </h2>
        <div className={classes.tagContainer}>
          {course && tag(course)}
          {cuisine && tag(cuisine)}
          {main_dish && tag(main_dish)}
        </div>
      </div>
    );
  });
};

export default GenericList;
