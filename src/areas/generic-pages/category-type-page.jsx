import React from 'react';
import {
  replacePunctuation,
  upperCaseFirst,
} from '../../util/helper-functions';
import CardContainer from '../../components/page-container';
import { useAuth } from '../../context/auth-context';
import GenericList from './generic-list';
import { useParams } from 'react-router-dom';

const CategoryTypePage = () => {
  const { type, category } = useParams();
  const { user } = useAuth();

  const recipes = user && user.recipes;

  const categoryList = (arr, option, name) => {
    if (user) {
      return arr.filter((x) => {
        if (name === 'main-dish') {
          return x.main_dish.includes(upperCaseFirst(option)) === true;
        } else if (name === 'tags') {
          return x.tags.includes(replacePunctuation(option)) === true;
        } else {
          return (
            x[name].includes(upperCaseFirst(option)) ||
            x[name].includes(replacePunctuation(option))
          );
        }
      });
    }
  };

  return (
    <CardContainer>
      <h1 className='pageTitle'>{replacePunctuation(type)}</h1>
      <GenericList list={categoryList(recipes, type, category)} />
    </CardContainer>
  );
};

export default CategoryTypePage;
