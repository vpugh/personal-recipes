import React, { useContext } from 'react';
import CardContainer from './shared/card-container';
import { AuthContext } from '../reducer/authReducer';
import CategorySorting from './category-sorting';

const CourseMain = () => {
  const [state] = useContext(AuthContext);

  return (
    <CardContainer>
      <h1 className='cardTitle'>Course</h1>
      <CategorySorting categoryArray={state.recipes} categoryName='course' />
    </CardContainer>
  );
};

export default CourseMain;
