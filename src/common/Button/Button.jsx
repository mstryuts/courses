import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

const Button = ({ buttonText, onClick, disableVerticalStretch }) => {
	return (
		<ButtonStyled
			disableVerticalStretch={disableVerticalStretch}
			onClick={onClick}
		>
			{buttonText}
		</ButtonStyled>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

export default Button;
