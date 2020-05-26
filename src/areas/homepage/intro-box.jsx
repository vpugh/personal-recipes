import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from '../../styles/landing-styles';
import { useAuth } from '../../context/auth-context';

const IntroBox = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const recipes = user && user.recipe;

  return (
    <div className={classes.introBox} style={{ background: '#fff' }}>
      <div className='text-container'>
        <p>What are you looking to cook today?</p>
        <Autocomplete
          options={recipes || []}
          getOptionLabel={(option) => option.title}
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
  );
};

export default IntroBox;
