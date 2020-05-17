import React, { useEffect } from 'react';
import Landing from './homepage/landing';
import Container from '../grid/container';
import AddRecipe from './recipe-manipulation/add-recipe';
import useStyles from '../styles/main-styles';
import { Switch, Route } from 'react-router-dom';
import ViewRecipe from './view-recipe/view-recipe';
import ListRecipes from './all-recipes';
import EditRecipe from './recipe-manipulation/edit-recipe';
import Login from './login';
import Signup from './signup';
import UserProfile from './user-profile';
import PrivateRoute from './private-route';
import GenericCategoryPage from './generic-category-page';
import GenericRecipePage from './generic-recipe-page';
import { useAuth } from '../context/new-auth-context';

const Main = (props) => {
  const classes = useStyles();
  const { selectedTheme } = useAuth();

  useEffect(() => {
    document.body.style.background = props.bgColor(selectedTheme);
  }, [props, props.bgColor, selectedTheme]);

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
          <PrivateRoute
            exact
            path='/recipes/:category/:type'
            component={GenericCategoryPage}
          />
          <PrivateRoute
            path='/recipes/:category'
            component={GenericRecipePage}
          />
        </Switch>
      </Container>
    </div>
  );
};

export default Main;
