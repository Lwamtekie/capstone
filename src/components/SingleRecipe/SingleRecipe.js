import React from 'react';
import { Link } from 'react-router-dom';
import RecipeData from '../../helpers/data/Recipe';
import './SingleRecipe.scss';

class SingleRecipe extends React.Component {
  state = {
    recipe: {},
  }

  componentDidMount() {
    const recipeId = this.props.match.params.id;
    RecipeData.getSingleRecipe(recipeId)
      .then(recipePromise => this.setState({ recipe: recipePromise.data }))
      .catch(err => console.error('unable to get single recipe', err));
  }

  deleteRecipe = () => {
    const recipeId = this.props.match.params.id;
    RecipeData.deleteRecipe(recipeId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const { recipe } = this.state;
    const editLink = `/edit/${this.props.match.params.id}`;
    return (
      <div className="SingleRecipe col-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{recipe.name}</h4>
            <img src={recipe.imageurl} className="card-img-top" alt="..." />
           <h5 className="card-title">{recipe.type}</h5>
            <p className="card-text">{recipe.ingredients}</p>
            <p className="card-text">{recipe.instruction}</p>
            <Link className="btn btn-primary" to={editLink}>Edit</Link>
            <button className="btn btn-danger" onClick={this.deleteRecipe}>Delete</button>
             </div>
        </div>
      </div>
    );
  }
}

export default SingleRecipe;
