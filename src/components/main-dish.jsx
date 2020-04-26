import React from 'react';
import CardContainer from './shared/card-container';
import CategorySorting from './category-sorting';
import { useAuth } from '../context/new-auth-context';

const MainDishMain = () => {
  const { recipes } = useAuth();

  return (
    <CardContainer>
      <h1 className='cardTitle'>Main Dish</h1>
      <CategorySorting categoryArray={recipes} categoryName='mainDish' />
    </CardContainer>
  );
};

export default MainDishMain;
