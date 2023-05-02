import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

const Button = ({ buttonText, onClick, type }) => {
	return (
		<ButtonStyled type={type} onClick={onClick}>
			{buttonText}
		</ButtonStyled>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.string,
};

export default Button;
