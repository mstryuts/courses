import React from 'react';
import { formatCreationDate, formatDuration } from 'utils';
import Button from 'common/Button/Button';
import {
	CardWrapper,
	CourseInfo,
	CourseTitle,
	CourseInfoItemTitle,
	CourseInfoItemValue,
} from './CourseCard.styled';
import {
	BUTTON_TEXT_SHOW_COURSE,
	COURSE_CREATED_DATE_TITLE,
	COURSE_AUTHORS_TITLE,
	COURSE_DURATION_TITLE,
} from 'constants';

const CourseCard = ({
	authors,
	creationDate,
	description,
	duration,
	title,
}) => {
	const formattedCreationDate = formatCreationDate(creationDate);
	const formattedDuration = formatDuration(duration);
	return (
		<>
			<CardWrapper>
				<div>
					<CourseTitle>{title}</CourseTitle>
					<p>{description}</p>
				</div>
				<CourseInfo>
					<b>{COURSE_AUTHORS_TITLE}</b>
					<p>{authors}</p>

					<b>{COURSE_DURATION_TITLE}</b>
					<p>{formattedDuration}</p>

					<b>{COURSE_CREATED_DATE_TITLE}</b>
					<p>{formattedCreationDate}</p>

					<Button buttonText={BUTTON_TEXT_SHOW_COURSE} />
				</CourseInfo>
			</CardWrapper>
		</>
	);
};

export default CourseCard;
