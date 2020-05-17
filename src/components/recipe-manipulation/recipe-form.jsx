import React, { useState, useEffect } from 'react';
import useStyles from '../../styles/recipe-form-styles';
import TextInput from '../inputs/text-inputs';
import TextInputNested from '../inputs/text-input-nested';
import GhostButton from '../inputs/ghost-button';
import DropDown from '../inputs/drop-down';
import CardContainer from '../shared/card-container';
import TextareaNested from '../inputs/textarea-nested';
import TextareaInput from '../inputs/textarea';
import {
  getCourses,
  getCuisines,
  getMainDishes,
  updateRecipe,
  getUserRecipes,
  saveRecipe,
} from '../../util/api';
import { capitalize } from '../../util/helper-functions';
import { useAuth } from '../../context/new-auth-context';

const fetchCourse = async (set) => {
  const courses = await getCourses();
  set(courses);
};

const fetchCuisine = async (set) => {
  const cuisines = await getCuisines();
  set(cuisines);
};

const fetchMains = async (set) => {
  const mains = await getMainDishes();
  set(mains);
};

const addEmptyArray = (arr, setArr) => {
  setArr(arr.concat(''));
};

const RecipeForm = (props) => {
  const { recipe, headerContent, id } = props;
  const { user, updateRecipes } = useAuth();
  const classes = useStyles();
  const [optCourse, setOptCourse] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [optMains, setOptMains] = useState([]);
  const [title, setTitle] = useState((recipe && recipe.title) || '');
  const [cookTime, setCookTime] = useState((recipe && recipe.cookTime) || '');
  const [prepTime, setPrepTime] = useState((recipe && recipe.prepTime) || '');
  const [totalTime, setTotalTime] = useState(
    (recipe && recipe.totalTime) || ''
  );
  const [serves, setServes] = useState((recipe && recipe.serves) || '');
  const [serveType, setServeType] = useState(
    (recipe && recipe.serveType) || ''
  );
  const [course, setCourse] = useState((recipe && recipe.course) || '');
  const [cuisine, setCuisine] = useState((recipe && recipe.cuisine) || '');
  const [recipeOrigin, setRecipeOrigin] = useState(
    (recipe && recipe.recipeOrigin) || ''
  );
  const [description, setDescription] = useState(
    (recipe && recipe.description) || ''
  );
  const [mainDish, setMainDish] = useState((recipe && recipe.mainDish) || '');
  const [equipmentNeededArray, setEquipmentNeededArray] = useState(
    (recipe && recipe.equipmentNeeded) || []
  );
  const [ingredientsArray, setIngredientsArray] = useState(
    (recipe && recipe.ingredients) || []
  );

  const [instructionsArray, setInstructionsArray] = useState(
    (recipe && recipe.instructions) || []
  );

  const [tagsArray, setTagsArray] = useState((recipe && recipe.tags) || []);

  const [notesArray, setNotesArray] = useState((recipe && recipe.notes) || []);

  const [recipeSaved, setRecipeSaved] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTags = tagsArray.map((x) => capitalize(x));
    const data = {
      title,
      cookTime: cookTime ? Number(cookTime) : null,
      prepTime: prepTime ? Number(prepTime) : null,
      totalTime: totalTime ? Number(totalTime) : null,
      serves,
      userId: user.id,
      serveType: serveType || null,
      course,
      cuisine,
      recipeOrigin,
      description,
      mainDish,
      equipmentNeeded: equipmentNeededArray,
      ingredients: ingredientsArray,
      instructions: instructionsArray,
      notes: notesArray,
      tags: newTags,
      updatedAt: new Date().toISOString(),
    };
    if (id) {
      updateRecipe(id, data).then((result) => {
        getUserRecipes(user.id).then((data) => updateRecipes(data));
        result.ok && setRecipeSaved(true);
      });
    } else {
      data.createdAt = new Date().toISOString();
      saveRecipe(data).then((result) => {
        getUserRecipes(user.id).then((data) => updateRecipes(data));
        result.ok && setRecipeSaved(true);
      });
    }
  };

  const hasMultiple = (value) => {
    return Array.isArray(value) ? true : false;
  };

  useEffect(() => {
    fetchCourse(setOptCourse);
    fetchCuisine(setCuisines);
    fetchMains(setOptMains);
  }, []);

  return (
    <CardContainer>
      <form onSubmit={onSubmit} className={classes.recipeForm}>
        {headerContent}
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
            optionArr={optCourse}
            setFunction={setCourse}
            multiple={hasMultiple(course)}
          />
          <DropDown
            labelTitle='Cuisine'
            placeholder='Select a cuisine style'
            value={cuisine}
            optionArr={cuisines}
            setFunction={setCuisine}
            multiple={hasMultiple(cuisine)}
          />
          <DropDown
            labelTitle='Main Dish'
            placeholder='What is the main ingredient'
            value={mainDish}
            optionArr={optMains}
            setFunction={setMainDish}
            multiple={hasMultiple(mainDish)}
          />
        </div>
        <div className={classes.threeCol}>
          <TextInput
            labelTitle='Prep Time'
            placeholder='Select a Time'
            value={prepTime}
            setFunction={setPrepTime}
          />
          <TextInput
            labelTitle='Cook Time'
            placeholder='Select a Time'
            value={cookTime}
            setFunction={setCookTime}
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
            <TextInputNested
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
        {instructionsArray.length > 0 && (
          <div className={classes.flexContainer}>
            {instructionsArray.map((en, index) => (
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
          </div>
        )}
        <GhostButton
          text='Add Instruction Step'
          func={() => addEmptyArray(instructionsArray, setInstructionsArray)}
        />
        <p className={classes.textColorPrimary}>Notes</p>
        {notesArray.length > 0 && (
          <div className={classes.flexContainer}>
            {notesArray.map((note, index) => (
              <TextareaNested
                inputType='notesArray'
                placeholder='Add Note'
                value={note}
                index={index}
                key={index}
                required
                array={notesArray}
                setFunction={setNotesArray}
              />
            ))}
          </div>
        )}
        <GhostButton
          text='Add Note'
          func={() => addEmptyArray(notesArray, setNotesArray)}
        />
        <p className={classes.textColorPrimary}>Tags</p>
        {tagsArray.length > 0 &&
          tagsArray.map((tag, index) => (
            <TextInputNested
              inputType='tagsArray'
              placeholder='Add Tag'
              value={tag}
              index={index}
              key={index}
              required
              array={tagsArray}
              setFunction={setTagsArray}
            />
          ))}
        <GhostButton
          text='Add Tag'
          func={() => addEmptyArray(tagsArray, setTagsArray)}
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

export default RecipeForm;
