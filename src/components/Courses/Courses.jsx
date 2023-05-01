import { useState } from 'react';
import { CoursesStyled } from './components/Courses.styled';
import Container from 'common/Container/Container';
import CourseCard from './components/CourseCard/CourseCard';
import { MOCKED_AUTHORS_LIST, MOCKED_COURSES_LIST } from 'constants';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = () => {
	const [courses, setCourses] = useState(MOCKED_COURSES_LIST);
	const [authors, setAuthors] = useState(MOCKED_AUTHORS_LIST);
	const [inputValue, setInputValue] = useState('');

	const coursesWithAuthors = courses.map((course) => {
		const authorNames = course.authors
			.map((authorId) => {
				const author = authors.find((a) => a.id === authorId);
				return author ? author.name : '';
			})
			.join(', ');
		return { ...course, authorNames };
	});

	function handleInputChange(event) {
		console.log(event);
		setInputValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log('Input value:', inputValue);
	}

	return (
		<Container>
			<CoursesStyled>
				<SearchBar
					onChange={handleInputChange}
					onClick={handleSubmit}
					inputValue={inputValue}
				/>
				{coursesWithAuthors.map((course) => (
					<CourseCard
						key={course.id}
						authors={course.authorNames}
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
