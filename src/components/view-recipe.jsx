import React, { useEffect, useState } from 'react';
import TimeDisplay from './time-display';
import ListGenerator from './list-generator';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  recipeContainer: {
    background: '#FEFEFE',
    boxShadow: '4px 8px 44px #FFCCCC',
    padding: '40px 50px',
    color: '#575757',
    margin: '0 auto 72px auto',
    maxWidth: 660,
    fontSize: 18
  },
  recipeTitle: {
    margin: 0
  },
  recipeOrigin: {
    borderTop: '1px solid #efefef',
    borderBottom: '1px solid #efefef',
    padding: '13px 0',
    marginTop: 20,
    fontSize: '0.8rem'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
});

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
            <p style={{ paddingTop: '1rem', paddingBottom: '.5rem' }}>
              {description}
            </p>
            {TimeDisplay(course, 'Course')}
            {TimeDisplay(cuisine, 'Cuisine')}
            {protein && TimeDisplay(protein, 'Protein')}
            {cookTime && TimeDisplay(cookTime, 'Cook Time')}
            {prepTime && TimeDisplay(prepTime, 'Prep Time')}
            <p className={classes.recipeOrigin}>
              Recipe found at: {makeLink(recipeOrigin)}
            </p>
            <div className={classes.listContainer}>
              {ListGenerator(equipmentNeeded, 'Equipment Needed')}
              {ListGenerator(ingredients, 'Ingredients', 2)}
              {ListGenerator(instructions, 'Instructions')}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default ViewRecipe;
