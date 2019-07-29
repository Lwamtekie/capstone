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

  getMyRecipes = () => {
    const { uid } = firebase.auth().currentUser;
    RecipeData.getMyRecipes(uid)
      .then(myRecipes => this.setState({ myRecipes }))
      .catch(err => (err));
  }

  componentDidMount() {
    this.getMyRecipes();
  }


  render() {
    const makeMyRecipesCards = this.state.myRecipes.map(recipe => (
      <MyRecipesCard
      key={recipe.id}
      recipe={recipe}
      getMyRecipes={this.getMyRecipes}
      />
    ));
    return (
      <div className="MyRecipes">
        <h2>My Recipes</h2>
        <div className= "d-flex flex-wrap">
          {makeMyRecipesCards}
        </div>
      </div>
    );
  }
}
export default MyRecipes;
