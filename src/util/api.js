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

const fetchPatch = (url, data) => {
  return fetch(`${apiPath}${url}`, {
    method: 'PATCH',
    body: data,
  });
};

// Get Data
export const getAuthentication = (userData) => {
  return fetchPost('authentication', userData).then((res) => res.json());
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

export const getUserRecipes = (id) => {
  return fetchGet(`recipes/${id}`).then((res) => res.json());
};

export const authenticateUser = (authData) => {
  return fetchPost('user/authenticate', { email: authData }).then((res) =>
    res.json()
  );
};
// Send/Save Data

export const signupUser = (userData) => {
  return fetchPost('user', JSON.stringify(userData));
};

export const updateRecipe = (id, data) => {
  return fetchPatch(`recipe/${id}`, JSON.stringify(data));
};

export const saveRecipe = (data) => {
  return fetchPost('recipe', JSON.stringify(data));
};
