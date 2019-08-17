import PropTypes from 'prop-types';

const MyRecipesCardShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageurl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // uid: PropTypes.string.isRequired,
});

export default { MyRecipesCardShape };
