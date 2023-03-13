import React from 'react';
import { PropTypes } from 'prop-types';

const Card = ({ name }) => (
  <div>
    <span>{name}</span>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
