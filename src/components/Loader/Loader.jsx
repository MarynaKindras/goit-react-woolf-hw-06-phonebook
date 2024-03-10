import PropTypes from 'prop-types';
import { Wrapper } from './Loader.styled';
import { ClipLoader } from 'react-spinners';

const Loader = ({ size = 50 }) => {
  return (
    <Wrapper>
      <ClipLoader color="#36d7b7" size={size} />
    </Wrapper>
  );
};

export default Loader;

Loader.propTypes = {
  size: PropTypes.number,
};
