import React, { useState } from 'react';
import RecipeForm from './recipe-form';

const AddRecipe = () => {
  const [showTemporaryRecipe, setShowTemporaryRecipe] = useState(false);
  const [temporaryRecipe, setTemporaryRecipe] = useState('');

  const showTempRecipes = () => {
    setShowTemporaryRecipe(!showTemporaryRecipe);
  };

  const onChange = (e, set) => {
    const { value } = e.target;
    set(value);
  };

  const header = (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
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
            position: 'absolute',
            right: '10%',
            top: '10%',
            width: '80%',
            padding: 20,
            background: '#fff',
            border: '1px solid #ddd',
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
            cols='40'
            rows='40'
            onChange={(e) => onChange(e, setTemporaryRecipe)}
          />
        </div>
      )}
    </>
  );

  return <RecipeForm headerContent={header} />;
};

export default AddRecipe;
