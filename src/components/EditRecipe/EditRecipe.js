import React from 'react';

import RecipeData from '../../helpers/data/Recipe';
import './EditRecipe.scss';

const defaultRecipe = {
  name: '',
  imageurl: '',
  type: '',
  ingredients: '',
  instruction: '',
  rating: '',
  uid: '',
};

class EditRecipe extends React.Component {
  state = {
    editRecipe: defaultRecipe,
  }

  componentDidMount() {
    const recipeId = this.props.match.params.id;
    RecipeData.getSingleRecipe(recipeId)
      .then(recipePromise => this.setState({ editRecipe: recipePromise.data }))
      .catch(err => (err));
  }

  formFieldStringState = (name, e) => {
    const tempRecipe = { ...this.state.editRecipe };
    tempRecipe[name] = e.target.value;
    this.setState({ editRecipe: tempRecipe });
  }

  nameChange = e => this.formFieldStringState('name', e);

  imageurlChange = e => this.formFieldStringState('imageurl', e);

  typeChange = e => this.formFieldStringState('type', e);

  ingredientsChange = e => this.formFieldStringState('ingredients', e);

  instructionChange = e => this.formFieldStringState('instruction', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.editRecipe };
    const recipeId = this.props.match.params.id;
    RecipeData.putRecipe(saveMe, recipeId)
      .then(() => this.props.history.push('/home'))
      .catch(err => (err));
  }

  render() {
    const { editRecipe } = this.state;

    return (
      <div className="EditRecipe">
        <h1>Edit Recipe</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="dero"
              value={editRecipe.name}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageurl">image</label>
            <input
              type="imageurl"
              className="form-control"
              id="imageurl"
              placeholder="imageurl"
              value={editRecipe.imageurl}
              onChange={this.imageurlChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">type</label>
            <input
              type="text"
              className="form-control"
              id="meat"
              placeholder="12g"
              value={editRecipe.type}
              onChange={this.typeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">ingredients</label>
            <input
              type="text"
              className="form-control"
              id="ingredients"
              placeholder="chicken"
              value={editRecipe.ingredients}
              onChange={this.ingredientsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="instruction">instruction</label>
            <input
              type="text"
              className="form-control"
              id="instruction"
              placeholder="cook"
              value={editRecipe.instruction}
              onChange={this.instructionChange}
            />
          </div>

      <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default EditRecipe;
