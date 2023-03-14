import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';
import { fetchSites } from '../redux/challenges/challengesSlice';
import styles from '../styles/Challenges.module.css';
import pageImg from '../assets/img/pageImg.svg';

const Challenges = () => {
  const { sites } = useSelector((state) => state.challenges);
  const { status } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sites.length) dispatch(fetchSites());
  }, [sites, dispatch]);

  const upFilters = [];

  // const lives = [];
  sites.filter((site) => {
    const cDate = new Date(site.start_time).getMonth();
    const curDate = new Date().getMonth();

    if (cDate > curDate) {
      const checks = site.site.replace('::', '_').replace(' ', '_').split('');
      const newcheck = checks
        .map((check, idx) => {
          if (check === check.toUpperCase()) {
            if (idx !== 0) {
              if (checks[idx - 1] === '_') return `${check.toLowerCase()}`;
              return `_${check.toLowerCase()}`;
            }
            return check.toLowerCase();
          }
          return check;
        })
        .join('')
        .replace('__', '_');
      return upFilters.push({ name: site.site, linkName: newcheck });
    }
    return site;
  });

  const upcomings = [];
  upFilters.forEach((up, idx) => {
    if (idx === 0) upcomings.push(up);
    if (idx > 0 && up.name !== upFilters[idx - 1].name) upcomings.push(up);
    return up;
  });

  return (
    <main>
      <div className={styles.title}>
        <img src={pageImg} className={styles.img} alt="pageImg" />
        <h1>Challenge Code</h1>
      </div>
      {status === 'loading' && <h2>Please, wait for a while</h2>}
      <div>
        {upcomings.map((site) => (
          <Link key={crypto.randomUUID()} to={`/${site.linkName}`}>
            <Card name={site.name} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Challenges;
