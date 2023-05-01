import React from 'react';

import Container from 'common/Container/Container';
import { HeaderStyled, HeaderWrapper, UserBtnWrapper } from './Header.styled';
import Logo from './components/Logo/Logo';
import Button from 'common/Button/Button';
import { BUTTON_TEXT_LOGOUT, USER_DUMMY_HEADER_NAME } from 'constants';

const Header = () => {
	return (
		<>
			<Container>
				<HeaderStyled>
					<HeaderWrapper>
						<Logo />
						<UserBtnWrapper>
							<strong>{USER_DUMMY_HEADER_NAME}</strong>
							<Button buttonText={BUTTON_TEXT_LOGOUT} />
						</UserBtnWrapper>
					</HeaderWrapper>
				</HeaderStyled>
			</Container>
		</>
	);
};

export default Header;
