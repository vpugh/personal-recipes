import React, { useEffect, useState } from 'react';
import ListedRecipes from './listed-recipes';
import useStyles from '../styles/list-recipes-styles';

const getRecipes = async () => {
  let res = await fetch('/api/v1/recipes');
  return await res.json();
};

const fetchRecipes = async set => {
  const data = await getRecipes();
  set(data);
};

const ListRecipes = () => {
  const classes = useStyles();
  const [allRecipes, setAllRecipes] = useState();

  useEffect(() => {
    fetchRecipes(setAllRecipes);
  }, []);

  return (
    <div className={classes.container}>
      <h1 style={{ marginTop: 0, marginBottom: '2rem', color: '#575757' }}>
        All Recipes
      </h1>
      {allRecipes &&
        allRecipes.map((ra, index) => (
          <ListedRecipes
            key={`${ra.title} ${index}`}
            ra={ra}
            index={index}
            arrLength={allRecipes.length}
          />
        ))}
    </div>
  );
};

export default ListRecipes;
