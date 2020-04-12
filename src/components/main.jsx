import React from 'react';
import Landing from './homepage/landing';
import Container from '../grid/container';
import AddRecipe from './recipe-manipulation/add-recipe';
import { makeStyles } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom';
import ViewRecipe from './view-recipe/view-recipe';
import ListRecipes from './all-recipes';
import CourseMain from './course';
import CuisineMain from './cuisine';
import MainDishMain from './main-dish';
import EditRecipe from './recipe-manipulation/edit-recipe';

const useStyles = makeStyles({
  padding: {
    margin: '54px auto 0 auto',
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.padding}>
      <Container>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/add-recipe' component={AddRecipe} />
          <Route exact path='/recipe/:id' component={ViewRecipe} />
          <Route exact path='/recipe/edit/:id' component={EditRecipe} />
          <Route exact path='/recipes/all-recipes' component={ListRecipes} />
          <Route exact path='/recipes/course' component={CourseMain} />
          <Route exact path='/recipes/cuisine' component={CuisineMain} />
          <Route exact path='/recipes/main-dish' component={MainDishMain} />
        </Switch>
      </Container>
    </div>
  );
};

export default Main;
