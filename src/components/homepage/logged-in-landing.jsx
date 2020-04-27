import React from 'react';
import useStyles from '../../styles/landing-styles';
import {
  limitSortReverseArray,
  limitSortType,
} from '../../util/helper-functions';
import { useAuth } from '../../context/new-auth-context';
import HorizontalCardContainer from './horizontal-card-container';

const LoggedInLanding = () => {
  const classes = useStyles();
  const { recipes } = useAuth();
  const limit = 5;

  return (
    <div className={classes.container}>
      <div
        style={{
          color: 'rgb(87, 87, 87)',
          borderRadius: 6,
          fontSize: 18,
          boxShadow: 'rgb(255, 204, 204) 4px 8px 44px',
          background: 'rgb(254, 254, 254)',
          padding: 20,
          margin: '40px 0',
        }}
      >
        Add New Recipe
        <button>Add Recipe</button>
      </div>
      <HorizontalCardContainer
        containerName='Recently Added'
        containerLink='/recipes/all-recipes'
        containerView='Recipes'
        arr={limitSortReverseArray(recipes, limit, 'createdAt', 'reverse')}
        cardType='recent'
      />

      <HorizontalCardContainer
        containerName='Courses'
        containerLink='/recipes/course'
        containerView='Courses'
        arr={limitSortType(recipes, limit, 'course')}
      />

      <HorizontalCardContainer
        containerName='Cuisines'
        containerLink='/recipes/cuisine'
        containerView='Cuisines'
        arr={limitSortType(recipes, limit, 'cuisine')}
      />

      <HorizontalCardContainer
        containerName='Main Dishes'
        containerLink='/recipes/main-dish'
        containerView='Main Dishes'
        arr={limitSortType(recipes, limit, 'mainDish')}
      />
    </div>
  );
};

export default LoggedInLanding;
