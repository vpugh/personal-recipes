import React, { useContext } from 'react';
import TimeDisplay from './time-display';
import ListGenerator from './list-generator';
import useStyles from '../../styles/view-recipe-styles';
import CardContainer from '../shared/card-container';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../../context/recipes-context';

const makeLink = (link) => {
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

const ViewRecipe = (props) => {
  const classes = useStyles();
  const [recipes] = useContext(RecipesContext);
  const recipeId = props.match.params.id;
  const currentRecipe = recipes.filter((x) => (x = x.id === recipeId))[0];

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
      totalTime,
      notes,
    } = currentRecipe;
    return (
      <CardContainer>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <h1 className={classes.recipeTitle}>{title}</h1>
            <Link
              style={{ color: 'inherit ' }}
              to={`/recipe/edit/${recipeId}`}
              query={recipeId}
            >
              Edit
            </Link>
          </div>
          <div>
            <p className={classes.recipeDescription}>{description}</p>
            {course && <TimeDisplay time={course} timeHeader='Course' />}
            {cuisine && <TimeDisplay time={cuisine} timeHeader='Cuisine' />}
            {mainDish && <TimeDisplay time={mainDish} timeHeader='Main Dish' />}
            {prepTime && <TimeDisplay time={prepTime} timeHeader='Prep Time' />}
            {cookTime && <TimeDisplay time={cookTime} timeHeader='Cook Time' />}
            {totalTime && (
              <TimeDisplay time={totalTime} timeHeader='Total Time' />
            )}
            {recipeOrigin && (
              <p className={classes.recipeOrigin}>
                Recipe found at: {makeLink(recipeOrigin)}
              </p>
            )}
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
      </CardContainer>
    );
  }

  return (
    <CardContainer maxWidth={660}>
      <p>Loading... Final</p>
    </CardContainer>
  );
};

export default ViewRecipe;
