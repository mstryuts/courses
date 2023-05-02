import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

const Input = ({ onChange, value }) => {
	return (
		<label>
			<InputStyled onChange={onChange} value={value} />
		</label>
	);
};
Input.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
};

export default Input;
