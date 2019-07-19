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

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    RecipeData.getMyRecipes(uid)
      .then(recipes => this.setState({ recipes }))
      .catch(err => console.error('could not get recipes', err));
  }


  render() {
    const test = this.state.recipes;
    const makeRecipeCards = this.state.recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
    ));

    return (
        <div className="Home col">
          <h1>Home</h1>
          <div className="d-flex">
            {makeRecipeCards}
            {console.error(test)}
          </div>

        </div>
    );
  }
}

export default Home;
