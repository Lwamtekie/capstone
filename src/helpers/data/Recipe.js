import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getRecipes = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/recipe.json`)
    .then((res) => {
      const recipes = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          recipes.push(res.data[fbKey]);
        });
      }
      resolve(recipes);
    })
    .catch(err => reject(err));
});
const getMyRecipes = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/userrecipe.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const recipes = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          recipes.push(res.data[fbKey]);
        });
      }
      resolve(recipes);
    })
    .catch(err => reject(err));
});

const getSingleRecipe = recipeId => axios.get(`${baseUrl}/recipe/${recipeId}.json`);
const deleteRecipe = recipeId => axios.delete(`${baseUrl}/recipe/${recipeId}.json`);
const addMyRecipe = recipe => axios.post(`${baseUrl}/userrecipe.json`, recipe);
const deleteMyRecipe = recipeId => axios.delete(`${baseUrl}/userrecipe/${recipeId}.json`);
const postRecipe = newRecipe => axios.post(`${baseUrl}/recipe.json`, newRecipe);
const putRecipe = (updateRecipe, recipeId) => axios.put(`${baseUrl}/recipe/${recipeId}.json`, updateRecipe);


export default {
  getRecipes,
  getSingleRecipe,
  addMyRecipe,
  getMyRecipes,
  deleteRecipe,
  deleteMyRecipe,
  postRecipe,
  putRecipe,
 
};
