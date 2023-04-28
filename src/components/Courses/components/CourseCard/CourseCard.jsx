import React from 'react';
import { formatCreationDate } from 'utils/formatCreationDate';
import { formatDuration } from 'utils/formatDuration';

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
			<div>
				<div>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<div>
					<strong>Authors:</strong>
					<p>{authors}</p>
					<strong>Duration:</strong>
					<p>{formattedDuration}</p>
					<strong>Creation Date:</strong>
					<p>{formattedCreationDate}</p>
				</div>
			</div>
		</>
	);
};

export default CourseCard;
