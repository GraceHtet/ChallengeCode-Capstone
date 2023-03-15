import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchChallenges } from '../redux/challenges/challengesSlice';
import bArrow from '../assets/img/backArrow.svg';
import Img from './Img';

const Challenge = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { challenges } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();

  useEffect(() => {
    if (challenges.siteName !== name) dispatch(fetchChallenges(name));
  }, [challenges, dispatch]);

  const upcomings = challenges.filter((each) => {
    const cMonth = new Date(each.startTime).getMonth();
    const cyear = new Date(each.startTime).getFullYear();
    const curMonth = new Date().getMonth();
    const curYear = new Date().getFullYear();
    return cMonth > curMonth && cyear >= curYear;
  });

  const styles = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <>
      <button type="button" style={styles} onClick={() => navigate(-1)}>
        <img src={bArrow} width="30px" alt="backArrow" />
      </button>

      <h2>{name.toUpperCase().replace('_', ' ')}</h2>
      <Img siteName={name} />
      {upcomings.map((each) => (
        <div key={crypto.randomUUID()}>
          <p>{each.name}</p>
          <p>
            duration -{each.duration}
            hr
          </p>
          <p>
            Start -{new Date(each.startTime).getFullYear()}/{new Date(each.startTime).getMonth()}/
            {new Date(each.startTime).getDate()}
          </p>
          <p>
            End -{new Date(each.endTime).getFullYear()}/{new Date(each.endTime).getMonth()}/
            {new Date(each.endTime).getDate()}
          </p>
          <a href={each.url}>Go to Challenge</a>
        </div>
      ))}
    </>
  );
};

export default Challenge;
