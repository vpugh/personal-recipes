import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './grid/container';
import Homepage from './areas/homepage/homepage';
import CategoryTypePage from './areas/generic-pages/category-type-page';
import CategoryPage from './areas/generic-pages/category-page';

const Main = () => {
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
          <Route exact path='/recipes/:category' component={CategoryPage} />
        </Switch>
      </Container>
    </div>
  );
};

export default Main;
