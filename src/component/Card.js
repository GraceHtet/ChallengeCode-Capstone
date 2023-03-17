import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '../styles/Card.module.css';

const Card = ({ name, total }) => (
  <div className={styles.container}>
    <span>{name}</span>
    <br />
    <span>
      Challenges:
      {total}
    </span>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default Card;
