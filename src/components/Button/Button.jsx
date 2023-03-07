import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    Load More
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
