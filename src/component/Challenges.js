import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { fetchSites } from '../redux/challenges/challengesSlice';

const Challenges = () => {
  const { sites } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sites.length) dispatch(fetchSites());
  }, [sites, dispatch]);

  return (
    <main>
      <div>
        <h1>Challenge Code</h1>
      </div>
      <div>
        {sites.map((site) => (
          <Card key={crypto.randomUUID()} name={site[0]} />
        ))}
      </div>
    </main>
  );
};

export default Challenges;
