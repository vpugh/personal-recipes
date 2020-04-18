import React, { useEffect, useState, createContext, useContext } from 'react';
import { UserContext } from './user-context';

const RecipesContext = createContext(() => null);

const getRecipes = async (user) => {
  let res = await fetch(`/api/v1/recipes/${user.id}`);
  return await res.json();
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
