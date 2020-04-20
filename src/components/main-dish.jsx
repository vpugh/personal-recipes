import React, { useContext } from 'react';
import CardContainer from './shared/card-container';
import { AuthContext } from '../reducer/authReducer';
import CategorySorting from './category-sorting';

const MainDishMain = () => {
  const [state] = useContext(AuthContext);

  return (
    <CardContainer>
      <h1 className='cardTitle'>Main Dish</h1>
      <CategorySorting categoryArray={state.recipes} categoryName='mainDish' />
    </CardContainer>
  );
};

export default MainDishMain;
