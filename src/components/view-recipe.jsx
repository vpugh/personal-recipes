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
      set(data.recipe);
    };
    fetchRecipe(setCurrentRecipe);
  }, [recipeId]);

  if (currentRecipe) {
    const {
      title,
      description,
      course,
      cuisine,
      protein,
      recipeOrigin,
      equipmentNeeded,
      ingredients,
      instructions,
      cookTime,
      prepTime
    } = currentRecipe;
    return (
      <div className={classes.recipeContainer}>
        <div>
          <h1 className={classes.recipeTitle}>{title}</h1>
          <div>
            <p className={classes.recipeDescription}>{description}</p>
            {TimeDisplay(course, 'Course', classes)}
            {TimeDisplay(cuisine, 'Cuisine', classes)}
            {protein && TimeDisplay(protein, 'Protein', classes)}
            {cookTime && TimeDisplay(cookTime, 'Cook Time', classes)}
            {prepTime && TimeDisplay(prepTime, 'Prep Time', classes)}
            <p className={classes.recipeOrigin}>
              Recipe found at: {makeLink(recipeOrigin)}
            </p>
            <div className={classes.listContainer}>
              {ListGenerator(equipmentNeeded, 'Equipment Needed', classes)}
              {ListGenerator(ingredients, 'Ingredients', classes, 2)}
              {ListGenerator(instructions, 'Instructions', classes)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default ViewRecipe;
