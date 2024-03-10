import { createSlice } from '@reduxjs/toolkit';
import { createContact, getContacts, removeContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isLoadingHandler = state => {
  state.isLoading = true;
};

const errorHandler = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, isLoadingHandler)
      .addCase(getContacts.rejected, errorHandler)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(createContact.pending, isLoadingHandler)
      .addCase(createContact.rejected, errorHandler)
      .addCase(createContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(removeContact.pending, isLoadingHandler)
      .addCase(removeContact.rejected, errorHandler)
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload.id);
        state.error = null;
        state.isLoading = false;
      });
  },
});

export default contactsSlice.reducer;
