import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyRecipes = uid => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/recipe.json?orderBy="uid"&equalTo="${uid}"`)
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
const deleteRecipe = recipeId => axios.delete(`${baseUrl}/recipe/${recipeId}.json`);


export default {
  getMyRecipes,
  deleteRecipe,
};
