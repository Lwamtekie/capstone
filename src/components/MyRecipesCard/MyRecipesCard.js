import React from 'react';

import recipeShape from '../../helpers/propz/recipeShape';


class MyRecipesCard extends React.Component {
  static propTypes = {
    recipe: recipeShape.recipeCardShape,
  }

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
            <button className="btn btn-danger" onClick={this.delete}>Delete</button>
        </div>
      </div>
    </div>
    );
  }
}

export default MyRecipesCard;
