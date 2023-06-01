import React from 'react';
import Button from 'common/Button/Button';

import { UlStyled, LiStyled } from './AuthorsList.styled';

import { BUTTON_TEXT_ADD_AUTHOR } from 'constants';
import { array } from 'yup';

(function () {
	console.log('hi');
})();

const AuthorsList = ({ id, name }) => {
	return (
		<>
			<UlStyled>
				<p>{name}</p>
				<Button buttonText={BUTTON_TEXT_ADD_AUTHOR} />
			</UlStyled>
		</>
	);
};

export default AuthorsList;
