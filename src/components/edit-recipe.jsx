import React, { useState, useEffect } from 'react';
import useStyles from '../styles/add-recipes-styles';
import RecipeForm from './recipe-form';

const EditRecipe = props => {
  const classes = useStyles();

  const [currentRecipe, setCurrentRecipe] = useState();
  const recipeId = props.match.params.id;
  useEffect(() => {
    const getRecipe = async () => {
      let res = await fetch(`/api/v1/recipe/${recipeId}`);
      return await res.json();
    };

    const fetchRecipe = async set => {
      const data = await getRecipe();
      set(data);
    };
    fetchRecipe(setCurrentRecipe);
  }, [recipeId]);

  const header = (
    <>
      <h1 className={classes.recipePageTitle}>Edit Recipe</h1>
    </>
  );

  if (currentRecipe) {
    return (
      <RecipeForm headerContent={header} recipe={currentRecipe} id={recipeId} />
    );
  }

  return <p>Loading...</p>;
};

export default EditRecipe;
