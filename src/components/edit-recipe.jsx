import React, { useState, useEffect } from 'react';
import RecipeForm from './recipe-form';
import { Link } from 'react-router-dom';

const EditRecipe = (props) => {
  const [currentRecipe, setCurrentRecipe] = useState();
  const recipeId = props.match.params.id;
  useEffect(() => {
    const getRecipe = async () => {
      let res = await fetch(`/api/v1/recipe/${recipeId}`);
      return await res.json();
    };

    const fetchRecipe = async (set) => {
      const data = await getRecipe();
      set(data);
    };
    fetchRecipe(setCurrentRecipe);
  }, [recipeId]);

  const header = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}
    >
      <h1 className='cardTitle'>Edit Recipe</h1>
      <Link style={{ color: 'inherit ' }} to={`/recipe/${recipeId}`}>
        Return to Recipe
      </Link>
    </div>
  );

  if (currentRecipe) {
    return (
      <RecipeForm headerContent={header} recipe={currentRecipe} id={recipeId} />
    );
  }

  return <p>Loading...</p>;
};

export default EditRecipe;
