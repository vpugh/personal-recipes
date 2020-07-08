import {
  GET_USER_BY_EMAIL,
  ADD_RECIPE,
  ADD_USER,
  GET_USER_BY_EMAIL_AUTHENTICATE,
  EDIT_RECIPES,
  UPDATE_LOGIN_DATE,
  GET_USER_BY_USERNAME,
  ADD_DEFAULT_SETTINGS,
  GET_CUISINE_LIST,
  GET_COURSE_LIST,
  GET_MAIN_LIST,
  GET_TAGS_LIST,
} from '../queries';

const apiPath = '/api/v1/';

// API Methods
const fetchPost = (url, body) => {
  return fetch(`${apiPath}${url}`, {
    method: 'POST',
    body: body,
  });
};

const graphqlUrl = 'https://personal-recipes.herokuapp.com/v1/graphql';

const graphqlRequest = async (query, variables = {}) => {
  const jwtToken = localStorage.getItem('token');
  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const responseBody = await response.json();
  if (responseBody.errors) {
    const message = responseBody.errors
      .map((error) => error.message)
      .join('\n');
    throw new Error(message);
  }
  return responseBody.data;
};

// Get Data

export const getAuthentication = async (email) => {
  const userQuery = GET_USER_BY_EMAIL_AUTHENTICATE;
  const mutation = UPDATE_LOGIN_DATE;

  const { user } = await graphqlRequest(userQuery, { email });
  if (user.length === 0) {
    return { error: 'Incorrect email or password' };
  }

  const {
    key,
    user_id,
    recipes,
    settings,
    joinDate,
    lastLoggedIn,
    name,
    ...rest
  } = user[0];

  await graphqlRequest(mutation, {
    key,
    set: { lastLoggedIn: new Date().toISOString() },
  });

  return {
    user: {
      key,
      recipes,
      settings,
      joinDate,
      lastLoggedIn,
      name,
      ...rest,
    },
  };
};

export const fetchSettings = (id) => {
  return fetchPost('settings', { id }).then((res) => res.json());
};

export const getCourses = async () => {
  const courseQuery = GET_COURSE_LIST;
  const { options } = await graphqlRequest(courseQuery);
  return options[0].courses;
};

export const getCuisines = async () => {
  const cuisineQuery = GET_CUISINE_LIST;
  const { options } = await graphqlRequest(cuisineQuery);
  return options[0].cuisines;
};

export const getMainDishes = async () => {
  const mainQuery = GET_MAIN_LIST;
  const { options } = await graphqlRequest(mainQuery);
  return options[0].mains;
};

export const getTags = async () => {
  const tagsQuery = GET_TAGS_LIST;
  const { options } = await graphqlRequest(tagsQuery);
  return options[0].tags;
};

export const authenticateUser = async (authData) => {
  const query = GET_USER_BY_EMAIL;
  const { user } = await graphqlRequest(query, { email: authData });
  // const mutation = UPDATE_LOGIN_DATE;
  // await graphqlRequest(mutation, {
  //   userId: user[0].id,
  //   set: { lastLoggedIn: new Date().toISOString() },
  // });
  return user[0];
};

// Send/Save Data

export const updateRecipe = async (id, data) => {
  const mutation = EDIT_RECIPES;

  const { update_recipes } = await graphqlRequest(mutation, {
    recipeId: id,
    set: data,
  });
  return update_recipes.returning[0];
};

export const saveRecipe = async (data) => {
  const mutation = ADD_RECIPE;

  const { insert_recipes } = await graphqlRequest(mutation, { data });
  return insert_recipes.returning[0];
};

export const signupUser = async (data) => {
  const userQuery = GET_USER_BY_EMAIL;

  const { user } = await graphqlRequest(userQuery, { email: data.email });
  if (user.length > 0) {
    return { error: 'Email already exists' };
  }

  const usernameQuery = GET_USER_BY_USERNAME;

  const { user: username } = await graphqlRequest(usernameQuery, {
    username: data.username,
  });
  if (username.length > 0) {
    return { error: 'Username already exists' };
  }
  const addUserMutation = ADD_USER;
  const { insert_user } = await graphqlRequest(addUserMutation, { data });
  const newUserId = insert_user.returning[0].id;
  const addSettingsDefault = ADD_DEFAULT_SETTINGS;
  const { insert_settings } = await graphqlRequest(addSettingsDefault, {
    newUserId,
  });
  const returnedUser = Object.assign(
    {},
    insert_user.returning[0],
    {
      settings: [insert_settings.returning[0]],
    },
    { recipes: [] }
  );
  return { returnedUser: returnedUser };
};
