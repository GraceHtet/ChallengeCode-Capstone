import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import bArrow from '../assets/img/backArrow.svg';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ back, title }) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      {back ? (
        <button type="button" className={styles.btn} onClick={() => navigate(-1)}>
          <img src={bArrow} width="20px" alt="backArrow" />
        </button>
      ) : (
        <span className={styles.home}>Home</span>
      )}
      <span className={styles.title}>{title}</span>
      <svg
        fill="#55544e"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        stroke="#9b7a03"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

        <g id="SVGRepo_iconCarrier">
          {' '}
          <g>
            {' '}
            <g>
              {' '}
              <path d="M511.956,308.448L512,206.866l-65.97-7.239c-3.584-12.101-8.323-23.822-14.165-35.037l42.198-52.531l-71.812-71.845 L350.48,81.766c-11.115-6.041-22.751-10.987-34.783-14.783l-7.318-66.961H206.797l-7.21,65.973 c-11.988,3.556-23.608,8.248-34.726,14.021l-52.475-42.265l-71.938,71.72l41.484,51.825c-6.058,11.109-11.02,22.741-14.831,34.763 L0.134,203.29L0,304.872l65.963,7.295c3.573,12.101,8.301,23.826,14.135,35.049L37.856,399.71l71.751,71.907l51.807-41.507 c11.112,6.052,22.744,11.008,34.769,14.815l7.261,66.966l101.582,0.088l7.266-65.967c12.1-3.578,23.826-8.313,35.043-14.149 l52.513,42.22l71.876-71.783l-41.529-51.788c6.046-11.112,10.997-22.747,14.8-34.777L511.956,308.448z M256.021,347.705 c-50.659,0-91.727-41.068-91.727-91.727s41.068-91.727,91.727-91.727c50.659,0,91.727,41.068,91.727,91.727 S306.681,347.705,256.021,347.705z" />
              {' '}
            </g>
            {' '}
          </g>
          {' '}
        </g>
      </svg>
    </nav>
  );
};

Navbar.propTypes = {
  back: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  back: false,
};

export default Navbar;
