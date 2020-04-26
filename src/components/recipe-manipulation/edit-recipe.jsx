import React from 'react';
import RecipeForm from './recipe-form';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/new-auth-context';

const EditRecipe = (props) => {
  const { recipes } = useAuth();
  const recipeId = props.match.params.id;
  const currentRecipe = recipes.filter((x) => (x = x.id === recipeId))[0];

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
