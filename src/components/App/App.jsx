import ContactForm from 'components/ContactForm';
import Container from 'components/Container';
import Search from 'components/Search';
import Section from 'components/Section';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import { MainHeading } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContactsLength } from '../../redux/selectors';

const App = () => {
  const contactLength = useSelector(selectContactsLength);

  return (
    <div>
      <Container>
        <MainHeading>Phonebook</MainHeading>
        <Section>
          <ContactForm />
        </Section>
      </Container>

      <Container>
        <Section title="Contacts">
          {contactLength !== 0 && <Search />}

          {contactLength !== 0 ? (
            <ContactList />
          ) : (
            <Notification message="No contacts" />
          )}
        </Section>
      </Container>
    </div>
  );
};

export default App;
