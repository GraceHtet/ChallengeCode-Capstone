import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';
import { fetchSites } from '../redux/challenges/challengesSlice';
import styles from '../styles/Challenges.module.css';
import pageImg from '../assets/img/pageImg.svg';
import Img from './Img';
import Navbar from './Navbar';

const Upcomings = () => {
  const { sites } = useSelector((state) => state.challenges);
  const { siteStatus } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sites.length) dispatch(fetchSites('all'));
  }, [sites, dispatch]);

  const upFilters = [];
  const upNames = [];
  sites.filter((site) => {
    const cMonth = new Date(site.startTime).getMonth();
    const cyear = new Date(site.startTime).getFullYear();
    const curMonth = new Date().getMonth();
    const curYear = new Date().getFullYear();

    if (cMonth > curMonth && cyear >= curYear) {
      const checks = site.siteName.replace('::', '_').replace(' ', '_').split('');
      const newcheck = checks
        .map((check, idx) => {
          if (check === check.toUpperCase()) {
            if (idx !== 0) {
              if (checks[idx - 1] === '_') return `${check.toLowerCase()}`;
              if (checks[idx - 1] === 'e' && check === 'F') return `${check.toLowerCase()}`;
              return `_${check.toLowerCase()}`;
            }
            return check.toLowerCase();
          }
          return check;
        })
        .join('')
        .replace('__', '_');

      if (!upNames.includes(site.siteName)) {
        upNames.push(site.siteName);
        upFilters.push({ name: site.siteName, detail: [{ ...site, linkName: newcheck }] });
      } else {
        upFilters[Object.keys(upFilters)[Object.keys(upFilters).length - 1]].detail.push({
          ...site,
          linkName: newcheck,
        });
      }
    }
    return site;
  });

  return (
    <main>
      <Navbar title="Upcoming" />
      <div className={styles.title}>
        <img src={pageImg} className={styles.img} alt="pageImg" />
        <h1>Upcoming Challenges</h1>
      </div>
      {siteStatus === 'loading' && <h2>Please, wait for a while</h2>}
      <div>
        {upFilters.map((site) => (
          <Link key={crypto.randomUUID()} to={`/${site.detail[0].linkName}`}>
            <Img siteName={site.detail[0].linkName} />
            <Card name={site.name} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Upcomings;
