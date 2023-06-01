import { useState } from 'react';
import { CoursesStyled } from './components/Courses.styled';
import Container from 'common/Container/Container';
import CourseCard from './components/CourseCard/CourseCard';
import {
	MOCKED_AUTHORS_LIST,
	MOCKED_COURSES_LIST,
	BUTTON_TEXT_ADD_COURSE,
} from 'constants';
import SearchBar from './components/SearchBar/SearchBar';
import Button from 'common/Button/Button';
import { SomeWrapper } from './components/Courses.styled';
import CreateCourse from 'components/CreateCourse/CreateCourse';

const Courses = () => {
	const [courses, setCourses] = useState(MOCKED_COURSES_LIST);
	const [authors, setAuthors] = useState(MOCKED_AUTHORS_LIST);
	const [inputValue, setInputValue] = useState('');
	const [showAddCourses, setShowAddCourses] = useState(false);

	function getAuthorNameById(authorId) {
		const author = authors.find((a) => a.id === authorId);
		return author ? author.name : '';
	}

	function handleInputChange(event) {
		if (event.target.value === '') {
			setCourses(MOCKED_COURSES_LIST);
		}
		setInputValue(event.target.value);
	}

	function filterCourses(event) {
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
				{showAddCourses ? (
					<CreateCourse />
				) : (
					<>
						<SomeWrapper>
							<SearchBar
								onChange={handleInputChange}
								onClick={filterCourses}
								inputValue={inputValue}
							/>
							<Button
								buttonText={BUTTON_TEXT_ADD_COURSE}
								onClick={() => setShowAddCourses(true)}
							/>
						</SomeWrapper>
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
					</>
				)}
			</CoursesStyled>
		</Container>
	);
};

export default Courses;
