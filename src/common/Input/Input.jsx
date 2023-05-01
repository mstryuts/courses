import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

const Input = ({ onChange }) => {
	return (
		<label>
			<InputStyled onChange={onChange} />
		</label>
	);
};
Input.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default Input;
