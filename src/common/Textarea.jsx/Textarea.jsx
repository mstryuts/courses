import React from 'react';
import PropTypes from 'prop-types';
import { TextareaStyled, LabelStyled } from './Textarea.styled';

const Textarea = ({ onChange, descriptionValue, title }) => {
	return (
		<LabelStyled>
			{title}
			<TextareaStyled onChange={onChange} value={descriptionValue} />
		</LabelStyled>
	);
};

Textarea.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
};

export default Textarea;
