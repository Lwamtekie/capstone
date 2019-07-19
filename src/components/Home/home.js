import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import RecipeData from '../../helpers/data/Recipe';
import RecipeCard from '../RecipeCard/RecipeCard';

import './home.scss';

class Home extends React.Component {
  state = {
    recipes: [],
  }

  getRecipes = () => {
    const { uid } = firebase.auth().currentUser;
    RecipeData.getMyRecipes(uid)
      .then(recipes => this.setState({ recipes }))
      .catch(err => console.error('could not get recipes', err));
  }

  componentDidMount() {
    this.getRecipes();
  }

   deleteRecipe = (recipeId) => {
     console.error(recipeId);
     RecipeData.deleteRecipe(recipeId)
       .then(() => this.getRecipes())
       .catch(err => console.error('unable to delete', err));
   }


   render() {
     const makeRecipeCards = this.state.recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          deleteRecipe={this.deleteRecipe}
        />
     ));

     return (
        <div className="Home row">
          <h1>Home</h1>
          <div className="d-flex">
            {makeRecipeCards}
          </div>

        </div>
     );
   }
}

export default Home;
