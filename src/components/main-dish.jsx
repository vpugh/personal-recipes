import React, { useContext } from 'react';
import CardContainer from './shared/card-container';
import { RecipesContext } from '../context/recipes-context';
import CategorySorting from './category-sorting';

const MainDishMain = () => {
  const [recipes] = useContext(RecipesContext);

  return (
    <CardContainer>
      <h1 className='cardTitle'>Main Dish</h1>
      <CategorySorting categoryArray={recipes} categoryName='mainDish' />
    </CardContainer>
  );
};

export default MainDishMain;
