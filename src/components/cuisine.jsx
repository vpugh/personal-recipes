import React from 'react';
import CardContainer from './shared/card-container';
import CategorySorting from './category-sorting';
import { useAuth } from '../context/new-auth-context';

const CuisineMain = () => {
  const { recipes } = useAuth();

  return (
    <CardContainer>
      <h1 className='cardTitle'>Cuisine</h1>
      <CategorySorting categoryArray={recipes} categoryName='cuisine' />
    </CardContainer>
  );
};

export default CuisineMain;
