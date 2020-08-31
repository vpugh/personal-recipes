import { useState } from 'react';

const loadRecipeData = (recipeItem, initialData) => {
  if (recipeItem) {
    return recipeItem;
  } else {
    return initialData;
  }
};

const useRecipeState = (currentRecipe) => {
  const [title, setTitle] = useState(loadRecipeData(currentRecipe?.title, ''));
  const [course, setCourse] = useState(
    loadRecipeData(currentRecipe?.course, [])
  );
  const [cuisine, setCuisine] = useState(
    loadRecipeData(currentRecipe?.cuisine, [])
  );
  const [main, setMain] = useState(
    loadRecipeData(currentRecipe?.main_dish, [])
  );
  const [tags, setTags] = useState(loadRecipeData(currentRecipe?.tags, []));
  const [prepTime, setPrepTime] = useState(
    loadRecipeData(currentRecipe?.prep_time, '')
  );
  const [cookTime, setCookTime] = useState(
    loadRecipeData(currentRecipe?.cook_time, '')
  );
  const [totalTime, setTotalTime] = useState(
    loadRecipeData(currentRecipe?.total_time, '')
  );
  const [serves, setServes] = useState(
    loadRecipeData(currentRecipe?.serves, '')
  );
  const [serveType, setServeType] = useState(
    loadRecipeData(currentRecipe?.serve_type, '')
  );
  const [recipeOrigin, setRecipeOrigin] = useState(
    loadRecipeData(currentRecipe?.recipe_origin, '')
  );
  const [description, setDescription] = useState(
    loadRecipeData(currentRecipe?.description, '')
  );

  const [favorite, setFavorite] = useState(
    loadRecipeData(currentRecipe?.favorite, false)
  );

  const [haveMade, setHaveMade] = useState(
    loadRecipeData(currentRecipe?.have_made, false)
  );

  // Add to tags
  const [addedTag, setAddedTag] = useState('');

  // Input Arrays
  const [equipmentNeededArr, setEquipmentNeededArr] = useState(
    loadRecipeData(currentRecipe?.equipment_needed, [])
  );
  const [ingredientsArr, setIngredientsArr] = useState(
    loadRecipeData(currentRecipe?.ingredients, [])
  );
  const [instructionsArr, setInstructionsArr] = useState(
    loadRecipeData(currentRecipe?.instructions, [])
  );
  const [notesArr, setNotesArr] = useState(
    loadRecipeData(currentRecipe?.notes, [])
  );

  return {
    title,
    setTitle,
    course,
    setCourse,
    cuisine,
    setCuisine,
    main,
    setMain,
    tags,
    setTags,
    prepTime,
    setPrepTime,
    cookTime,
    setCookTime,
    totalTime,
    setTotalTime,
    serves,
    setServes,
    serveType,
    setServeType,
    recipeOrigin,
    setRecipeOrigin,
    description,
    setDescription,
    addedTag,
    setAddedTag,
    equipmentNeededArr,
    setEquipmentNeededArr,
    ingredientsArr,
    setIngredientsArr,
    instructionsArr,
    setInstructionsArr,
    notesArr,
    setNotesArr,
    favorite,
    setFavorite,
    haveMade,
    setHaveMade,
  };
};

export default useRecipeState;
