import styled from 'styled-components';

export const CardWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	align-items: center;
	margin: 20px;
	padding: 20px;
	border: 2px solid black;
	border-radius: 4px;
	max-width: 950px;
`;

export const CourseInfo = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: repeat(3, auto);
	gap: 10px;
`;

export const InlineInfoWrap = styled.div``;

export const CourseTitle = styled.h2`
	font-size: 28px;
	font-weight: 500;
	margin-bottom: 20px;
`;
