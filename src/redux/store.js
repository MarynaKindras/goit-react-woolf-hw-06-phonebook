import { configureStore } from '@reduxjs/toolkit';
import { contactsPersistedReducer } from './contacts/slice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import filterReducer from './filter/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
