import React, { useContext } from 'react';
import useStyles from '../../styles/landing-styles';
import { Link } from 'react-router-dom';
import AddRecipeWidget from './add-recipe-widget';
import ImageCard from './landing-image-card';
import CardContainer from '../shared/card-container';
import { RecipesContext } from '../../context/recipes-context';
import Shimmer from '../shared/shimmer';

const Landing = () => {
  const classes = useStyles();
  const [recipes] = useContext(RecipesContext);

  const limit = 5;

  const limitRecipes = () => {
    const sortedRecipes = recipes.concat().sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    });
    return sortedRecipes.slice(0, limit - 1);
  };

  if (recipes) {
    return (
      <div className={classes.container}>
        <div className={classes.widgetContainer}>
          <h4 className={classes.subTitle}>Recently Added</h4>
          <CardContainer maxWidth={650} padding='20px'>
            {recipes.length > 0 &&
              limitRecipes().map((ra, index) => (
                <AddRecipeWidget
                  key={`${ra.title} ${index}`}
                  recipe={ra}
                  index={index}
                  limit={limit}
                />
              ))}
            {recipes.length === 0 && <Shimmer />}
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
              to='recipes/all-recipes'
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
  }

  return <p>Loading Recipes</p>;
};

export default Landing;
