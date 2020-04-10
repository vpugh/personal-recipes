import React from 'react';
import Landing from './landing';
import Container from '../grid/container';
import AddRecipe from '../components/add-recipe';
import { makeStyles } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom';
import ViewRecipe from './view-recipe';
import ListRecipes from './all-recipes';
import CourseMain from './course';
import CuisineMain from './cuisine';
import MainDishMain from './main-dish';
import EditRecipe from './edit-recipe';
import RegisterNewUser from './register-new-user';
import SignIn from './signin';
import AuthorizedCheck from './authorized-check';

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
          <Route exact path='/register' component={RegisterNewUser} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/secret' component={AuthorizedCheck} />
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
