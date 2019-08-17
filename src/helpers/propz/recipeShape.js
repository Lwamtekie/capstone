import PropTypes from 'prop-types';

const recipeCardShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageurl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
});

export default { recipeCardShape };
