import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderContainer>
			<Title>
				<Icon icon={locationIcon} />
				Wildfire Tracker (Powered by NASA)
			</Title>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`
	padding: 10px;
	background-color: firebrick;
	color: white;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 100;
`;

const Title = styled.h1`
	font-size: 25px;
	padding: 0;
	margin: 0;
	text-align: center;
`;
