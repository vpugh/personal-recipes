import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tags from '../../components/tags';
import { displayTotalTime } from '../../util/helper-functions';

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
  icons: {
    width: 15,
    height: 15,
    marginRight: 6,
    marginLeft: 6,
  },
  tagContainer: {
    display: 'flex',
  },
  displayFlexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  subFontSize: {
    fontSize: 10,
  },
});

const GenericList = ({ list }) => {
  const classes = useStyles();
  if (!list) {
    return null;
  }

  return list.map((recipe) => {
    const {
      title,
      course,
      cuisine,
      main_dish,
      id,
      total_time,
      prep_time,
      cook_time,
      slug,
    } = recipe;
    return (
      <div key={id} className={classes.listContent}>
        <h2>
          <Link to={`/recipe/${id}/${slug}`}>{title}</Link>
        </h2>
        <div className={classes.tagContainer}>
          <Tags content={course} />
          <Tags content={cuisine} />
          <Tags content={main_dish} />
          <span
            className={`${classes.displayFlexCenter} ${classes.subFontSize}`}
          >
            <img
              src='/icons/Clock@2x.png'
              alt='Settings Icon'
              className={classes.icons}
            />
            {!total_time && `${displayTotalTime(cook_time, prep_time)}`}
            {total_time && `${total_time} ${total_time < 60 ? 'mins' : ''}`}
          </span>
        </div>
      </div>
    );
  });
};

export default GenericList;
