import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '../styles/Card.module.css';

const Card = ({ name, total, amount }) => (
  <div className={amount ? styles.elcontainer : styles.container}>
    <span className={styles.name}>{name}</span>
    <br />
    {amount && (
      <span>
        Challenges:
        {total}
      </span>
    )}
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  total: PropTypes.number,
  amount: PropTypes.bool,
};

Card.defaultProps = {
  total: 0,
  amount: false,
};

export default Card;
