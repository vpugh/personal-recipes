import React from 'react';
import PageContainer from '../../components/page-container';
import { makeStyles } from '@material-ui/core';
import { RecipeForm } from './recipe-form';
import { useAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  scratchPaper: {
    position: 'fixed',
    right: 0,
    top: 0,
    left: 0,
    padding: 20,
    background: '#fff',
    border: '1px solid #ddd',
    zIndex: 2,
    marginBottom: 40,
  },
}));

const EditRecipe = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const recipeId = props.match.params.id;
  if (user) {
    const recipes = user && user.recipes;
    const currentRecipe = recipes.filter(
      (x) => (x = x.id.toString() === recipeId)
    )[0];

    return (
      <PageContainer>
        <div className={classes.headerContainer}>
          <h1 className='pageTitle'>Edit Recipe</h1>
          <Link to={`/recipe/${recipeId}`} style={{ color: 'inherit' }}>
            Return to Recipe
          </Link>
        </div>
        <RecipeForm currentRecipe={currentRecipe} history={props.history} />
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <h1>Loading...</h1>
    </PageContainer>
  );
};

export default EditRecipe;
