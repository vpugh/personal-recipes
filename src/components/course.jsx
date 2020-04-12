import React, { useContext } from 'react';
import CardContainer from './shared/card-container';
import { RecipesContext } from '../context/recipes-context';
import CategorySorting from './category-sorting';

const CourseMain = () => {
  const [recipes] = useContext(RecipesContext);

  return (
    <CardContainer>
      <h1 className='cardTitle'>Course</h1>
      <CategorySorting categoryArray={recipes} categoryName='course' />
    </CardContainer>
  );
};

export default CourseMain;
