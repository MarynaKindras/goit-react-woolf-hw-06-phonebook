import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
