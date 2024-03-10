import PropTypes from 'prop-types';
import {
  ButtonTextWrapper,
  CardWrapper,
  Delete,
  Meta,
  Name,
  Tel,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/selectors';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <CardWrapper>
      <Meta>
        <Name>{name}</Name>
        <Tel>{phone}</Tel>
      </Meta>

      <Delete
        type="button"
        disabled={isLoading}
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        <ButtonTextWrapper>Delete</ButtonTextWrapper>
      </Delete>
    </CardWrapper>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
