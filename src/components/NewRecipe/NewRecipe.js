import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import RecipeData from '../../helpers/data/Recipe';
import './NewRecipe.scss';

const defaultRecipe = {
  name: '',
  imageurl: '',
  type: '',
  ingredients: '',
  instruction: '',
};

class NewRecipe extends React.Component {
  state = {
    newRecipe: defaultRecipe,
  }

  formFieldStringState = (name, e) => {
    const tempRecipe = { ...this.state.newRecipe };
    tempRecipe[name] = e.target.value;
    this.setState({ newRecipe: tempRecipe });
  }

  nameChange = e => this.formFieldStringState('name', e);

  imageurlChange = e => this.formFieldStringState('imageurl', e);

  typeChange = e => this.formFieldStringState('type', e);

  ingredientsChange = e => this.formFieldStringState('ingredients', e);

  instructionChange = e => this.formFieldStringState('instruction', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newRecipe };
    saveMe.uid = firebase.auth().currentUser.uid;
    RecipeData.postRecipe(saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => (err));
  }

  render() {
    const { newRecipe } = this.state;
    return (
      <div className="NewRecipe">
        <h2 className="New">New Recipe</h2>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="dero"
              value={newRecipe.name}
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
              value={newRecipe.imageurl}
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
              value={newRecipe.type}
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
              value={newRecipe.ingredients}
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
              value={newRecipe.instruction}
              onChange={this.instructionChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save Recipe</button>
        </form>
      </div>
    );
  }
}
export default NewRecipe;
