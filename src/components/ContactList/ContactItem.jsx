import PropTypes from 'prop-types';
import { CardWrapper, Delete, Meta, Name, Tel } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/slice';

const ContactItem = ({ id, name, tel }) => {
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <Meta>
        <Name>{name}</Name>
        <Tel>{tel}</Tel>
      </Meta>

      <Delete
        type="button"
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        Delete
      </Delete>
    </CardWrapper>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};
