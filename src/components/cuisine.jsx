import React, { useContext } from 'react';
import CardContainer from './shared/card-container';
import { RecipesContext } from '../context/recipes-context';
import CategorySorting from './category-sorting';

const CuisineMain = () => {
  const [recipes] = useContext(RecipesContext);

  return (
    <CardContainer>
      <h1 className='cardTitle'>Cuisine</h1>
      <CategorySorting categoryArray={recipes} categoryName='cuisine' />
    </CardContainer>
  );
};

export default CuisineMain;
