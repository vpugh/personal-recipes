import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import Faker from 'faker';
import { Server, Model, Factory } from 'miragejs';
import RecipeDetails from '../src/mirage-data/recipe-details.json';

const randomizer = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const RecipeDetailsSelection = (num, selector) => {
  return RecipeDetails[num][selector];
};

new Server({
  models: {
    recipe: Model
  },
  factories: {
    recipe: Factory.extend({
      id(i) {
        return i;
      },
      course() {
        const courses = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];
        return randomizer(courses);
      },
      title() {
        return RecipeDetailsSelection(this.id, 'title');
      },
      cuisine() {
        return Faker.address.country();
      },
      protein() {
        const proteinList = ['Chicken', 'Beef', 'Pork', 'Shrimp', 'Lamb'];
        if (this.course === 'Breakfast' || this.course === 'Snack') {
          return '';
        }
        return randomizer(proteinList);
      },
      prepTime() {
        return RecipeDetailsSelection(this.id, 'prepTime');
      },
      cookTime() {
        return RecipeDetailsSelection(this.id, 'cookTime');
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
      }
    })
  },
  routes() {
    this.namespace = '/api';

    this.get('/v1/recipes');

    this.get('/v1/recipe/:id', (schema, request) => {
      let recipeId = request.params.id;
      return schema.recipes.findBy({ id: recipeId });
    });
  },
  seeds(server) {
    server.createList('recipe', 10);
  }
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
