import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import RecipeData from '../../helpers/data/Recipe';
import MyRecipesCard from '../MyRecipesCard/MyRecipesCard';


import './MyRecipes.scss';


class MyRecipes extends React.Component {
  state = {
    myRecipes: [],
  }

  addMyRecipes = () => {
    const { uid } = firebase.auth().currentUser;
    RecipeData.getMyRecipes(uid)
      .then(myRecipes => this.setState({ myRecipes }))
      .catch(err => console.error('could not get recipes', err));
  }

  componentDidMount() {
    this.addMyRecipes();
  }


  render() {
    const makeMyRecipesCards = this.state.myRecipes.map(recipe => (
      <MyRecipesCard
      key={recipe.id}
      recipe={recipe}
      />
    ));
    return (
      <div className="MyRecipes">
        <h1>My Recipes</h1>
        <div className= "d-flex flex-wrap">
          {makeMyRecipesCards}
        </div>
      </div>
    );
  }
}
export default MyRecipes;
