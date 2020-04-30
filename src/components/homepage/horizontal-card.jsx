import React from 'react';
import Tag from '../shared/tags';
import { Link } from 'react-router-dom';
import useStyles from '../../styles/horizontal-card-styles';

const HorizontalCard = (props) => {
  const classes = useStyles();
  const { recipe } = props;
  const {
    id,
    title,
    course,
    cuisine,
    mainDish,
    totalTime,
    cookTime,
    prepTime,
    serves,
    serveType,
  } = recipe;

  const displayTotalTime = (cook, prep) => {
    const total = cook + prep;
    if (total > 60) {
      return toHour(Math.floor(total / 60));
    }
    return `${Math.floor(total)} mins`;
  };

  const toHour = (time) => {
    return `${time} ${time > 1 ? 'hrs' : 'hr'}`;
  };

  const wording = serveType !== '' ? 'Makes' : 'Serves';
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
      {/* {course && <Tag text={course} />}
      {cuisine && <Tag text={cuisine} />}
      {mainDish && <Tag text={mainDish} />} */}
      {(totalTime || cookTime || prepTime) && (
        <div className={classes.displayFlexCenter}>
          <p style={{ marginBottom: 0 }}>
            {prepTime && (
              <span>
                <strong>Prep/Cook:</strong> {prepTime}/{cookTime} mins
                <br />
              </span>
            )}
            <strong>Total:</strong>{' '}
            {!totalTime && `${displayTotalTime(cookTime, prepTime)}`}
            {totalTime && `${totalTime} ${totalTime < 60 ? 'mins' : ''}`}
          </p>
        </div>
      )}
      {(serves || serveType) && (
        <p className={classes.displayFlexCenter}>
          {serves && `${wording} ${serves} ${serveType}`}
        </p>
      )}
    </Link>
  );
};

export default HorizontalCard;
