import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import recipeShape from '../../helpers/propz/recipeShape';


class RecipeCard extends React.Component {
  static propTypes = {
    recipe: recipeShape.recipeCardShape,
    deleteRecipe: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { recipe, deleteRecipe } = this.props;
    deleteRecipe(recipe.id);
  }

  render() {
    const { recipe } = this.props;
    const singleLink = `/recipe/${recipe.id}`;
    return (
      <div className="RecipeCard col-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{recipe.name}</h4>
            <img src={recipe.imageurl} className="card-img-top" alt="..." />
           <h5 className="card-title">{recipe.type}</h5>
            <p className="card-text">{recipe.ingredients}</p>
            <p className="card-text">{recipe.instruction}</p>
            <Link className="btn btn-success" to={singleLink}>Add</Link>
            <button className="btn btn-danger" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
