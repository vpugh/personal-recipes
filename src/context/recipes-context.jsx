import React, { useEffect, useState, createContext, useContext } from 'react';
import { UserContext } from './user-context';
import { getUserRecipes } from '../util/api';

const RecipesContext = createContext(() => null);

const getRecipes = async (user) => {
  return await getUserRecipes(user.id);
};

const fetchRecipes = async (set, user) => {
  const data = await getRecipes(user);
  set(data);
};

const RecipesProvider = (props) => {
  const { children } = props;
  const [user] = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (user) {
      fetchRecipes(setRecipes, user);
    }
  }, [user]);

  return (
    <RecipesContext.Provider value={[recipes, setRecipes]}>
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesContext, RecipesProvider };
