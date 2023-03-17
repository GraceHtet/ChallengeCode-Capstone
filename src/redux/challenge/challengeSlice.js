import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://kontests.net/api/v1/';

const initialState = {
  challenges: [],
};

export const fetchChallenges = createAsyncThunk('challenges/fetchChallenges', async (site) => {
  const res = await axios.get(`${url}${site}`);
  const challenges = res.data;
  return challenges.map((each) => ({
    siteName: site,
    name: each.name,
    url: each.url,
    startTime: each.start_time,
    endTime: each.end_time,
    duration: Math.floor(+each.duration / 3600),
  }));
});

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchChallenges.fulfilled, (state, action) => ({
      ...state,
      challenges: action.payload,
    }));
  },
});

export default challengeSlice.reducer;
