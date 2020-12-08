// Queries

export const GET_COURSE_LIST = `query getCourseList {
  options {
    courses
  }
}`;

export const GET_CUISINE_LIST = `query getCuisineList {
  options {
    cuisines
  }
}`;

export const GET_MAIN_LIST = `query getMainList {
  options {
    mains
  }
}`;

export const GET_TAGS_LIST = `query getTagsList {
  options {
    tags
  }
}`;

export const GET_USER_TAGLIST = `query getUserTaglist($key: Int) {
  settings(where: { user_id: { _eq: $key}}) {
    tags
  }
}`;

export const GET_USER_BY_USERNAME = `query GetUserByUsername($username: String!) {
  user(where: { username: { _eq: $username}}) {
    username
    key
  }
}`;

export const GET_USER_BY_EMAIL = `query GetUserByEmail($email: String!) {
  user(where: {email: {_eq: $email}}) {
    name
    email
    key
    user_id
    recipes {
      title
      cook_time
      course
      cuisine
      description
      created_at
      equipment_needed
      id
      ingredients
      instructions
      main_dish
      notes
      prep_time
      recipe_origin
      recipe_video
      serve_type
      total_time
      tags
      serves
      favorite
      have_made
      slug
    }
    username
    settings {
      id
      courses
      cuisines
      mains
      themes
      homepageLimit
      showFractions
    }
  }
}`;

export const GET_USER_BY_EMAIL_AUTHENTICATE = `query GetUserByEmail($email: String!) {
  user(where: {email: {_eq: $email}}) {
    name
    email
    user_id
    recipes {
      title
      cook_time
      course
      cuisine
      description
      equipment_needed
      id
      ingredients
      instructions
      main_dish
      notes
      prep_time
      recipe_origin
      recipe_video
      created_at
      serve_type
      total_time
      tags
      serves
      favorite
      have_made
      slug
    }
    username
    settings {
      id
      courses
      cuisines
      mains
      themes
      homepageLimit
      showFractions
    }
  }
}`;

// Mutations

export const ADD_RECIPE = `mutation AddRecipe($data: [recipes_insert_input!]!) {
  insert_recipes(objects: $data) {
    returning {
      title
      description
      id
      ingredients
      instructions
      main_dish
      notes
      prep_time
      recipe_origin
      recipe_video
      serve_type
      serves
      tags
      total_time
      cuisine
      course
      cook_time
      slug
    }
  }
}`;

export const ADD_USER = `mutation AddUser($data: [user_insert_input!]!) {
  insert_user(objects: $data) {
    returning {
      username
      id
      joinDate
      lastLoggedIn
      email
    }
  }
}`;

export const ADD_DEFAULT_SETTINGS = `mutation AddSetting($newUserId: Int) {
  insert_settings(objects: { courses:[], cuisines: [], homepageLimit: 7, mains:[], showFractions:true, themes: [{selected:"pink"},{options:[{type:"pink",color:"#FFADAD"},{type:"blue",color:"#a7edfd"},{type:"green",color:"#a3f5d2"},{type:"purple",color:"#e0c0ef"}]}], user_id: $newUserId}) {
  returning {
    courses
    cuisines
    showFractions
    themes
    homepageLimit
  }
}
}`;

export const EDIT_RECIPES = `mutation EditRecipes($set: recipes_set_input, $recipeId: Int!) {
  update_recipes(where: {id: {_eq: $recipeId}}, _set: $set) {
    returning {
      title
      description
      id
      ingredients
      instructions
      main_dish
      notes
      prep_time
      recipe_origin
      recipe_video
      serve_type
      serves
      tags
      total_time
      cuisine
      course
      cook_time
      favorite
      have_made
      slug
    }
  }
}`;

export const UPDATE_LOGIN_DATE_RETURN = `mutation UpdateLoginDate($set: user_set_input, $userId: Int!) {
  update_user(where: {id: {_eq: $userId}}, _set: $set) {
    returning {
      avatar
      name
      email
      lastLoggedIn
      joinDate
      id
      recipes {
        title
        cook_time
        course
        cuisine
        description
        equipment_needed
        id
        ingredients
        instructions
        main_dish
        notes
        prep_time
        recipe_origin
        recipe_video
        serve_type
        total_time
        tags
        created_at
        serves
        favorite
        have_made
        slug
      }
      username
      settings {
        id
        courses
        cuisines
        mains
        themes
        homepageLimit
        showFractions
      }
    }
  }
}`;

export const UPDATE_LOGIN_DATE = `mutation updateLoginDate($key: Int, $set: user_set_input) {
  update_user(where: {key: {_eq: $key}}, _set: $set){
    affected_rows
  }
}`;

export const ADD_NEW_SETTINGS = `mutation AddNewSetting($key: Int, $authId:String) {
  insert_settings(objects: [{themes: [{selected:"pink"},{options:[{type:"pink",color:"#FFADAD"},{type:"blue",color:"#a7edfd"},{type:"green",color:"#a3f5d2"},{type:"purple",color:"#e0c0ef"}]}, {tags: ["Low Carb","Gluten Free","Keto","Low Salt","Paleo"]}],auth_id: $authId, user_id: $key }]) {
    returning {
      themes
      showFractions
      mains
      id
      homepageLimit
      cuisines
      courses
    }
 }
}`;

export const UPDATE_USER_NAME = `mutation updateUserName($userId: String, $set: user_set_input) {
  update_user(where: { user_id: {_eq: $userId }}, _set: $set){
    returning {
      name
    }
  }
}`;

export const UPDATE_USER_THEMES = `mutation updateUserSettings($key: Int, $set: settings_set_input) {
  update_settings(where: { user_id: { _eq: $key }}, _set: $set) {
    returning {
      themes
    }
  }
}`;

export const UPDATE_USER_SHOW_FRACTIONS = `mutation UpdateShowFraction($key: Int, $userId: String, $showFractions: Boolean) {
  update_settings(where: { user_id: { _eq: $key }}, _set: { showFractions:  $showFractions} ) {
    returning {
      showFractions
    }
  }
}`;

export const UPDATE_USER_TAGLIST = `mutation updateUserTaglist($key: Int, $set: settings_set_input) {
  update_settings(where: {user_id: {_eq: $key}}, _set: $set) {
    returning {
      tags
    }
    affected_rows
  }
}`;
