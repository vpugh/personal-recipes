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
import Login from './login';
import Signup from './signup';
import UserProfile from './user-profile';
import PrivateRoute from './private-route';

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
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <PrivateRoute path='/add-recipe' component={AddRecipe} />
          <PrivateRoute exact path='/user/profile' component={UserProfile} />
          <PrivateRoute exact path='/recipe/:id' component={ViewRecipe} />
          <PrivateRoute exact path='/recipe/edit/:id' component={EditRecipe} />
          <PrivateRoute
            exact
            path='/recipes/all-recipes'
            component={ListRecipes}
          />
          <PrivateRoute exact path='/recipes/course' component={CourseMain} />
          <PrivateRoute exact path='/recipes/cuisine' component={CuisineMain} />
          <PrivateRoute
            exact
            path='/recipes/main-dish'
            component={MainDishMain}
          />
        </Switch>
      </Container>
    </div>
  );
};

export default Main;
