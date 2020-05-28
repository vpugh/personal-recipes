import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './grid/container';
import Homepage from './areas/homepage/homepage';
import CategoryTypePage from './areas/generic-pages/category-type-page';
import CategoryPage from './areas/generic-pages/category-page';
import ViewRecipe from './areas/recipes/view-recipe';
import AllRecipes from './areas/generic-pages/all-recipes';
import { useAuth } from './context/auth-context';
import { useEffect } from 'react';
import UserProfile from './areas/profile/user-profile';
import Login from './areas/login/login';
import Signup from './areas/signup/signup';

const Main = (props) => {
  const { user } = useAuth();
  useEffect(() => {
    document.documentElement.style.background = props.bgColor();
    const userCheck = user ? true : false;
    const storedTheme = window.localStorage.getItem('selectedThemeData');
    if (storedTheme) {
      props.setSelectedTheme(storedTheme);
    }
    if (
      !storedTheme &&
      user &&
      userCheck &&
      props.selectedTheme === 'default'
    ) {
      props.setSelectedTheme(user.setting[0].themes[0].selected);
      window.localStorage.setItem(
        'selectedThemeData',
        user.setting[0].themes[0].selected
      );
    }
  }, [props, user]);

  return (
    <div>
      <Container>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route
            exact
            path='/recipes/:category/:type'
            component={CategoryTypePage}
          />
          <Route exact path='/recipes/all-recipes' component={AllRecipes} />
          <Route exact path='/recipes/:category' component={CategoryPage} />
          <Route exact path='/recipe/:id' component={ViewRecipe} />
          <Route exact path='/user/profile' component={UserProfile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Container>
    </div>
  );
};

export default Main;
