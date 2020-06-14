import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  GET_USER_BY_EMAIL,
  ADD_RECIPE,
  ADD_USER,
  ADD_DEFAULT_SETTINGS,
  GET_USER_BY_EMAIL_AUTHENTICATE,
  EDIT_RECIPES,
  UPDATE_LOGIN_DATE,
  GET_USER_BY_USERNAME,
} from '../queries';

const hashPassword = (textPassword) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(textPassword, salt);
};

const isCorrectPassword = (hash, plainText) => {
  return bcrypt.compare(plainText, hash);
};

const apiPath = '/api/v1/';

// API Methods
const fetchPost = (url, body) => {
  return fetch(`${apiPath}${url}`, {
    method: 'POST',
    body: body,
  });
};

const fetchGet = (url) => {
  return fetch(`${apiPath}${url}`);
};

const graphqlUrl = 'https://personal-recipes.herokuapp.com/v1/graphql';

const graphqlRequest = async (query, variables = {}) => {
  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
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

export const getAuthentication = async ({ email, password }) => {
  const userQuery = GET_USER_BY_EMAIL_AUTHENTICATE;
  const mutation = UPDATE_LOGIN_DATE;

  const { user } = await graphqlRequest(userQuery, { email });
  if (user.length === 0) {
    return { error: 'Incorrect email or password' };
  }

  const haveMatch = await isCorrectPassword(user && user[0].password, password);

  if (!haveMatch) {
    return { error: 'Incorrect email or password' };
  }

  const {
    password: remove,
    avatar,
    id,
    recipes,
    settings,
    joinDate,
    lastLoggedIn,
    name,
    ...rest
  } = user[0];

  const token = jwt.sign({ data: rest }, process.env.REACT_APP_SECRET_CODE);

  await graphqlRequest(mutation, {
    userId: id,
    set: { lastLoggedIn: new Date().toISOString() },
  });

  return {
    user: {
      avatar,
      id,
      recipes,
      settings,
      joinDate,
      lastLoggedIn,
      name,
      ...rest,
    },
    token,
  };
};

export const fetchSettings = (id) => {
  return fetchPost('settings', { id }).then((res) => res.json());
};

export const getCourses = () => {
  return fetchGet('courses').then((res) => res.json());
};

export const getCuisines = () => {
  return fetchGet('cuisines').then((res) => res.json());
};

export const getMainDishes = () => {
  return fetchGet('mains').then((res) => res.json());
};

export const getTags = () => {
  return fetchGet('tags').then((res) => res.json());
};

export const authenticateUser = async (authData) => {
  const query = GET_USER_BY_EMAIL;
  const { user } = await graphqlRequest(query, { email: authData });
  const mutation = UPDATE_LOGIN_DATE;
  await graphqlRequest(mutation, {
    userId: user[0].id,
    set: { lastLoggedIn: new Date().toISOString() },
  });
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
  const hash = await hashPassword(data.password);
  data.password = hash;
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
  const { id, joinDate, lastLoggedIn, ...rest } = insert_user.returning[0];
  const token = jwt.sign({ data: rest }, process.env.REACT_APP_SECRET_CODE);
  return { returnedUser: returnedUser, token };
};
