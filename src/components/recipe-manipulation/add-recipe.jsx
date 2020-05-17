import React, { useState } from 'react';
import RecipeForm from './recipe-form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageHeader: {
    marginBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
  },
}));

const AddRecipe = () => {
  const [showTemporaryRecipe, setShowTemporaryRecipe] = useState(false);
  const [temporaryRecipe, setTemporaryRecipe] = useState('');
  const classes = useStyles();

  const showTempRecipes = () => {
    setShowTemporaryRecipe(!showTemporaryRecipe);
  };

  const onChange = (e, set) => {
    const { value } = e.target;
    set(value);
  };

  const header = (
    <>
      <div className={classes.pageHeader}>
        <h1 className='cardTitle'>Add Recipe</h1>
        <div
          role='button'
          onClick={showTempRecipes}
          style={{ textDecoration: 'underline' }}
        >
          Temporary Recipe Storage
        </div>
      </div>
      {showTemporaryRecipe && (
        <div
          style={{
            position: 'sticky',
            right: '10%',
            top: '10%',
            width: '100%',
            padding: 20,
            background: '#fff',
            border: '1px solid #ddd',
            zIndex: 2,
            marginBottom: 40,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 style={{ marginTop: 0 }}>
              Copy/Paste from site and then use that to enter the information
              here.
            </h3>
            <div role='button' onClick={showTempRecipes}>
              Close
            </div>
          </div>
          <textarea
            name='Text1'
            value={temporaryRecipe}
            style={{
              width: '100%',
              fontSize: 18,
            }}
            rows='20'
            onChange={(e) => onChange(e, setTemporaryRecipe)}
          />
        </div>
      )}
    </>
  );

  return <RecipeForm headerContent={header} />;
};

export default AddRecipe;
