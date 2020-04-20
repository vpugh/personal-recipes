import React, { useContext } from 'react';
import CardContainer from './shared/card-container';
import { AuthContext } from '../reducer/authReducer';
import CategorySorting from './category-sorting';

const CuisineMain = () => {
  const [state] = useContext(AuthContext);

  return (
    <CardContainer>
      <h1 className='cardTitle'>Cuisine</h1>
      <CategorySorting categoryArray={state.recipes} categoryName='cuisine' />
    </CardContainer>
  );
};

export default CuisineMain;
