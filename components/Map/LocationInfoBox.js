import styled from 'styled-components';

const LocationInfoBox = ({ info }) => {
	return (
		<LocationInfoContainer>
			<Title>Event Location Info</Title>
			<ListContainer>
				<ListData>
					ID: <strong>{info.id}</strong>
				</ListData>
				<ListData>
					Title: <strong>{info.title}</strong>
				</ListData>
			</ListContainer>
		</LocationInfoContainer>
	);
};

export default LocationInfoBox;

const LocationInfoContainer = styled.div`
	position: absolute;
	top: 80px;
	right: 50px;
	width: 400px;
	min-height: 200px;
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.6);
	color: white;
	border-radius: 10px;
	font-size: 18px;
`;

const Title = styled.h2`
	color: #ffd700;
`;

const ListContainer = styled.ul`
	list-style-type: none;
	padding: 0;
`;

const ListData = styled.li`
	padding: 5px 0;
`;
