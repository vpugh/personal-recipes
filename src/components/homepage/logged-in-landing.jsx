import React from 'react';
import useStyles from '../../styles/landing-styles';
import {
  limitSortReverseArray,
  limitSortType,
} from '../../util/helper-functions';
import { useAuth } from '../../context/new-auth-context';
import HorizontalCardContainer from './horizontal-card-container';
import { Link } from 'react-router-dom';
import HorizontalCardEmpty from './horizontal-card-empty';

const LoggedInLanding = () => {
  const classes = useStyles();
  const { recipes } = useAuth();
  const limit = 7;

  return (
    <div className={classes.container}>
      <Link to='/add-recipe' className={classes.addNewButton}>
        Add Recipe
      </Link>
      {recipes && recipes.length === 0 && <HorizontalCardEmpty />}
      <HorizontalCardContainer
        containerName='Recently Added'
        containerLink='/recipes/all-recipes'
        containerView='Recipes'
        arr={
          recipes
            ? limitSortReverseArray(recipes, limit, 'createdAt', 'reverse')
            : null
        }
        cardType='recent'
      />

      <HorizontalCardContainer
        containerName='Courses'
        containerLink='/recipes/course'
        containerView='Courses'
        arr={recipes ? limitSortType(recipes, limit, 'course') : null}
      />

      <HorizontalCardContainer
        containerName='Cuisines'
        containerLink='/recipes/cuisine'
        containerView='Cuisines'
        arr={recipes ? limitSortType(recipes, limit, 'cuisine') : null}
      />

      <HorizontalCardContainer
        containerName='Main Dishes'
        containerLink='/recipes/main-dish'
        containerView='Main Dishes'
        arr={recipes ? limitSortType(recipes, limit, 'mainDish') : null}
      />

      <HorizontalCardContainer
        containerName='Tags'
        containerLink='/recipes/tags'
        containerView='Tags'
        arr={recipes ? limitSortType(recipes, limit, 'tags') : null}
      />
    </div>
  );
};

export default LoggedInLanding;
