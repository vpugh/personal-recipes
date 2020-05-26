import React from 'react';
import ListedRecipes from './listed-recipes';
import CardContainer from './shared/card-container';
import { useAuth } from '../context/auth-context';

const ListRecipes = () => {
  const { recipes } = useAuth();

  return (
    <CardContainer>
      <h1 className='cardTitle'>All Recipes</h1>
      {recipes &&
        recipes.map((recipe, index) => (
          <ListedRecipes
            key={`${recipe.title} ${index}`}
            recipe={recipe}
            index={index}
            arrLength={recipes.length}
          />
        ))}
    </CardContainer>
  );
};

export default ListRecipes;
