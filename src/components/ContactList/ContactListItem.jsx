import { Li, DeleteBtn } from './ContactList.styled';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <Li>
      <p>{name}</p>
      <p>{number}</p>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </Li>
  );
};
