import React from 'react';
import { useAuth } from '../../context/auth-context';
import CardContainer from '../../components/homepage-cards/card-container';
import {
  limitSortReverseArray,
  limitSortType,
} from '../../util/helper-functions';
import useStyles from '../../styles/landing-styles';
import IntroBox from './intro-box';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/page-container';

const buttonLink = {
  padding: '8px 16px',
  background: '#ddd',
  marginTop: 8,
  color: 'inherit',
  textDecoration: 'none',
  display: 'inline-block',
};

const LoggedIn = () => {
  const { user } = useAuth();
  const classes = useStyles();

  const limit =
    (user && user.setting.length > 0 && user.setting[0].homepageLimit) || 7;

  return (
    <div className={classes.container}>
      {user && user.recipe.length > 0 ? (
        <>
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
        </>
      ) : (
        <PageContainer>
          <h2 style={{ marginTop: 0 }}>
            Welcome! It's looking a bit empty in here.
          </h2>
          <p>Now would be a good time to add some recipes. :)</p>
          <Link to='/add-recipe' style={buttonLink}>
            Add Recipe
          </Link>
        </PageContainer>
      )}
    </div>
  );
};

export default LoggedIn;
