import React from 'react';
import Header from './components/header';
import './App.css';
import Main from './components/main';
import Faker from 'faker';
import { Server, Model, Factory } from 'miragejs';

const randomizer = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
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
        const courses = ['breakfast', 'lunch', 'dinner', 'snack', 'dessert'];
        return randomizer(courses);
      },
      title() {
        let titles;
        if (this.course === 'dessert') {
          titles = [
            'Cranberry Crumble',
            'Honey Trifle',
            'Walnut and Passion Fruit Candy',
            'Chocolate Zucchini Bread'
          ];
        }
        if (this.course === 'breakfast') {
          titles = ['Stir-Fried Cranberry Bake', 'Chocolate Zucchini Bread'];
        }
        if (this.course === 'lunch') {
          titles = [
            'Stewed Mushroom & Apricot Bear',
            'Braised Mustard & Rosemary Chicken',
            'Cooked Vegetables & Scallops',
            'Pressure-Cooked Pepper & Mango Prawns'
          ];
        }
        if (this.course === 'dinner') {
          titles = [
            'Stewed Mushroom & Apricot Bear',
            'Braised Mustard & Rosemary Chicken',
            'Cooked Vegetables & Scallops',
            'Pressure-Cooked Pepper & Mango Prawns'
          ];
        }
        if (this.course === 'snack') {
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
        const proteinList = ['chicken', 'beef', 'pork', 'shrimp', 'lamb'];
        if (this.course === 'breakfast' || this.course === 'snack') {
          return '';
        }
        return randomizer(proteinList);
      },
      prepTime: 10,
      cookTime: 50,
      serves: 4,
      serveType: 'people',
      description:
        "Chocolate zucchini bread that’s incredibly moist, not too sweet, and packed with chocolate chips. The grated zucchini dissolves as it bakes - leaving you with a delicious chocolate loaf that's deliciously tender.",
      recipeOrigin: 'https://www.justsotasty.com/chocolate-zucchini-bread/',
      equipmentNeeded: [
        '8 1/2 by 4 1/2 inch loaf pan',
        'Parchment Paper',
        'Medium bowl',
        'Large bowl '
      ],
      ingredients: [
        '1 1/2 cups grated zucchini*',
        '1 1/4 cup all-purpose flour',
        '1/3 cup cocoa powder',
        '1 teaspoon baking soda',
        '1/4 teaspoon salt',
        '1/2 cup unsalted butter, melted',
        '3/4 cup brown sugar',
        '2 large eggs',
        '2 teaspoons vanilla extract',
        '1 cup chocolate chips'
      ],
      instructions: [
        'Preheat the oven to 350F degrees. Line the bottom of an 8 1/2 by 4 1/2 inch loaf pan with parchment paper, then grease and flour the sides.',
        'Gently blot the grated zucchini with a paper towel to remove excess water.',
        'In a medium bowl whisk together the flour, cocoa, baking soda and salt.',
        'In a large bowl whisk together the melted butter, sugar, eggs and vanilla extract until there are no chunks of sugar.',
        'Gently fold the flour mixture into the oil mixture.',
        'Once almost combined, stir in the grated zucchini.',
        'Fold in the chocolate chips.',
        'Pour the batter into the prepared pan, and bake for 45-55 minutes until the top is firm to the touch and an inserted toothpick comes out clean (except for melted chocolate chips).',
        'Cool fully before cutting into slices.'
      ]
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
