import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import { BUTTON_TEXT_SEARCH } from 'constants';
import { Formik, Form, Field } from 'formik';
import { FormStyled } from './SearchBar.styled';

const SearchBar = ({ onChange, onClick, inputValue }) => {
	return (
		<>
			<FormStyled action='' onSubmit={onClick}>
				<Input value={inputValue} onChange={onChange} />
				<Button buttonText={BUTTON_TEXT_SEARCH} />
			</FormStyled>
		</>
	);
};

export default SearchBar;
