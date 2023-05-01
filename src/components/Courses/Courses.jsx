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

	function getAuthorNameById(authorId) {
		const author = MOCKED_AUTHORS_LIST.find((a) => a.id === authorId);
		return author ? author.name : '';
	}

	// const coursesWithAuthors = courses.map((course) => {
	// 	const authorNames = course.authors
	// 		.map((authorId) => {
	// 			const author = authors.find((a) => a.id === authorId);
	// 			return author ? author.name : '';
	// 		})
	// 		.join(', ');
	// 	return { ...course, authorNames };
	// });

	function handleInputChange(event) {
		console.log(event);
		setInputValue(event.target.value);
	}

	function filterCourses(event) {
		const filteredCourses = MOCKED_COURSES_LIST.filter((course) =>
			course.title.toLowerCase().includes(inputValue.toLowerCase())
		);
		setCourses(filteredCourses);
	}

	return (
		<Container>
			<CoursesStyled>
				<SearchBar
					onChange={handleInputChange}
					onClick={filterCourses}
					inputValue={inputValue}
				/>
				{courses.map((course) => (
					<CourseCard
						key={course.id}
						authors={course.authors
							.map((authorId) => getAuthorNameById(authorId))
							.join(', ')}
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
