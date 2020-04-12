import React, { useEffect, useState, createContext } from 'react';

const RecipesContext = createContext(() => [{}, () => []]);

const getRecipes = async () => {
  let res = await fetch('/api/v1/recipes');
  return await res.json();
};

const fetchRecipes = async (set) => {
  const data = await getRecipes();
  set(data);
};

const RecipesProvider = (props) => {
  const { children } = props;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes(setRecipes);
  }, []);

  return (
    <RecipesContext.Provider value={[recipes, setRecipes]}>
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesContext, RecipesProvider };
