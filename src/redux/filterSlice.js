import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilterSlice(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { setFilterSlice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;