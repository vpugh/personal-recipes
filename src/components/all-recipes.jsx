import React, { useEffect, useState } from 'react';
import ListedRecipes from './listed-recipes';
import CardContainer from './shared/card-container';

const getRecipes = async () => {
  let res = await fetch('/api/v1/recipes');
  return await res.json();
};

const fetchRecipes = async (set) => {
  const data = await getRecipes();
  set(data);
};

const ListRecipes = () => {
  const [allRecipes, setAllRecipes] = useState();

  useEffect(() => {
    fetchRecipes(setAllRecipes);
  }, []);

  return (
    <CardContainer>
      <h1 className='cardTitle'>All Recipes</h1>
      {allRecipes &&
        allRecipes.map((ra, index) => (
          <ListedRecipes
            key={`${ra.title} ${index}`}
            ra={ra}
            index={index}
            arrLength={allRecipes.length}
          />
        ))}
    </CardContainer>
  );
};

export default ListRecipes;
