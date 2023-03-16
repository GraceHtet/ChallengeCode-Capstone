import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://kontests.net/api/v1/';

const initialState = {
  sites: [],
  siteStatus: '',
};

export const fetchSites = createAsyncThunk('challenges/fetchSites', async (site) => {
  const res = await axios.get(`${url}${site}`);
  const sites = res.data;
  return sites.map((each) => ({
    siteName: each.site,
    name: each.name,
    url: each.url,
    startTime: each.start_time,
    endTime: each.end_time,
    duration: Math.floor(+each.duration / 3600),
  }));
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
        siteStatus: 'completed',
      }));
  },
});

export default challengesSlice.reducer;
