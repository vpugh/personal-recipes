import React, { useState } from 'react';
import TextInput from '../../components/inputs/text-input';
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
  updateRecipe,
  getUserRecipes,
  saveRecipe,
} from '../../util/api';
import { useEffect } from 'react';

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

const names = ['American', 'Vietnamese', 'Mexican', 'Italian'];

export const RecipeForm = () => {
  const classes = useStyles();
  const [optCourse, setOptCourse] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [optMains, setOptMains] = useState([]);

  const [title, setTitle] = useState();
  const [personName, setPersonName] = React.useState([]);
  const [course, setCourse] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [main, setMain] = useState([]);

  useEffect(() => {
    fetchCourse(setOptCourse);
    fetchCuisine(setCuisines);
    fetchMains(setOptMains);
  }, []);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <form>
      <FormControl className={classes.singleRow}>
        <InputLabel>Title</InputLabel>
        <Input placeholder='Title of recipe or whatever you want to remember it as' />
      </FormControl>
      {/* <TextInput
        label='Title'
        placeholder='Title of recipe or whatever you want to remember it as'
        required
        value={title}
        setFunc={setTitle}
      /> */}
      <div style={{ marginBottom: 10 }}>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-mutiple-name-label'>Course</InputLabel>
          <Select
            labelId='demo-mutiple-name-label'
            id='demo-mutiple-name'
            multiple
            value={course}
            onChange={handleChange}
            input={<Input />}
          >
            {optCourse.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-mutiple-name-label'>Cuisine</InputLabel>
          <Select
            labelId='demo-mutiple-name-label'
            id='demo-mutiple-name'
            multiple
            value={cuisine}
            onChange={handleChange}
            input={<Input />}
          >
            {cuisines.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-mutiple-name-label'>Main Dish</InputLabel>
          <Select
            labelId='demo-mutiple-name-label'
            id='demo-mutiple-name'
            multiple
            value={main}
            onChange={handleChange}
            input={<Input />}
          >
            {optMains.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.formThreeCol}>
        <FormControl>
          <InputLabel>Prep Time</InputLabel>
          <Input placeholder='Write in mins, 1 hr = 60' />
        </FormControl>
        {/* <TextInput
          label='Prep Time'
          placeholder='Write in mins, 1 hr = 60'
          required
          value=''
          setFunc={() => console.log('Tests')}
        /> */}
        <FormControl>
          <InputLabel>Cook Time</InputLabel>
          <Input placeholder='Write in mins, 1 hr = 60' />
        </FormControl>
        {/* <TextInput
          label='Cook Time'
          placeholder='Write in mins, 1hr = 60'
          required
          value=''
          setFunc={() => console.log('Tests')}
        /> */}
        <FormControl>
          <InputLabel>Total Time</InputLabel>
          <Input placeholder='Write in mins, 1 hr = 60' />
        </FormControl>
        {/* <TextInput
          label='Total Time'
          placeholder='Write in mins, 1hr = 60'
          required
          value=''
          setFunc={() => console.log('Tests')}
        /> */}
      </div>
    </form>
  );
};
