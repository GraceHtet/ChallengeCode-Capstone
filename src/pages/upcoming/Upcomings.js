import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../component/Card';
import { fetchSites } from '../../redux/challenges/challengesSlice';
import styles from './Challenges.module.css';
import pageImg from '../../assets/img/pageImg.svg';
import Img from '../../component/Img';
import Navbar from '../../component/Navbar';
import filter from '../../filter';

const Upcomings = () => {
  const { sites } = useSelector((state) => state.challenges);
  const { siteStatus } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sites.length) dispatch(fetchSites('all'));
  }, [sites, dispatch]);

  const upFilters = filter(sites);

  return (
    <main>
      <Navbar title="Upcoming" />
      <div className={styles.container}>
        <img src={pageImg} className={styles.img} alt="pageImg" />
        <h1 className={styles.h1}>Upcoming Challenges</h1>
      </div>
      {siteStatus === 'loading' && <h2>Please, wait for a while</h2>}
      <div className={styles.containertwo} data-testid="some">
        {upFilters.map((site, idx) => (
          <Link
            key={crypto.randomUUID()}
            className={styles.link}
            to={`/${site.detail[0].linkName}`}
          >
            <Img siteName={site.detail[0].linkName} width="100%" height="50px" />
            <Card name={site.name} total={site.detail.length} data-testid={idx} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Upcomings;
