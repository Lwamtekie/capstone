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
      .catch(err => console.error('could not get recipes', err));
  }

  componentDidMount() {
    this.getRecipes();
  }


   deleteRecipe = (recipeid) => {
     console.error(recipeid);
     RecipeData.deleteRecipe(recipeid)
       .then(() => this.getRecipes())
       .catch(err => console.error('unable to delete', err));
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
        <div className="Home row">
          <h1>Home</h1>
          <div className="d-flex flex-wrap">
            {makeRecipeCards}
</div>

        </div>
     );
   }
}

export default Home;
