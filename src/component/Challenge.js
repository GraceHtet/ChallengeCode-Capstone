import { useParams, useNavigate } from 'react-router-dom';
import bArrow from '../assets/img/backArrow.svg';

const Challenge = () => {
  const { name } = useParams();
  const navigate = useNavigate();

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
      <p>{name}</p>
    </>
  );
};

export default Challenge;
