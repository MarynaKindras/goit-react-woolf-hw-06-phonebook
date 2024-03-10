import PropTypes from 'prop-types';
import { Heading, StyledSection } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <StyledSection>
      <Heading>{title}</Heading>
      {children}
    </StyledSection>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
