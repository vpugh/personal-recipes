import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from '../../styles/landing-styles';
import { useAuth } from '../../context/auth-context';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const autocompleteStyle = makeStyles((theme) => ({
  root: {
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#000',
      fontWeight: 'bold',
    },
    '& .MuiFormControl-fullWidth': {
      background: '#fff',
    },
    '& .MuiFilledInput-root': {
      background: '#fff',
    },
  },
}));

const IntroBox = () => {
  const classes = useStyles();
  const autoClass = autocompleteStyle();
  const [value, setValue] = useState();
  const theme = useTheme();
  const {
    user: { recipes },
  } = useAuth();

  return (
    <div className={classes.introBox}>
      <div className='text-container'>
        <p className='serif'>What are you looking to cook today?</p>
        <Autocomplete
          options={recipes || []}
          getOptionLabel={(option) => option.title}
          classes={{ root: autoClass.root }}
          onChange={(event, newValue) => setValue(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search for a recipe'
              variant='filled'
              style={{ marginBottom: 30 }}
            />
          )}
        />
        {value && (
          <div style={{ textAlign: 'center' }}>
            <Link
              to={`/recipe/${value.id}/${value.slug}`}
              style={{
                background: theme.palette.primary.main,
                padding: '10px 30px',
                textDecoration: 'none',
                color: 'inherit',
                marginBottom: 14,
                display: 'inline-block',
                fontWeight: 'bold',
              }}
              color='primary'
            >
              Go To Recipe
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroBox;
