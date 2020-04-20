import React, { useContext } from 'react';
import useStyles from '../../styles/landing-styles';
import { Link } from 'react-router-dom';
import AddRecipeWidget from './add-recipe-widget';
import ImageCard from './landing-image-card';
import Shimmer from '../shared/shimmer';
import CardContainer from '../shared/card-container';
import { AuthContext } from '../../reducer/authReducer';
import { limitSortReverseArray } from '../../util/helper-functions';

const LoggedInLanding = () => {
  const classes = useStyles();
  const [state] = useContext(AuthContext);
  const limit = 5;

  const { recipes, loadingRecipes } = state;

  return (
    <div className={classes.container}>
      <div className={classes.widgetContainer}>
        <h4 className={classes.subTitle}>Recently Added</h4>
        <CardContainer maxWidth={650} padding='20px'>
          {recipes &&
            recipes.length > 0 &&
            limitSortReverseArray(
              recipes,
              limit,
              'createdAt',
              'reverse'
            ).map((ra, index) => (
              <AddRecipeWidget
                key={`${ra.title} ${index}`}
                recipe={ra}
                index={index}
                limit={limit}
              />
            ))}
          {loadingRecipes && <Shimmer />}
          {!loadingRecipes && recipes === null && (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h2>No Recent Recipes</h2>
                <p style={{ marginTop: 0, height: 76 * 3, opacity: '.7' }}>
                  No worries, how about adding a recipe?
                </p>
                <div style={{ width: 400 }} />
              </div>
            </>
          )}
          <Link to='/add-recipe' className={classes.addNewButton}>
            Add New Recipe
          </Link>
        </CardContainer>
      </div>
      <div>
        <div className={classes.imageCardContainer}>
          <ImageCard
            text='All Recipes'
            img='/images/all-recipes-image@2x.png'
            direction='left'
            to='/recipes/all-recipes'
          />
          <ImageCard
            text='Main Dish'
            img='/images/protein-image@2x.png'
            direction='right'
            to='/recipes/main-dish'
          />
          <ImageCard
            text='Cuisine'
            img='/images/cuisine-image@2x.png'
            direction='left'
            to='/recipes/cuisine'
          />
          <ImageCard
            text='Course'
            img='/images/course-image@2x.png'
            direction='right'
            to='/recipes/course'
          />
        </div>
      </div>
    </div>
  );
};

export default LoggedInLanding;
