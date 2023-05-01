const { default: styled } = require('styled-components');

export const InputStyled = styled.input`
	width: 200px;
	padding: 10px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	outline: none;

	&:focus {
		border-color: #0077ff;
	}

	&::placeholder {
		color: #999;
	}
`;
