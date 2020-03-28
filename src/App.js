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
        let titles;
        if (this.course === 'Dessert') {
          titles = [
            'Cranberry Crumble',
            'Honey Trifle',
            'Walnut and Passion Fruit Candy',
            'Chocolate Zucchini Bread'
          ];
        }
        if (this.course === 'Breakfast') {
          titles = ['Stir-Fried Cranberry Bake', 'Chocolate Zucchini Bread'];
        }
        if (this.course === 'Lunch') {
          titles = [
            'Stewed Mushroom & Apricot Bear',
            'Braised Mustard & Rosemary Chicken',
            'Cooked Vegetables & Scallops',
            'Pressure-Cooked Pepper & Mango Prawns'
          ];
        }
        if (this.course === 'Dinner') {
          titles = [
            'Stewed Mushroom & Apricot Bear',
            'Braised Mustard & Rosemary Chicken',
            'Cooked Vegetables & Scallops',
            'Pressure-Cooked Pepper & Mango Prawns'
          ];
        }
        if (this.course === 'Snack') {
          titles = [
            'Pickled Fennel & Garlic Tortilla',
            'Peanut and Cinnamon Jelly'
          ];
        }
        return randomizer(titles);
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
        const prepTimeList = [
          RecipeDetailsSelection(0, 'prepTime'),
          RecipeDetailsSelection(1, 'prepTime'),
          RecipeDetailsSelection(2, 'prepTime'),
          RecipeDetailsSelection(3, 'prepTime'),
          RecipeDetailsSelection(4, 'prepTime'),
          RecipeDetailsSelection(5, 'prepTime'),
          RecipeDetailsSelection(6, 'prepTime'),
          RecipeDetailsSelection(7, 'prepTime'),
          RecipeDetailsSelection(8, 'prepTime'),
          RecipeDetailsSelection(9, 'prepTime')
        ];
        return randomizer(prepTimeList);
      },
      cookTime() {
        const cookTimeList = [
          RecipeDetailsSelection(0, 'cookTime'),
          RecipeDetailsSelection(1, 'cookTime'),
          RecipeDetailsSelection(2, 'cookTime'),
          RecipeDetailsSelection(3, 'cookTime'),
          RecipeDetailsSelection(4, 'cookTime'),
          RecipeDetailsSelection(5, 'cookTime'),
          RecipeDetailsSelection(6, 'cookTime'),
          RecipeDetailsSelection(7, 'cookTime'),
          RecipeDetailsSelection(8, 'cookTime'),
          RecipeDetailsSelection(9, 'cookTime')
        ];
        return randomizer(cookTimeList);
      },
      serves() {
        const servesList = [
          RecipeDetailsSelection(0, 'serves'),
          RecipeDetailsSelection(1, 'serves'),
          RecipeDetailsSelection(2, 'serves'),
          RecipeDetailsSelection(3, 'serves'),
          RecipeDetailsSelection(4, 'serves'),
          RecipeDetailsSelection(5, 'serves'),
          RecipeDetailsSelection(6, 'serves'),
          RecipeDetailsSelection(7, 'serves'),
          RecipeDetailsSelection(8, 'serves'),
          RecipeDetailsSelection(9, 'serves')
        ];
        return randomizer(servesList);
      },
      serveType() {
        const serveTypeList = [
          RecipeDetailsSelection(0, 'serveType'),
          RecipeDetailsSelection(1, 'serveType'),
          RecipeDetailsSelection(2, 'serveType'),
          RecipeDetailsSelection(3, 'serveType'),
          RecipeDetailsSelection(4, 'serveType'),
          RecipeDetailsSelection(5, 'serveType'),
          RecipeDetailsSelection(6, 'serveType'),
          RecipeDetailsSelection(7, 'serveType'),
          RecipeDetailsSelection(8, 'serveType'),
          RecipeDetailsSelection(9, 'serveType')
        ];
        return randomizer(serveTypeList);
      },
      description() {
        const descriptionList = [
          RecipeDetailsSelection(0, 'description'),
          RecipeDetailsSelection(1, 'description'),
          RecipeDetailsSelection(2, 'description'),
          RecipeDetailsSelection(3, 'description'),
          RecipeDetailsSelection(4, 'description'),
          RecipeDetailsSelection(5, 'description'),
          RecipeDetailsSelection(6, 'description'),
          RecipeDetailsSelection(7, 'description'),
          RecipeDetailsSelection(8, 'description'),
          RecipeDetailsSelection(9, 'description')
        ];
        return randomizer(descriptionList);
      },
      recipeOrigin() {
        const originList = [
          RecipeDetailsSelection(0, 'recipeOrigin'),
          RecipeDetailsSelection(1, 'recipeOrigin'),
          RecipeDetailsSelection(2, 'recipeOrigin'),
          RecipeDetailsSelection(3, 'recipeOrigin'),
          RecipeDetailsSelection(4, 'recipeOrigin'),
          RecipeDetailsSelection(5, 'recipeOrigin'),
          RecipeDetailsSelection(6, 'recipeOrigin'),
          RecipeDetailsSelection(7, 'recipeOrigin'),
          RecipeDetailsSelection(8, 'recipeOrigin'),
          RecipeDetailsSelection(9, 'recipeOrigin')
        ];
        return randomizer(originList);
      },
      equipmentNeeded() {
        const equipmentList = [
          RecipeDetailsSelection(0, 'equipmentNeeded'),
          RecipeDetailsSelection(1, 'equipmentNeeded'),
          RecipeDetailsSelection(2, 'equipmentNeeded'),
          RecipeDetailsSelection(3, 'equipmentNeeded'),
          RecipeDetailsSelection(4, 'equipmentNeeded'),
          RecipeDetailsSelection(5, 'equipmentNeeded'),
          RecipeDetailsSelection(6, 'equipmentNeeded'),
          RecipeDetailsSelection(7, 'equipmentNeeded'),
          RecipeDetailsSelection(8, 'equipmentNeeded'),
          RecipeDetailsSelection(9, 'equipmentNeeded')
        ];
        return randomizer(equipmentList);
      },
      ingredients() {
        const ingredientsList = [
          RecipeDetailsSelection(0, 'ingredients'),
          RecipeDetailsSelection(1, 'ingredients'),
          RecipeDetailsSelection(2, 'ingredients'),
          RecipeDetailsSelection(3, 'ingredients'),
          RecipeDetailsSelection(4, 'ingredients'),
          RecipeDetailsSelection(5, 'ingredients'),
          RecipeDetailsSelection(6, 'ingredients'),
          RecipeDetailsSelection(7, 'ingredients'),
          RecipeDetailsSelection(8, 'ingredients'),
          RecipeDetailsSelection(9, 'ingredients')
        ];
        return randomizer(ingredientsList);
      },
      instructions() {
        const instructionsList = [
          RecipeDetailsSelection(0, 'instructions'),
          RecipeDetailsSelection(1, 'instructions'),
          RecipeDetailsSelection(2, 'instructions'),
          RecipeDetailsSelection(3, 'instructions'),
          RecipeDetailsSelection(4, 'instructions'),
          RecipeDetailsSelection(5, 'instructions'),
          RecipeDetailsSelection(6, 'instructions'),
          RecipeDetailsSelection(7, 'instructions'),
          RecipeDetailsSelection(8, 'instructions'),
          RecipeDetailsSelection(9, 'instructions')
        ];
        return randomizer(instructionsList);
      }
    })
  },
  routes() {
    this.namespace = '/api';

    this.get('/v1/recipes');

    // this.get('/v1/rikishi/:id/records', (schema, request) => {
    //   let recordId = request.params.id;
    //   return schema.records.findBy({ rikishiId: recordId });
    // });

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
