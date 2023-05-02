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
		const author = authors.find((a) => a.id === authorId);
		return author ? author.name : '';
	}

	function handleInputChange(event) {
		if (event.target.value === '') {
			setCourses(MOCKED_COURSES_LIST);
		}
		console.log(event.target.value);
		setInputValue(event.target.value);
	}

	function filterCourses(event) {
		if (inputValue === '') {
			return courses;
		}
		event.preventDefault();
		const filteredCourses = courses.filter(
			(course) =>
				course.title.toLowerCase().includes(inputValue.toLowerCase()) ||
				course.id.includes(inputValue.toLowerCase())
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
