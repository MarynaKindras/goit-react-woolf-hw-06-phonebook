import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',

  initialState,

  reducers: {
    updateFilter: (state, { payload }) => ({ value: payload }),
  },
});

export const { updateFilter } = filterSlice.actions;
export default filterSlice.reducer;
