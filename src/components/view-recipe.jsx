import React, { useEffect, useState } from 'react';
import TimeDisplay from './time-display';
import ListGenerator from './list-generator';
import useStyles from '../styles/view-recipe-styles';

const makeLink = link => {
  if (link.startsWith('http') || link.startsWith('www')) {
    return (
      <a
        href={link}
        style={{ color: 'inherit', fontWeight: 'bold' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        {link}
      </a>
    );
  }
  return link;
};

const ViewRecipe = props => {
  const classes = useStyles();
  const [currentRecipe, setCurrentRecipe] = useState();
  const recipeId = props.match.params.id;
  useEffect(() => {
    const getRecipe = async () => {
      let res = await fetch(`/api/v1/recipe/${recipeId}`);
      return await res.json();
    };

    const fetchRecipe = async set => {
      const data = await getRecipe();
      set(data);
    };
    fetchRecipe(setCurrentRecipe);
  }, [recipeId]);

  if (currentRecipe) {
    const {
      title,
      description,
      course,
      cuisine,
      mainDish,
      recipeOrigin,
      equipmentNeeded,
      ingredients,
      instructions,
      cookTime,
      prepTime,
      notes
    } = currentRecipe;
    return (
      <div className={classes.recipeContainer}>
        <div>
          <h1 className={classes.recipeTitle}>{title}</h1>
          <div>
            <p className={classes.recipeDescription}>{description}</p>
            <TimeDisplay time={course} timeHeader='Course' />
            <TimeDisplay time={cuisine} timeHeader='Cuisine' />
            {mainDish && <TimeDisplay time={mainDish} timeHeader='Main Dish' />}
            {prepTime && <TimeDisplay time={prepTime} timeHeader='Prep Time' />}
            {cookTime && <TimeDisplay time={cookTime} timeHeader='Cook Time' />}
            <p className={classes.recipeOrigin}>
              Recipe found at: {makeLink(recipeOrigin)}
            </p>
            <div className={classes.listContainer}>
              <ListGenerator arr={equipmentNeeded} header='Equipment Needed' />
              <ListGenerator
                arr={ingredients}
                header='Ingredients'
                columns={2}
              />
              <ListGenerator arr={instructions} header='Instructions' />
            </div>
            {notes && (
              <div>
                <h3>Notes:</h3>
                {notes}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default ViewRecipe;
