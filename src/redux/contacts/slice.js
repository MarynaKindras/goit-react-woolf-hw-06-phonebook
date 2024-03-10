import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  list: [
    { id: 'id-1', name: 'Celine Dion', tel: '555-80-90' },
    { id: 'id-2', name: 'Billie Eilish', tel: '300-69-75' },
    { id: 'id-3', name: 'Kelly Klarkson', tel: '257-39-15' },
    { id: 'id-4', name: 'Robert Smith', tel: '267-43-19' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    createContact: {
      reducer: (state, { payload }) => ({ list: [...state.list, payload] }),
      prepare: contact => ({ payload: { id: nanoid(), ...contact } }),
    },

    removeContact: (state, { payload }) => ({
      list: state.list.filter(({ id }) => id !== payload),
    }),
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsPersistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { createContact, removeContact } = contactsSlice.actions;
