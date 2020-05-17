import React from 'react';
import useStyles from '../../styles/landing-styles';
import {
  limitSortReverseArray,
  limitSortType,
} from '../../util/helper-functions';
import { useAuth } from '../../context/new-auth-context';
import HorizontalCardContainer from './horizontal-card-container';
import { Link } from 'react-router-dom';
import HorizontalCardEmpty from './horizontal-card-empty';
import { getNameListConversion } from '../../util/helper-functions';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const LoggedInLanding = () => {
  const classes = useStyles();
  const { recipes } = useAuth();
  const limit = 7;

  return (
    <div className={classes.container}>
      <div className={classes.introBox} style={{ background: '#fff' }}>
        <div className='text-container'>
          <p>What are you looking to cook today?</p>
          <Autocomplete
            options={recipes || []}
            getOptionLabel={(option) => option.title}
            classes={{ root: classes.root }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Search for a recipe'
                variant='filled'
                style={{ marginBottom: 30 }}
              />
            )}
          />
        </div>
        <Link to='/add-recipe' className={classes.addNewButton}>
          Add New Recipe
        </Link>
      </div>
      {recipes && recipes.length === 0 && <HorizontalCardEmpty />}
      <HorizontalCardContainer
        cardTitle='Recently Added'
        viewAllLink='/recipes/all-recipes'
        viewAllText='Recipes'
        arr={
          recipes
            ? limitSortReverseArray(recipes, limit, 'createdAt', 'reverse')
            : null
        }
        cardType='recent'
      />

      <HorizontalCardContainer
        cardTitle='Courses'
        viewAllLink={`/recipes/${getNameListConversion('course', 'link')}`}
        viewAllText='Courses'
        arr={recipes ? limitSortType(recipes, limit, 'course') : null}
      />

      <HorizontalCardContainer
        cardTitle='Cuisines'
        viewAllLink={`/recipes/${getNameListConversion('cuisine', 'link')}`}
        viewAllText='Cuisines'
        arr={recipes ? limitSortType(recipes, limit, 'cuisine') : null}
      />

      <HorizontalCardContainer
        cardTitle={getNameListConversion('mainDish', 'labelPlural')}
        viewAllLink={`/recipes/${getNameListConversion('mainDish', 'link')}`}
        viewAllText={getNameListConversion('mainDish', 'labelPlural')}
        arr={recipes ? limitSortType(recipes, limit, 'mainDish') : null}
      />

      <HorizontalCardContainer
        cardTitle='Tags'
        viewAllLink='/recipes/tags'
        viewAllText='Tags'
        arr={recipes ? limitSortType(recipes, limit, 'tags') : null}
      />
    </div>
  );
};

export default LoggedInLanding;
