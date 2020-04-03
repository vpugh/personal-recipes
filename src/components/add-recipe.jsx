import React, { useState } from 'react';
import useStyles from '../styles/add-recipes-styles';
import TextInput from './inputs/text-inputs';
import TextInputNested from './inputs/text-input-nested';
import GhostButton from './inputs/ghost-button';
import DropDown from './inputs/drop-down';
// import { uuid } from 'uuidv4';
import CardContainer from './card-container';
import TextareaNested from './inputs/textarea-nested';
import TextareaInput from './inputs/textarea';

const courses = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Appetizer',
  'Side',
  'Snack',
  'Dessert',
  'Brunch'
];

const cuisines = [
  'American',
  'Indian',
  'Italian',
  'Chinese',
  'Japanese',
  'Thai',
  'Greek',
  'German',
  'Austrian',
  'Hungarian',
  'Korean',
  'Malaysian',
  'French',
  'Mexican',
  'Cajun',
  'Soul',
  'Lebanese',
  'Moroccan',
  'Mediterranean',
  'Spanish',
  'Vietnamese',
  'Turkish',
  'Caribbean'
];

const mains = [
  'Chicken',
  'Beef',
  'Ground Beef',
  'Pork',
  'Turkey',
  'Lamb',
  'Shrimp/Prawns',
  'Pasta/Noodles',
  'Salmon',
  'Fish',
  'Seafood',
  'Vegetables',
  'Other'
];

const addEmptyArray = (arr, setArr) => {
  setArr(arr.concat(''));
};

const AddRecipe = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [serves, setServes] = useState('');
  const [serveType, setServeType] = useState('');
  const [course, setCourse] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [recipeOrigin, setRecipeOrigin] = useState('');
  const [description, setDescription] = useState('');
  const [mainDish, setMainDish] = useState('');
  const [equipmentNeededArray, setEquipmentNeededArray] = useState([]);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [instructionsArray, setInstructionsArray] = useState([]);
  const [recipeSaved, setRecipeSaved] = useState(false);
  const [showTemporaryRecipe, setShowTemporaryRecipe] = useState(false);
  const [temporaryRecipe, setTemporaryRecipe] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const data = {
      // id: uuid(),
      title,
      cookTime: Number(cookTime),
      prepTime: Number(prepTime),
      totalTime: totalTime ? Number(totalTime) : null,
      serves,
      serveType: serveType || null,
      course,
      cuisine,
      recipeOrigin,
      description,
      mainDish,
      equipmentNeeded: equipmentNeededArray,
      ingredients: ingredientsArray,
      instructions: instructionsArray,
      notes: null
    };
    fetch('/api/v1/recipe', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(result => result.ok && setRecipeSaved(true));
  };

  const showTempRecipes = () => {
    setShowTemporaryRecipe(!showTemporaryRecipe);
  };

  const onChange = (e, set) => {
    const { value } = e.target;
    set(value);
  };

  return (
    <CardContainer maxWidth={972}>
      <form onSubmit={onSubmit}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline'
          }}
        >
          <h1 className={classes.recipePageTitle}>Add Recipe</h1>
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
              border: '1px solid #ddd'
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
                fontSize: 18
              }}
              cols='40'
              rows='40'
              onChange={e => onChange(e, setTemporaryRecipe)}
            />
          </div>
        )}
        <TextInput
          labelTitle='Recipe Title'
          placeholder='Recipe title or what you’ll remember it as'
          required={true}
          value={title}
          setFunction={setTitle}
        />
        <div className={classes.threeCol}>
          <DropDown
            labelTitle='Course'
            placeholder='Select a course'
            value={course}
            optionArr={courses}
            setFunction={setCourse}
          />
          <DropDown
            labelTitle='Cuisine'
            placeholder='Select a cuisine style'
            value={cuisine}
            optionArr={cuisines}
            setFunction={setCuisine}
          />
          <DropDown
            labelTitle='Main Dish'
            placeholder='What is the main ingredient'
            value={mainDish}
            optionArr={mains}
            setFunction={setMainDish}
          />
        </div>
        <div className={classes.threeCol}>
          <TextInput
            labelTitle='Cook Time'
            placeholder='Select a Time'
            value={cookTime}
            setFunction={setCookTime}
          />
          <TextInput
            labelTitle='Prep Time'
            placeholder='Select a Time'
            value={prepTime}
            setFunction={setPrepTime}
          />
          <TextInput
            labelTitle='Total Time'
            placeholder='Select a Time'
            value={totalTime}
            setFunction={setTotalTime}
          />
        </div>
        <div className={classes.twoCol}>
          <TextInput
            labelTitle='Serves'
            placeholder='How many does it make or feed.'
            value={serves}
            setFunction={setServes}
          />
          <TextInput
            labelTitle='Serving Type'
            placeholder='Serving people or slices of cake.'
            value={serveType}
            setFunction={setServeType}
          />
        </div>
        <TextInput
          labelTitle='Recipe Reference (Where it came from)'
          placeholder='Where you got it from, even if it’s from yourself'
          value={recipeOrigin}
          setFunction={setRecipeOrigin}
        />
        <TextareaInput
          labelTitle='Description'
          placeholder='Some information about the recipe, maybe some tips and what not.'
          value={description}
          setFunction={setDescription}
        />
        <p className={classes.textColorPrimary}>Equipment Needed</p>
        {equipmentNeededArray.length > 0 && (
          <div className={classes.flexContainer}>
            {equipmentNeededArray.map((en, index) => (
              <TextInputNested
                inputType='equipmentNeededArray'
                placeholder='Add Equipment Needed'
                value={en}
                index={index}
                required
                key={index}
                array={equipmentNeededArray}
                setFunction={setEquipmentNeededArray}
              />
            ))}
          </div>
        )}
        <GhostButton
          text='Add Equipment'
          func={() =>
            addEmptyArray(equipmentNeededArray, setEquipmentNeededArray)
          }
        />
        <p className={classes.textColorPrimary}>Ingredients*</p>
        {ingredientsArray.length > 0 &&
          ingredientsArray.map((en, index) => (
            <TextareaNested
              inputType='ingredientsArray'
              placeholder='Add Ingredient'
              value={en}
              index={index}
              key={index}
              required
              array={ingredientsArray}
              setFunction={setIngredientsArray}
            />
          ))}
        <GhostButton
          text='Add Ingredient'
          func={() => addEmptyArray(ingredientsArray, setIngredientsArray)}
        />
        <p className={classes.textColorPrimary}>Instructions*</p>
        {instructionsArray.length > 0 &&
          instructionsArray.map((en, index) => (
            <TextareaNested
              inputType='instructionsArray'
              placeholder='Add Instruction Step'
              value={en}
              index={index}
              key={index}
              required
              array={instructionsArray}
              setFunction={setInstructionsArray}
            />
          ))}
        <GhostButton
          text='Add Instruction Step'
          func={() => addEmptyArray(instructionsArray, setInstructionsArray)}
        />
        {recipeSaved && (
          <div style={{ padding: '40px 0 0 0', fontSize: 24 }}>
            Recipe has been saved
          </div>
        )}
        <div className={classes.saveButtonContainer}>
          <button
            type='submit'
            disabled={recipeSaved}
            className={classes.saveButton}
          >
            Save Recipe
          </button>
        </div>
      </form>
    </CardContainer>
  );
};

export default AddRecipe;
