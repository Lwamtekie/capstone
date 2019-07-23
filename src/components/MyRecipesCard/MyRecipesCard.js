import React from 'react';
import PropTypes from 'prop-types';
import MyRecipesShape from '../../helpers/propz/MyRecipesShape';
import RecipeData from '../../helpers/data/Recipe';


class MyRecipesCard extends React.Component {
  static propTypes = {
    recipe: MyRecipesShape.MyRecipesCardShape,
    deleteMyRecipes: PropTypes.func.isRequired,
  }

  deleteMyRecipes = () => {
    const MyRecipesid = this.props.recipe.id;
    console.error(MyRecipesid);
    RecipeData.deleteMyRecipe(MyRecipesid)
      .then(() => this.props.getMyRecipes())
      .catch(err => console.error('no delete for you', err));
  };


  render() {
    const { recipe } = this.props;
    return (
    <div className="RecipesCard col-4">
      <div className="card">
        <div className="card-body">
        <h4 className="card-title">{recipe.name}</h4>
            <img src={recipe.imageurl} className="card-img-top" alt="..." />
           <h5 className="card-title">{recipe.type}</h5>
            <p className="card-text">{recipe.ingredients}</p>
            <p className="card-text">{recipe.instruction}</p>
            <button className="btn btn-danger" onClick={this.deleteMyRecipes}>Delete</button>
        </div>
      </div>
    </div>
    );
  }
}

export default MyRecipesCard;
