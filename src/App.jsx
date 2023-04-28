import { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedCoursesList, mockedAuthorsList } from './constants';

const App = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	return (
		<>
			<Header />
			<Courses coursesList={courses} authorsList={authors} />
		</>
	);
};

export default App;
