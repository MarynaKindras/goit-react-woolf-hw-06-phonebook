import { createSelector } from '@reduxjs/toolkit';
import { filterList } from 'utils/filterList';

export const selectContacts = state => state.contacts.list;
export const selectFilter = state => state.filter.value;

export const selectContactsLength = state => state.contacts.list.length;

// export const selectFilteredContacts = state =>
//   filterList('name', selectContacts(state), selectFilter(state));

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => filterList('name', contacts, filter)
);
