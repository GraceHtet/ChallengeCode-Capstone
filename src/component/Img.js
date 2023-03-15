import React from 'react';
import { PropTypes } from 'prop-types';
import pageImg from '../assets/img/pageImg.svg';
import atcoder from '../assets/img/atcoder.svg';
import codechef from '../assets/img/codechef.png';
import codeforces from '../assets/img/codeforces.png';
import csacademy from '../assets/img/csacademy.png';
import google from '../assets/img/google.svg';
import hackerrank from '../assets/img/hackerrank.svg';
import hackerearth from '../assets/img/hackerearth.png';
import leetcode from '../assets/img/leetcode.png';
import topcoder from '../assets/img/top.svg';

const Img = ({ siteName, width, height }) => {
  let link;

  switch (siteName) {
    case 'codeforces':
      link = codeforces;
      break;
    case 'codeforces_gym':
      link = codeforces;
      break;
    case 'top_coder':
      link = topcoder;
      break;
    case 'at_coder':
      link = atcoder;
      break;
    case 'code_chef':
      link = codechef;
      break;
    case 'cs_academy':
      link = csacademy;
      break;
    case 'hacker_rank':
      link = hackerrank;
      break;
    case 'hacker_earth':
      link = hackerearth;
      break;
    case 'kick_start':
      link = google;
      break;
    case 'leet_code':
      link = leetcode;
      break;
    default:
      link = pageImg;
      break;
  }
  return <img src={link} alt={siteName} width={width} height={height} />;
};

Img.propTypes = {
  siteName: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Img;
