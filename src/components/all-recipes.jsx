import React, { useContext } from 'react';
import ListedRecipes from './listed-recipes';
import CardContainer from './shared/card-container';
import { RecipesContext } from '../context/recipes-context';

const ListRecipes = () => {
  const [allRecipes] = useContext(RecipesContext);

  return (
    <CardContainer>
      <h1 className='cardTitle'>All Recipes</h1>
      {allRecipes &&
        allRecipes.map((ra, index) => (
          <ListedRecipes
            key={`${ra.title} ${index}`}
            ra={ra}
            index={index}
            arrLength={allRecipes.length}
          />
        ))}
    </CardContainer>
  );
};

export default ListRecipes;
