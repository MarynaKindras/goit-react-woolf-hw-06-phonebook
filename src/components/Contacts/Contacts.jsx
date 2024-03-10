import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import Section from 'components/Section';
import { useSelector } from 'react-redux';
import { selectContactsLength } from '../../redux/selectors';
import Search from 'components/Search';

const Contacts = () => {
  const contactLength = useSelector(selectContactsLength);

  return (
    <Section title="Contacts">
      {contactLength !== 0 ? (
        <>
          <Search />
          <ContactList />
        </>
      ) : (
        <Notification message="No contacts" />
      )}
    </Section>
  );
};

export default Contacts;
