import React from 'react';
import MyRecipesShape from '../../helpers/propz/MyRecipesShape';
import RecipeData from '../../helpers/data/Recipe';


class MyRecipesCard extends React.Component {
  static propTypes = {
    recipe: MyRecipesShape.MyRecipesCardShape,
  }

  deleteMyRecipes = () => {
    const MyRecipesid = this.props.recipe.id;
    RecipeData.deleteMyRecipe(MyRecipesid)
      .then(() => this.props.getMyRecipes())
      .catch(err => (err));
  };


  render() {
    const { recipe } = this.props;
    return (
    <div className="RecipesCard col-4">
      <div className="card">
        <div className="card-body">
        <h4 className="card-title">{recipe.name}</h4>
            <img src={recipe.imageurl} className="card-img" alt="..." />
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
