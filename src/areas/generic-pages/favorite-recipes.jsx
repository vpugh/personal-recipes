import React from 'react';
import PageContainer from '../../components/page-container';
import { useAuth } from '../../context/auth-context';
import GenericList from './generic-list';

const FavoriteRecipes = () => {
  const { user } = useAuth();

  const favs = (user && user.recipes.filter((x) => x.favorite === true)) || [];

  return (
    <PageContainer>
      <h1 className='pageTitle'>Favorite Recipes</h1>
      <GenericList list={favs} />
    </PageContainer>
  );
};

export default FavoriteRecipes;
