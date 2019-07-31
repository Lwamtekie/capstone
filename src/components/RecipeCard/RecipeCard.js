import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import firebase from 'firebase/app';
import 'firebase/auth';
import RecipeData from '../../helpers/data/Recipe';
import recipeShape from '../../helpers/propz/recipeShape';

import './RecipeCard.scss';

class RecipeCard extends React.Component {
  static propTypes = {
    recipe: recipeShape.recipeCardShape,

  }

  delete = (e) => {
    e.preventDefault();
    const { recipe, deleteRecipe } = this.props;
    deleteRecipe(recipe.id);
  }


  addRecipe = (e) => {
    e.preventDefault();
    const { recipe } = this.props;
    recipe.uid = firebase.auth().currentUser.uid;
    RecipeData.addMyRecipe(recipe)
      .then(() => this.props.redirectToMyRecipes())
      .catch(err => (err));
  }

  selectRecipe = (e) => {
    e.preventDefault();
    const { recipe, selectRecipeToEdit } = this.props;
    selectRecipeToEdit(recipe.id);
  }


  render() {
    const { recipe } = this.props;
    const editLink = `/edit/${recipe.id}`;
    const singleLink = `/single/${recipe.id}`;
    return (
      <div className="RecipeCard col-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{recipe.name}</h4>
            <img src={recipe.imageurl} className="image" alt="..." />
           <h5 className="card-title">{recipe.type}</h5>
            <p className="card-text">{recipe.ingredients}</p>
            <p className="card-text">{recipe.instruction}</p>
            <StarRatingComponent
          name="rate1"
          starCount={5}
          value={recipe.rating}
        />
        <div className="rateAndAdd">
            <Link className="btn btn-info" to={singleLink}>RateMe</Link>
            <button className="btn btn-success" onClick={this.addRecipe}>AddToMyRecipe</button>
        </div>
        <div className="editAndDelete">
            <Link className="btn btn-warning" to={editLink}>Edit</Link>
           <button className="btn btn-danger" onClick={this.delete}>Delete</button>
        </div>
             </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
