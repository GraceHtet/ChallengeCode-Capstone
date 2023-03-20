import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import Card from '../../component/Card';
import styles from '../category/category.module.css';
import logo from '../../assets/img/logoM.svg';
import Navbar from '../../component/Navbar';

const Home = () => {
  const sites = ['live', 'upcoming', 'all'];

  return (
    <main>
      <Navbar title="Challenge Code" />
      <div className={styles.container}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.h1}>Challenge Code</h1>
      </div>
      <div className={styles.containertwo} data-testid="some">
        {sites.map((site) => (
          <Link key={nanoid()} className={styles.link} to={`/${site}`}>
            <Card name={site} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
