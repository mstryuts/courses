import { useState } from 'react';
import { nanoid } from 'nanoid';

import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import Textarea from 'common/Textarea.jsx/Textarea';
import AuthorsList from 'components/Authors/AuthorsList';

import {
	CREATE_COURSE_TITLE,
	CREATE_COURSE_DESCRIPTION,
	BUTTON_TEXT_CREATE_COURSE,
	BUTTON_TEXT_CREATE_AUTHOR,
	MOCKED_AUTHORS_LIST,
} from 'constants';

import {
	StyledDiv,
	AnotherStyledDiv,
	AuthorsStyledDiv,
	AddAuthorDiv,
	AuthorsDiv,
} from './CreateCourse.styled';
import DropdownSelect from './DropSelect';

const CreateCourse = () => {
	const [mockedAuthor, setMockedAuthor] = useState(MOCKED_AUTHORS_LIST);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [error, setError] = useState('');

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	const handleAuthorChange = (event) => {
		setNewAuthor(event.target.value);
		setError('');
	};

	const addNewAuthor = (e) => {
		e.preventDefault();
		if (newAuthor.length <= 2) {
			setError('Author name should be at least 2 characters long');
			setNewAuthor('');
			return;
		}
		const author = {
			id: nanoid(),
			name: newAuthor,
		};

		setMockedAuthor([author, ...mockedAuthor]);
		setNewAuthor('');
	};

	return (
		<>
			<StyledDiv>
				<AnotherStyledDiv>
					<Input
						value={title}
						onChange={handleTitleChange}
						title={CREATE_COURSE_TITLE}
					/>
					<Button
						buttonText={BUTTON_TEXT_CREATE_COURSE}
						disableVerticalStretch
						onClick={null}
					/>
				</AnotherStyledDiv>
				<Textarea
					value={description}
					onChange={handleDescriptionChange}
					title={CREATE_COURSE_DESCRIPTION}
				/>
				<AuthorsStyledDiv>
					<AddAuthorDiv>
						<h2>Add Author</h2>
						<form action=''>
							{' '}
							<Input
								value={newAuthor}
								onChange={handleAuthorChange}
								// title={CREATE_COURSE_TITLE}
							/>
							{error && <p>{error}</p>}
							<Button
								buttonText={BUTTON_TEXT_CREATE_AUTHOR}
								onClick={addNewAuthor}
							/>
						</form>
					</AddAuthorDiv>
					<AuthorsDiv>
						<h2>Authors</h2>
						{mockedAuthor.map(({ name, id }) => (
							<AuthorsList name={name} key={id} />
						))}
					</AuthorsDiv>
				</AuthorsStyledDiv>
			</StyledDiv>
			<DropdownSelect />
		</>
	);
};

export default CreateCourse;

let squares = [2, 4, 6].map((x) => x * x);
// [a, b] = squares;
console.log(squares);
