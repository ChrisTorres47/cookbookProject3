import axios from "axios";

export default {

//------------FOR USER LOGIN------------------------------
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

//---------------CRUD-----------------------------------
  // Create - Saves a recipe to the database
  addRecipe: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  },
  // Read - Gets all recipes
  getAllRecipes: function() {
    return axios.get("/api/recipes");
  },   
  // Read - Gets the recipe with the given id
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // Update - Updates recipes in the database
  updateRecipe: function(id) {
    return axios.put("/api/recipes/", + id);
  },
  // Delete - Deletes the recipe with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },

//-------------Search Routes----------------------------
  // api that gets a random recipe
  getRecipes: function(query) {
  return axios.get("/api/puppy", {params: {q : query}});
  },

  // getRecipes: function(query) {
  //   return axios.get("/api/recipes", { params: { q: query } });
  // }

};