import React from 'react';
import CardContainer from './shared/card-container';
import CategorySorting from './category-sorting';
import { useAuth } from '../context/new-auth-context';
import { upperCaseFirst } from '../util/helper-functions';

const GenericRecipePage = (props) => {
  const { recipes } = useAuth();
  const { category } = props.match.params;

  return (
    <CardContainer>
      <h1 className='cardTitle'>{upperCaseFirst(category)}</h1>
      <CategorySorting
        categoryArray={recipes}
        categoryName={category === 'main-dish' ? 'mainDish' : category}
      />
    </CardContainer>
  );
};

export default GenericRecipePage;
