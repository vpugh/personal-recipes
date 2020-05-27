import React from 'react';
import { useAuth } from '../../context/auth-context';
import CardContainer from '../../components/homepage-cards/card-container';
import {
  limitSortReverseArray,
  limitSortType,
} from '../../util/helper-functions';
import useStyles from '../../styles/landing-styles';
import IntroBox from './intro-box';

const LoggedIn = () => {
  const { user } = useAuth();
  const classes = useStyles();

  const getLimit =
    user &&
    user.setting[0].options.filter(
      (x) => Object.keys(x)[0] === 'homepageLimit'
    );

  const limit = user && Object.values(getLimit[0]);

  return (
    <div className={classes.container}>
      <IntroBox />
      <CardContainer
        title='Recently Added'
        link='all-recipes'
        linkText='Recipes'
        arr={
          user && user.recipe
            ? limitSortReverseArray(
                user && user.recipe,
                limit,
                'created_at',
                'reverse'
              )
            : null
        }
        type='category'
      />
      <CardContainer
        title='Courses'
        link='course'
        linkText='Courses'
        arr={
          user && user.recipe
            ? limitSortType(user && user.recipe, limit, 'course')
            : null
        }
      />
      <CardContainer
        title='Cuisines'
        link='cuisine'
        linkText='Cuisines'
        arr={
          user && user.recipe
            ? limitSortType(user && user.recipe, limit, 'cuisine')
            : null
        }
      />
      <CardContainer
        title='Main Dishes'
        link='main-dish'
        linkText='Main Dish'
        arr={
          user && user.recipe
            ? limitSortType(user && user.recipe, limit, 'main_dish')
            : null
        }
      />
      <CardContainer
        title='Tags'
        link='tags'
        linkText='Tags'
        arr={
          user && user.recipe
            ? limitSortType(user && user.recipe, limit, 'tags')
            : null
        }
      />
    </div>
  );
};

export default LoggedIn;
