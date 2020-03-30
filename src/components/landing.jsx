import React, { useEffect, useState } from 'react';
import useStyles from '../styles/landing-styles';
import { Link } from 'react-router-dom';
import AddRecipeWidget from './add-recipe-widget';
import ImageCard from './landing-image-card';

const getRecipes = async () => {
  let res = await fetch('/api/v1/recipes');
  return await res.json();
};

const fetchRecipes = async set => {
  const data = await getRecipes();
  set(data);
};

const Landing = () => {
  const classes = useStyles();

  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetchRecipes(setRecipes);
  }, []);

  const limit = 5;

  const limitRecipes = () => {
    return recipes.slice(0, limit - 1);
  };

  if (recipes) {
    return (
      <div className={classes.container}>
        <div>
          <h4 className={classes.subTitle}>Recently Added</h4>
          <div className={classes.addedShadowBox}>
            <div style={{ padding: '30px 20px' }}>
              {recipes &&
                limitRecipes().map((ra, index) => (
                  <AddRecipeWidget
                    key={`${ra.title} ${index}`}
                    ra={ra}
                    index={index}
                    limit={limit}
                  />
                ))}
            </div>
            <Link to='/add-recipe' className={classes.addNewButton}>
              Add New Recipe
            </Link>
          </div>
        </div>
        <div>
          <div style={{ marginTop: 61 }}>
            {ImageCard(
              'Course',
              './images/course-image@2x.png',
              classes,
              'right',
              '/recipes/course'
            )}
            {ImageCard(
              'Cuisine',
              './images/cuisine-image@2x.png',
              classes,
              'left',
              '/recipes/cuisine'
            )}
            {ImageCard(
              'Main Dish',
              './images/protein-image@2x.png',
              classes,
              'right',
              '/recipes/protein'
            )}
            {ImageCard(
              'All Recipes',
              './images/all-recipes-image@2x.png',
              classes,
              'left',
              '/all-recipes'
            )}
          </div>
        </div>
      </div>
    );
  }

  return <p>Loading Recipes</p>;
};

export default Landing;
