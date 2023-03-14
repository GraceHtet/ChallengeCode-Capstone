import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://kontests.net/api/v1/';

const initialState = {
  sites: [],
  challenges: [],
  status: '',
};

export const fetchSites = createAsyncThunk('challenges/fetchSites', async () => {
  const res = await axios.get(`${url}all`);
  return res.data;
});

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSites.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchSites.fulfilled, (state, action) => ({
        ...state,
        sites: action.payload,
        status: 'completed',
      }));
  },
});

export default challengesSlice.reducer;
