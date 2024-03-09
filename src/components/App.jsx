import React, { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in your contacts.`);
      return;
    }
    setContacts(contacts => [...contacts, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>You don't have any contacts yet.</p>
      ) : (
        <div>
          <Filter value={filter} onChange={handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
          />
        </div>
      )}
    </div>
  );
};
