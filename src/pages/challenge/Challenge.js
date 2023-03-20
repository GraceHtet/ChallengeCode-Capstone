import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchChallenges } from '../../redux/challenge/challengeSlice';
import Img from '../../component/Img';
import Navbar from '../../component/Navbar';
import styles from './Challenge.module.css';
import filter from '../../filter';

const Challenge = () => {
  const { siteName, name } = useParams();
  const { challenges } = useSelector((state) => state.challenge);
  const dispatch = useDispatch();

  useEffect(() => {
    if (challenges.siteName !== name) dispatch(fetchChallenges(name));
  }, [challenges, name, dispatch]);

  const filtArrs = filter(challenges, siteName);

  let title;
  if (typeof name === 'string') title = name.toUpperCase().replace('_', ' ');

  return (
    <>
      <Navbar back title={`${siteName}/Challenges`} />

      <div className={styles.container}>
        <Img siteName={typeof name === 'string' ? name : ''} width="90%" height="70px" />
        <h2 className={styles.h2}>{title}</h2>
      </div>
      {filtArrs
        && filtArrs.map((each) => (
          <div key={crypto.randomUUID()} className={styles.div}>
            <p className={styles.title}>{each.name}</p>
            <p className={styles.info}>
              <span>duration :</span>
              <span>
                {each.duration}
                hr
              </span>
            </p>
            <p className={styles.info}>
              <span>Start :</span>
              <span>
                {new Date(each.startTime).getFullYear()}
                /
                {new Date(each.startTime).getMonth() + 1}
                /
                {new Date(each.startTime).getDate()}
              </span>
            </p>
            <p className={styles.info}>
              <span>End :</span>
              <span>
                {new Date(each.endTime).getFullYear()}
                /
                {new Date(each.endTime).getMonth() + 1}
                /
                {new Date(each.endTime).getDate()}
              </span>
            </p>
            <a href={each.url} className={styles.a}>
              <span>Go to Challenge</span>
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 20 20"
                className={styles.svg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    d="M4 12L20 12L14.0001 18M17 9L14 6"
                    stroke="#000000"
                    strokeWidth="2.088"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {' '}
                </g>
              </svg>
            </a>
          </div>
        ))}
    </>
  );
};

export default Challenge;
