import { createSelector } from '@reduxjs/toolkit';
import { filterList } from 'utils/filterList';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;

export const selectContactsLength = state => state.contacts.items.length;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => filterList('name', contacts, filter)
);

export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
