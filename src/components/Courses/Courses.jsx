import React from 'react';
import { CoursesStyled } from './components/Courses.styled';
import Container from 'common/Container/Container';
import CourseCard from './components/CourseCard/CourseCard';

const Courses = ({ coursesList, authorsList }) => {
	const coursesWithAuthors = coursesList.map((course) => {
		const authorNames = course.authors
			.map((authorId) => {
				const author = authorsList.find((a) => a.id === authorId);
				return author ? author.name : '';
			})
			.join(', ');
		return { ...course, authors: authorNames };
	});

	return (
		<Container>
			<CoursesStyled>
				{coursesWithAuthors.map((course) => (
					<CourseCard
						key={course.id}
						authors={course.authors}
						creationDate={course.creationDate}
						description={course.description}
						duration={course.duration}
						title={course.title}
					/>
				))}
			</CoursesStyled>
		</Container>
	);
};

export default Courses;
