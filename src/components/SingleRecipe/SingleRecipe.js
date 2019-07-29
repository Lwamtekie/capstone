import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import RecipeData from '../../helpers/data/Recipe';
import './SingleRecipe.scss';


class SingleRecipe extends React.Component {
  state = {
    recipe: {},
    rating: 1,
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  getRecipe = () => {
    const recipeId = this.props.match.params.id;
    RecipeData.getSingleRecipe(recipeId)
      .then(recipePromise => this.setState({ recipe: recipePromise.data, rating: recipePromise.data.rating }))
      .catch(err => (err));
  }

  componentDidMount() {
    this.getRecipe();
  }

  deleteRecipe = () => {
    const recipeId = this.props.match.params.id;
    RecipeData.deleteRecipe(recipeId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to delete', err));
  }

  rating = () => {
    const recipeId = this.props.match.params.id;
    const { recipe } = this.state;
    recipe.rating = this.state.rating;
    RecipeData.putRecipe(recipe, recipeId)
      .then(() => this.getRecipe())
      .catch(err => console.error(err));
  }


  render() {
    const { recipe } = this.state;
    const { rating } = this.state;

    return (
      <div className="SingleRecipe col-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{recipe.name}</h4>
            <img src={recipe.imageurl} className="card-img-top" alt="..." />
           <h5 className="card-title">{recipe.type}</h5>
            <p className="card-text">{recipe.ingredients}</p>
            <p className="card-text">{recipe.instruction}</p>
            <div>
       <h2>Rating from state: {rating}</h2>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
      <button className="btn btn-danger" onClick={this.deleteRecipe}>Delete</button>
      <button className="btn btn-danger" onClick={this.rating}>Save</button>
             </div>
        </div>
      </div>
    );
  }
}

export default SingleRecipe;
