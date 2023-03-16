import { configureStore } from '@reduxjs/toolkit';
import challengesReducer from './challenges/challengesSlice';
import challengeReducer from './challenge/challengeSlice';

const store = configureStore({
  reducer: {
    challenges: challengesReducer,
    challenge: challengeReducer,
  },
});

export default store;
