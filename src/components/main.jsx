import React from 'react';
import Landing from './landing';
import Container from '../grid/container';
import AddRecipe from '../components/add-recipe';
import { makeStyles } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom';
import ViewRecipe from './view-recipe';
import ListRecipes from './list-recipes';

const useStyles = makeStyles({
  padding: {
    margin: '54px auto 0 auto'
  }
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.padding}>
      <Container>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/add-recipe' component={AddRecipe} />
          <Route path='/recipe/:id' component={ViewRecipe} />
          <Route path='/all-recipes' component={ListRecipes} />
        </Switch>
      </Container>
    </div>
  );
};

export default Main;
