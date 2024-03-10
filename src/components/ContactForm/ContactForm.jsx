import { useState } from 'react';
import {
  Field,
  FieldWrapper,
  Form,
  Label,
  LabelValue,
  Button,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { createContact } from '../../redux/contacts/slice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitHandler = e => {
    e.preventDefault();

    const hasContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (hasContact) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(createContact({ name, tel }));
    }

    setName('');
    setTel('');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FieldWrapper>
        <Label>
          <LabelValue>Name:</LabelValue>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </Label>

        <Label>
          <LabelValue> Number:</LabelValue>
          <Field
            type="tel"
            name="tel"
            pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={tel}
            onChange={e => {
              setTel(e.target.value);
            }}
          />
        </Label>
      </FieldWrapper>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
