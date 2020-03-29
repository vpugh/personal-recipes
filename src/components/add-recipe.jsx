import React, { useState } from 'react';
import useStyles from '../styles/add-recipes-styles';
import TextInput from './inputs/text-inputs';
import GhostButton from './inputs/ghost-button';
import DropDown from './inputs/drop-down';

const courses = [
  'Breakfast',
  'Lunch',
  'Dinner',
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
  'Salmon',
  'Fish',
  'Vegetables'
];

const addEmptyArray = (arr, setArr) => {
  setArr(arr.concat(''));
};

const AddRecipe = () => {
  const classes = useStyles();
  const [recipeTitle, setRecipeTitle] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [servings, setServings] = useState('');
  const [course, setCourse] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [recipeReference, setRecipeReference] = useState('');
  const [description, setDescription] = useState('');
  const [mainDish, setMainDish] = useState('');
  const [equipmentNeededArray, setEquipmentNeededArray] = useState([]);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [instructionsArray, setInstructionsArray] = useState([]);

  return (
    <div className={classes.container}>
      <h1 style={{ marginTop: 0, marginBottom: '2rem', color: '#575757' }}>
        Add Recipe
      </h1>
      <TextInput
        labelTitle='Recipe Title'
        placeholder='Title from the recipe or what you’ll remember it as'
        required={true}
        value={recipeTitle}
        setFunction={setRecipeTitle}
      />
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
          labelTitle='Servings'
          placeholder='How many does it feed'
          value={servings}
          setFunction={setServings}
        />
      </div>
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
      <TextInput
        labelTitle='Recipe Reference (Where it came from)'
        placeholder='Where you got it from, even if it’s from yourself'
        value={recipeReference}
        setFunction={setRecipeReference}
      />
      <TextInput
        labelTitle='Description/Information'
        placeholder='Some information about the recipe, maybe some tips and what not.'
        value={description}
        setFunction={setDescription}
      />
      <p style={{ color: '#F65B5B' }}>Equipment Needed*</p>
      <GhostButton
        text='Add Equipment'
        func={() =>
          addEmptyArray(equipmentNeededArray, setEquipmentNeededArray)
        }
      />
      {equipmentNeededArray.length > 0 && (
        <div style={{ marginTop: 30 }}>
          {equipmentNeededArray.map((en, index) => (
            <TextInput
              labelTitle=''
              placeholder='Add Equipment Needed'
              value={en}
              index={index}
              setFunction={setEquipmentNeededArray}
            />
          ))}
        </div>
      )}
      <p style={{ color: '#F65B5B' }}>Ingredients*</p>
      <GhostButton
        text='Add Ingredient'
        func={() => addEmptyArray(ingredientsArray, setIngredientsArray)}
      />
      {ingredientsArray.length > 0 && (
        <div style={{ marginTop: 30 }}>
          {ingredientsArray.map((en, index) => (
            <TextInput
              labelTitle=''
              placeholder='Add Ingredient'
              value={en}
              index={index}
              setFunction={setIngredientsArray}
            />
          ))}
        </div>
      )}
      <p style={{ color: '#F65B5B' }}>Instructions*</p>
      <GhostButton
        text='Add Instruction Step'
        func={() => addEmptyArray(instructionsArray, setInstructionsArray)}
      />
      {instructionsArray.length > 0 && (
        <div style={{ marginTop: 30 }}>
          {instructionsArray.map((en, index) => (
            <TextInput
              labelTitle=''
              placeholder='Add Instruction Step'
              value={en}
              index={index}
              setFunction={setInstructionsArray}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddRecipe;
