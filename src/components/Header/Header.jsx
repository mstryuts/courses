import React from 'react';

import Container from 'common/Container/Container';
import { HeaderStyled, HeaderWrapper, UserBtnWrapper } from './Header.styled';
import Logo from './components/Logo/Logo';
import Button from 'common/Button/Button.styled';

const Header = () => {
	return (
		<>
			<Container>
				<HeaderStyled>
					<HeaderWrapper>
						<Logo />
						<UserBtnWrapper>
							<strong>Dave</strong>
							<Button buttonText='Logout' />
						</UserBtnWrapper>
					</HeaderWrapper>
				</HeaderStyled>
			</Container>
		</>
	);
};

export default Header;
