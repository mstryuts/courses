import styled from 'styled-components';

export const TextareaStyled = styled.textarea`
	width: auto;
	height: 100px;
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

export const LabelStyled = styled.label`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
