import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  
  50% {
    transform: scale(1.1);
  }
  
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
	width: auto;
	max-width: 150px;
	background-color: black;
	color: white;
	border: none;
	padding: 8px 16px;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.2s ease-out;

	&:hover {
		background-color: #0062cc;
		animation: ${pulse} 0.5s ease-out;
	}
`;

export default Button;
