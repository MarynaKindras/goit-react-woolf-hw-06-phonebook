import ContactItem from './ContactItem';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(item => (
        <Item key={item.id}>
          <ContactItem {...item} />
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
