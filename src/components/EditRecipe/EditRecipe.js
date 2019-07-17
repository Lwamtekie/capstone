import React from 'react';

import './EditRecipe.scss';

class EditRecipe extends React.Component {
  render() {
    const editId = this.props.match.params.id;

    return (
      <div className="EditRecipe">
        <h1>Edit Recipe</h1>
        <h2>The editId is {editId}</h2>
      </div>
    );
  }
}

export default EditRecipe;
