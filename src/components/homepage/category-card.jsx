import React from 'react';
import useStyles from '../../styles/card-grid-styles';
import HorizontalCardType from './horizontal-card-type';
import Shimmer from '../shared/shimmer';

const CategoryCard = (props) => {
  const classes = useStyles(props);
  const { cardTitle, viewAllLink, arr } = props;
  return (
    <div className={classes.grid}>
      {arr &&
        arr.map((type) => (
          <HorizontalCardType
            type={type}
            link={viewAllLink}
            name={cardTitle}
            key={type}
          />
        ))}

      {!arr &&
        Array(...Array(4)).map((r, index) => (
          <Shimmer type='category' key={`${r} ${index}`} />
        ))}
    </div>
  );
};

export default CategoryCard;
