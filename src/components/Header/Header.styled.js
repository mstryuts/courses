import styled from 'styled-components';

const HeaderStyled = styled.header`
	padding: 10px 40px;
	border: 3px solid black;
	border-radius: 4px;
	margin-top: 5px;
	background-color: #f2f2f2;
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const UserBtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 20px;
`;

export { HeaderStyled, HeaderWrapper, UserBtnWrapper };
