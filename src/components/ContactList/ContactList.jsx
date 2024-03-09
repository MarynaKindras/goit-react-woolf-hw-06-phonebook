import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};
