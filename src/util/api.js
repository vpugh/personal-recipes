export const getRecipes = (res) => {
  fetch('/api/v1/recipes', {
    method: 'POST',
    body: { userId: res.user.id },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: 'LOAD_RECIPE_DATA_REQUEST' });
      dispatch({ type: 'LOAD_RECIPE_DATA_SUCCESS', recipes: res });
    });
};

const loginFailure = (res, setSigninResponse) => {
  dispatch({ type: 'LOGIN_FAILURE', errors: res.error });
  setSigninResponse(res.error);
};

const loginSuccess = (res) => {
  dispatch({ type: 'LOGIN_SUCCESS', messages: res.error });
  window.localStorage.setItem('authData', JSON.stringify(res.user.email));
  dispatch({ type: 'LOAD_USER_DATA_REQUEST' });
  dispatch({ type: 'LOAD_USER_DATA_SUCCESS', user: res.user });
  dispatch({ type: 'LOAD_RECIPE_DATA_REQUEST' });
  getRecipes(res);
};

export const authentication = (userData, setSigninResponse) => {
  fetch('/api/v1/authentication', {
    method: 'POST',
    body: userData,
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        // login failure
        loginFailure(res, setSigninResponse);
      } else {
        // login success
        loginSuccess(res);
      }
    });
};
