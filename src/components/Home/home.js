import React from 'react';
import RecipeData from '../../helpers/data/Recipe';
import RecipeCard from '../RecipeCard/RecipeCard';

import './home.scss';

class Home extends React.Component {
  state = {
    recipes: [],
  }


  getRecipes = () => {
    RecipeData.getRecipes()
      .then(recipes => this.setState({ recipes }))
      .catch(err => (err));
  }

  componentDidMount() {
    this.getRecipes();
  }


   deleteRecipe = (recipeid) => {
     RecipeData.deleteRecipe(recipeid)
       .then(() => this.getRecipes())
       .catch(err => (err));
   }

   redirectToMyRecipes = () => {
     this.props.history.push('/my');
   }


   render() {
     const makeRecipeCards = this.state.recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          redirectToMyRecipes={this.redirectToMyRecipes}
          deleteRecipe={this.deleteRecipe}
           />
     ));

     return (
        <div className="home">
          <h1>Home</h1>
          <div className="d-flex flex-wrap">
            {makeRecipeCards}
</div>
 </div>
     );
   }
}

export default Home;
