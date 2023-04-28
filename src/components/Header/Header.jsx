import React from 'react';
import ContainerStyled from '../../common/Container/Container.styled';
import { HeaderStyled, HeaderWrapper, UserBtnWrapper } from './Header.styled';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = () => {
	return (
		<>
			<ContainerStyled>
				<HeaderStyled>
					<HeaderWrapper>
						<Logo />
						<UserBtnWrapper>
							<strong>Dave</strong>
							<Button buttonText='Logout' />
						</UserBtnWrapper>
					</HeaderWrapper>
				</HeaderStyled>
			</ContainerStyled>
		</>
	);
};

export default Header;
