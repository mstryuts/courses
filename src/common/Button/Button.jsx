import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

const Button = ({ buttonText, onClick }) => {
	return <ButtonStyled onClick={onClick}>{buttonText}</ButtonStyled>;
};

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

export default Button;
