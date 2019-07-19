import React from 'react';

import recipeData from '../../helpers/data/Recipe';

import './MyRecipe.scss';

class MyRecipe extends React.Component {
  state = {
    recipe: {},
  }

  componentDidMount() {
    const recipeId = this.props.match.params.id;
    recipeData.getMyRecipe(recipeId)
      .then(recipePromise => this.setState({ recipe: recipePromise.data }))
      .catch(err => console.error('unable to get single ', err));
  }

   deleteScat = () => {
     const recipeId = this.props.match.params.id;
     recipeData.deleteRecipe(recipeId)
       .then(() => this.props.history.push('/home'))
       .catch(err => console.error('unable to delete', err));
   }

   render() {
     const { recipe } = this.state;
     return (
      <div className="MyRecipe">
       <h4>{recipe.name}</h4>
       <img src={recipe.imageurl}alt="..." />
      <h5>{recipe.type}</h5>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instruction}</p>
      <button className="btn btn-danger" onClick={this.deleteRecipe}>Delete</button>
    </div>
     );
   }
}

export default MyRecipe;
