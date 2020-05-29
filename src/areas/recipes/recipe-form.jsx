import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  getCourses,
  getCuisines,
  getMainDishes,
  getTags,
  updateRecipe,
  getUserRecipes,
  saveRecipe,
} from '../../util/api';
import { Button, InputAdornment, IconButton } from '@material-ui/core';
import { NestedTextInput } from '../../components/inputs/nested-input';
import AddIcon from '@material-ui/icons/Add';
import { capitalize } from '../../util/helper-functions';
import { FormTextInput } from '../../components/inputs/form/form-text-input';
import { FormSelect } from '../../components/inputs/form/form-select';
import { useAuth } from '../../context/auth-context';

const useStyles = makeStyles((theme) => ({
  formThreeCol: {
    marginBottom: 10,
    '& > div': {
      width: '31%',
      display: 'inline-flex',
      '&:not(:last-child)': {
        marginRight: '3.5%',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: 'inherit',
      },
    },
  },
  formTwoCol: {
    marginBottom: 10,
    '& > div': {
      width: '48%',
      display: 'inline-flex',
      '&:not(:last-child)': {
        marginRight: '4%',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: 'inherit',
      },
    },
  },
  formControl: {
    marginBottom: theme.spacing(1),
    minWidth: 120,
    width: '31%',
    '&:not(:last-child)': {
      marginRight: '3.5%',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'inherit',
    },
  },
  singleRow: {
    minWidth: 120,
    width: '100%',
    marginBottom: 10,
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'inherit',
    },
  },
  sectionDivider: {
    padding: 20,
    margin: '20px 0 10px 0',
    border: '1px solid #e8e8e8',
    borderRadius: 4,
    '& > p': {
      marginTop: 0,
      fontWeight: 'bold',
    },
  },
  ccm: {
    marginBottom: 10,
  },
}));

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

const fetchTags = async (set) => {
  const tags = await getTags();
  set(tags);
};

const addEmptyArray = (arr, setArr) => {
  setArr(arr.concat(''));
};

export const RecipeForm = (props) => {
  const classes = useStyles();
  const { user, updateUser, loading } = useAuth();
  // Setup for dropdowns
  const [optCourse, setOptCourse] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [optMains, setOptMains] = useState([]);
  const [optTags, setOptTags] = useState([]);

  // actual state
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [main, setMain] = useState([]);
  const [tags, setTags] = useState([]);
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [serves, setServes] = useState('');
  const [serveType, setServeType] = useState('');
  const [recipeOrigin, setRecipeOrigin] = useState('');
  const [description, setDescription] = useState('');

  // Add to tags
  const [addedTag, setAddedTag] = useState('');

  // Input Arrays
  const [equipmentNeededArr, setEquipmentNeededArr] = useState([]);
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const [instructionsArr, setInstructionsArr] = useState([]);
  const [notesArr, setNotesArr] = useState([]);

  const [recipeSaved, setRecipeSaved] = useState(false);

  useEffect(() => {
    fetchCourse(setOptCourse);
    fetchCuisine(setCuisines);
    fetchMains(setOptMains);
    fetchTags(setOptTags);
  }, []);

  const handleNestedChange = (event, index, array, set) => {
    const { value } = event.target;
    array[index] = value;
    set([...array]);
  };

  const removeNestedInput = (set, index, array) => {
    array.splice(index, 1);
    set([...array]);
  };

  const handleChange = (event, set) => {
    const { value } = event.target;
    set(value);
  };

  const addTag = (tag) => {
    const addToList = optTags.concat(capitalize(tag));
    setOptTags(addToList);
    setAddedTag('');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const recipeData = {
      title,
      cook_time: cookTime ? Number(cookTime) : null,
      prep_time: prepTime ? Number(prepTime) : null,
      total_time: totalTime ? Number(totalTime) : null,
      serves,
      serve_type: serveType || null,
      course,
      cuisine,
      main_dish: main,
      recipe_origin: recipeOrigin,
      description,
      equipment_needed: equipmentNeededArr,
      ingredients: ingredientsArr,
      instructions: instructionsArr,
      notes: notesArr,
      tags,
      userId: user.id,
      updated_at: new Date().toISOString(),
    };
    console.log('Submit', JSON.stringify(recipeData));
    recipeData.created_at = new Date().toISOString();

    saveRecipe(recipeData, user.id).then((result) => {
      updateUser(result && result.data && result.data.user);
      console.log('Save Recipe', result.data, result.addedRecipe);
      if (!loading) {
        result.ok && setRecipeSaved(true);
        setTimeout(
          props.history.push(
            `/recipe/${result && result.addedRecipe && result.addedRecipe.id}`
          ),
          10000
        );
      }
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <FormTextInput
        className={classes.singleRow}
        label='Title'
        name='title'
        value={title}
        onChange={(e) => handleChange(e, setTitle)}
        placeholder='Title of recipe or whatever you want to remember it as'
        required
      />
      <FormTextInput
        className={classes.singleRow}
        label='Description'
        name='description'
        value={description}
        multiline
        onChange={(e) => handleChange(e, setDescription)}
        placeholder='Some information about the recipe.'
      />
      <FormTextInput
        className={classes.singleRow}
        label='Recipe Reference'
        name='recipeOrigin'
        value={recipeOrigin}
        onChange={(e) => handleChange(e, setRecipeOrigin)}
        placeholder='Where you got it from, even if it’s from yourself'
      />
      <div className={classes.ccm}>
        <FormSelect
          className={classes.formControl}
          label='Course'
          name='course'
          value={course}
          onChange={(e) => handleChange(e, setCourse)}
          arr={optCourse}
        />
        <FormSelect
          className={classes.formControl}
          label='Cuisine'
          name='cuisine'
          value={cuisine}
          onChange={(e) => handleChange(e, setCuisine)}
          arr={cuisines}
        />
        <FormSelect
          className={classes.formControl}
          label='Main Dish'
          name='main'
          value={main}
          onChange={(e) => handleChange(e, setMain)}
          arr={optMains}
        />
      </div>
      <div className={classes.formThreeCol}>
        <FormTextInput
          label='Prep Time'
          name='prepTime'
          value={prepTime}
          onChange={(e) => handleChange(e, setPrepTime)}
          placeholder='Write in mins, 1 hr = 60'
        />
        <FormTextInput
          label='Cook Time'
          name='cookTime'
          value={cookTime}
          onChange={(e) => handleChange(e, setCookTime)}
          placeholder='Write in mins, 1 hr = 60'
        />
        <FormTextInput
          label='Total Time'
          name='totalTime'
          value={totalTime}
          onChange={(e) => handleChange(e, setTotalTime)}
          placeholder='Write in mins, 1 hr = 60'
        />
      </div>
      <div className={classes.formTwoCol}>
        <FormTextInput
          label='Serves'
          name='serves'
          value={serves}
          onChange={(e) => handleChange(e, setServes)}
          placeholder='How many does it make or feed?'
        />
        <FormTextInput
          label='Serving Type'
          name='serveType'
          value={serveType}
          onChange={(e) => handleChange(e, setServeType)}
          placeholder='Serving people or slices of cake...'
        />
      </div>
      <div className={classes.formTwoCol}>
        <FormSelect
          className={classes.formControl}
          label='Saved Tags'
          name='tags'
          value={tags}
          onChange={(e) => handleChange(e, setTags)}
          arr={optTags}
        />
        <FormTextInput
          className={classes.singleRow}
          label='Add Tag'
          name='addedTag'
          value={addedTag}
          onChange={(e) => handleChange(e, setAddedTag)}
          placeholder='Add a new tag'
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={() => addTag(addedTag)}
                edge='end'
              >
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <div className={classes.sectionDivider}>
        <p>Equipment Needed</p>
        {equipmentNeededArr.length > 0 &&
          equipmentNeededArr.map((equipment, index) => (
            <NestedTextInput
              className={classes.singleRow}
              name='equipmentNeeded'
              placeholder="Equipment you'll need for the recipe"
              value={equipment}
              nestedOnChange={(e) =>
                handleNestedChange(
                  e,
                  index,
                  equipmentNeededArr,
                  setEquipmentNeededArr
                )
              }
              removeNestedInput={() =>
                removeNestedInput(
                  setEquipmentNeededArr,
                  index,
                  equipmentNeededArr
                )
              }
              key={`${index} equipmentNeeded`}
            />
          ))}
        <Button
          onClick={() =>
            addEmptyArray(equipmentNeededArr, setEquipmentNeededArr)
          }
        >
          Add Equipment
        </Button>
      </div>
      <div className={classes.sectionDivider}>
        <p>Ingredients*</p>
        {ingredientsArr.length > 0 &&
          ingredientsArr.map((ingredient, index) => (
            <NestedTextInput
              className={classes.singleRow}
              index={index}
              name='ingredient'
              placeholder='An ingredient to create the recipe'
              value={ingredient}
              nestedOnChange={(e) =>
                handleNestedChange(e, index, ingredientsArr, setIngredientsArr)
              }
              removeNestedInput={() =>
                removeNestedInput(setIngredientsArr, index, ingredientsArr)
              }
              key={`${index} ingredient`}
            />
          ))}
        <Button
          onClick={() => addEmptyArray(ingredientsArr, setIngredientsArr)}
        >
          Add Ingredients
        </Button>
      </div>
      <div className={classes.sectionDivider}>
        <p>Instructions*</p>
        {instructionsArr.length > 0 &&
          instructionsArr.map((instruction, index) => (
            <NestedTextInput
              className={classes.singleRow}
              index={index}
              name='instruction'
              placeholder='A step to make the recipe'
              value={instruction}
              nestedOnChange={(e) =>
                handleNestedChange(
                  e,
                  index,
                  instructionsArr,
                  setInstructionsArr
                )
              }
              removeNestedInput={() =>
                removeNestedInput(setInstructionsArr, index, instructionsArr)
              }
              key={`${index} instruction`}
            />
          ))}
        <Button
          onClick={() => addEmptyArray(instructionsArr, setInstructionsArr)}
        >
          Add Instructions
        </Button>
      </div>
      <div className={classes.sectionDivider}>
        <p>Notes</p>
        {notesArr.length > 0 &&
          notesArr.map((note, index) => (
            <NestedTextInput
              className={classes.singleRow}
              index={index}
              name='instruction'
              placeholder='Something to write down about the recipe'
              value={note}
              nestedOnChange={(e) =>
                handleNestedChange(e, index, notesArr, setNotesArr)
              }
              removeNestedInput={() =>
                removeNestedInput(setNotesArr, index, notesArr)
              }
              key={`${index} instruction`}
            />
          ))}
        <Button onClick={() => addEmptyArray(notesArr, setNotesArr)}>
          Add Notes
        </Button>
      </div>
      <Button type='submit'>Save Recipe</Button>
    </form>
  );
};
