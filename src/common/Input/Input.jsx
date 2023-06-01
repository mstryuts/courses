import PropTypes from 'prop-types';
import { InputStyled, LabelStyled } from './Input.styled';

const Input = ({ onChange, value, title }) => {
	return (
		<LabelStyled>
			{title}
			<InputStyled onChange={onChange} value={value} />
		</LabelStyled>
	);
};
Input.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
};

export default Input;
