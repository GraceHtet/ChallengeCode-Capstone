import { configureStore } from '@reduxjs/toolkit';
import challengesReducer from './challenges/challengesSlice';

const store = configureStore({
  reducer: {
    challenges: challengesReducer,
  },
});

export default store;
