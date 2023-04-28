import React from 'react';
import ButtonStyled from './Button.styled';

const Button = ({ buttonText, onClick }) => {
	return <ButtonStyled onClick={onClick}>{buttonText}</ButtonStyled>;
};

export default Button;
