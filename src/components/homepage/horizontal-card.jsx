import React from 'react';
import { displayTotalTime } from '../../util/helper-functions';
import { Link } from 'react-router-dom';
import useStyles from '../../styles/horizontal-card-styles';

const HorizontalCard = (props) => {
  const classes = useStyles();
  const { recipe } = props;
  const {
    id,
    title,
    totalTime,
    cookTime,
    prepTime,
    serves,
    serveType,
  } = recipe;

  return (
    <Link
      to={`/recipe/${id}`}
      query={id}
      key={id}
      className={classes.horizontalCard}
    >
      <h3
        className='card-title'
        style={{ marginTop: 0, marginBottom: '.5rem' }}
      >
        {title}
      </h3>
      {(totalTime || cookTime || prepTime) && (
        <div className={classes.displayFlexCenter} style={{ marginTop: 24 }}>
          <img
            src='/icons/Clock@2x.png'
            alt='Settings Icon'
            className={classes.icons}
          />
          <p style={{ margin: 0 }}>
            {!totalTime && `${displayTotalTime(cookTime, prepTime)}`}
            {totalTime && `${totalTime} ${totalTime < 60 ? 'mins' : ''}`}
          </p>
          <p style={{ margin: '0 0 0 24px' }}>
            {serves} {serveType || 'portions'}
          </p>
        </div>
      )}
    </Link>
  );
};

export default HorizontalCard;
