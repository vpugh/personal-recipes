import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import { Server, Model, Factory, Serializer } from 'miragejs';
import RecipeDetails from '../src/mirage-data/recipe-details.json';

const RecipeDetailsSelection = (num, selector) => {
  return RecipeDetails[num][selector];
};

const ApplicationSerializer = Serializer.extend();

new Server({
  serializers: {
    application: ApplicationSerializer,
    recipe: ApplicationSerializer.extend({
      embed: true,
      root: false,
    }),
  },
  models: {
    recipe: Model,
  },
  factories: {
    recipe: Factory.extend({
      id(i) {
        return i;
      },
      course() {
        return RecipeDetailsSelection(this.id, 'course');
      },
      title() {
        return RecipeDetailsSelection(this.id, 'title');
      },
      cuisine() {
        return RecipeDetailsSelection(this.id, 'cuisine');
      },
      mainDish() {
        return RecipeDetailsSelection(this.id, 'mainDish');
      },
      prepTime() {
        return RecipeDetailsSelection(this.id, 'prepTime');
      },
      cookTime() {
        return RecipeDetailsSelection(this.id, 'cookTime');
      },
      totalTime() {
        return RecipeDetailsSelection(this.id, 'totalTime');
      },
      serves() {
        return RecipeDetailsSelection(this.id, 'serves');
      },
      serveType() {
        return RecipeDetailsSelection(this.id, 'serveType');
      },
      description() {
        return RecipeDetailsSelection(this.id, 'description');
      },
      recipeOrigin() {
        return RecipeDetailsSelection(this.id, 'recipeOrigin');
      },
      equipmentNeeded() {
        return RecipeDetailsSelection(this.id, 'equipmentNeeded');
      },
      ingredients() {
        return RecipeDetailsSelection(this.id, 'ingredients');
      },
      instructions() {
        return RecipeDetailsSelection(this.id, 'instructions');
      },
      notes() {
        return RecipeDetailsSelection(this.id, 'notes');
      },
      updateAt() {
        return RecipeDetailsSelection(this.id, 'updatedAt');
      },
      createdAt() {
        return RecipeDetailsSelection(this.id, 'createdAt');
      },
    }),
  },
  routes() {
    this.namespace = '/api';

    this.get('/v1/recipes');

    this.get('/v1/recipe/:id', (schema, request) => {
      let recipeId = request.params.id;
      return schema.recipes.findBy({ id: recipeId });
    });

    this.post('/v1/recipe', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.recipes.create(attrs);
    });

    this.patch('/v1/recipe/:id', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      const id = request.params.id;
      return schema.db.recipes.update(id, attrs);
    });
  },
  seeds(server) {
    server.createList('recipe', 10);
  },
});

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
