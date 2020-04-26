import React from 'react';
import CardContainer from './shared/card-container';
import CategorySorting from './category-sorting';
import { useAuth } from '../context/new-auth-context';

const CourseMain = () => {
  const { recipes } = useAuth();

  return (
    <CardContainer>
      <h1 className='cardTitle'>Course</h1>
      <CategorySorting categoryArray={recipes} categoryName='course' />
    </CardContainer>
  );
};

export default CourseMain;
