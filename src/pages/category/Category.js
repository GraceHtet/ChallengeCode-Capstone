import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Card from '../../component/Card';
import { fetchSites } from '../../redux/challenges/challengesSlice';
import styles from './category.module.css';
import pageImg from '../../assets/img/pageImg.svg';
import Img from '../../component/Img';
import Navbar from '../../component/Navbar';
import filter from '../../filter';

const Category = () => {
  const { sites } = useSelector((state) => state.challenges);
  const { siteStatus } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();
  const { siteName } = useParams();

  useEffect(() => {
    if (!sites.length) dispatch(fetchSites('all'));
  }, [sites, dispatch]);

  const filtArrs = filter(sites, siteName);
  const srtArrs = [];
  const srtFilt = filtArrs ? filtArrs.map((fil) => fil.siteName).sort() : [];

  srtFilt.forEach((srt) => {
    filtArrs.forEach((fil) => {
      if (fil.siteName === srt && !srtArrs.includes(fil)) {
        srtArrs.push(fil);
      }
    });
  });

  const upFilters = [];
  const upNames = [];
  srtArrs.filter((site) => {
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
    } else if (upNames.includes(site.siteName)) {
      upFilters[Object.keys(upFilters)[Object.keys(upFilters).length - 1]].detail.push({
        ...site,
        linkName: newcheck,
      });
    }
    return site;
  });

  return (
    <main>
      <Navbar title={siteName ? siteName.toString() : ''} back />
      <div className={styles.container}>
        <img src={pageImg} className={styles.img} alt="pageImg" />
        <h1 className={styles.h1}>{`${siteName} Challenges`}</h1>
      </div>
      {siteStatus === 'loading' && <h2>Please, wait for a while</h2>}
      <div className={styles.containertwo} data-testid="some">
        {upFilters.map((site, idx) => (
          <Link
            key={crypto.randomUUID()}
            className={styles.link}
            to={`/${siteName}/${site.detail[0].linkName}`}
          >
            <Img siteName={site.detail[0].linkName} width="100%" height="55" />
            <Card name={site.name} total={site.detail.length} amount data-testid={idx} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Category;
