import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'countries/fetchAll',
  async () => {
    const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    data: [],
    filteredData: [],
    currentPage: 1,
    itemsPerPage: 8,
    regions: [],
    regionFilter: 'All', // ✅ added regionFilter
    status: 'idle',
    error: null,
  },
  reducers: {
    setRegionFilter: (state, action) => {
      state.regionFilter = action.payload; // ✅ update selected region
      if (action.payload === 'All') {
        state.filteredData = state.data;
      } else {
        state.filteredData = state.data.filter(country =>
          country.region === action.payload
        );
      }
      state.currentPage = 1;
    },
    loadMore: (state) => {
      state.currentPage += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.filteredData = action.payload;
        const uniqueRegions = [...new Set(action.payload.map(c => c.region))];
        state.regions = ['All', ...uniqueRegions];
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setRegionFilter, loadMore } = countriesSlice.actions;
export default countriesSlice.reducer;
