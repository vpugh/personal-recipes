import React from 'react';
import CardContainer from './shared/card-container';
import { useAuth } from '../context/new-auth-context';
import { getNameListConversion, capitalize } from '../util/helper-functions';
import ListedRecipes from './listed-recipes';

const GenericCategoryPage = (props) => {
  const { recipes } = useAuth();
  const { type, category } = props.match.params;
  const categoryList = (arr, option, name) =>
    arr.filter((x) => {
      if (name === 'main-dish') {
        return x.mainDish.includes(capitalize(option)) === true;
      } else {
        return x[name].includes(capitalize(option)) === true;
      }
    });

  return (
    <CardContainer>
      <div
        style={{
          fontSize: 13,
          borderTop: '1px solid',
          borderBottom: '1px solid',
          padding: '6px 0',
          borderColor: '#ddd',
          marginBottom: 22,
        }}
      >
        Home > {getNameListConversion('main-dish', 'label')} >{' '}
        <strong>{capitalize(type)}</strong>
      </div>
      <h1 className='cardTitle'>
        {capitalize(type)} <br />
      </h1>
      {categoryList(recipes, type, category).map((recipe, index) => (
        <ListedRecipes
          key={`${recipe.title} ${index}`}
          recipe={recipe}
          index={index}
          arrLength={categoryList(recipes, type, category).length}
        />
      ))}
    </CardContainer>
  );
};

export default GenericCategoryPage;
