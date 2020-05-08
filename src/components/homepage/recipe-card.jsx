import React from 'react';
import useStyles from '../../styles/card-grid-styles';
import Shimmer from '../shared/shimmer';
import HorizontalCard from './horizontal-card';

const RecipeCard = (props) => {
  const classes = useStyles(props);
  const { arr } = props;
  return (
    <div className={classes.grid}>
      {arr
        ? arr.map((recipe) => (
            <HorizontalCard recipe={recipe} key={recipe.id} />
          ))
        : Array(...Array(4)).map((r, index) => (
            <Shimmer type='recipe' key={`${r} ${index}`} />
          ))}
    </div>
  );
};

export default RecipeCard;
