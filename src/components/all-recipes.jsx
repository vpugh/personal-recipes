import React, { useContext } from 'react';
import ListedRecipes from './listed-recipes';
import CardContainer from './shared/card-container';
import { AuthContext } from '../reducer/authReducer';

const ListRecipes = () => {
  const [state] = useContext(AuthContext);

  const { user, recipes } = state;

  return (
    <CardContainer>
      <h1 className='cardTitle'>All Recipes</h1>
      {user &&
        recipes &&
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
