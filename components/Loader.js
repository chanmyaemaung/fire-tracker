import styled from 'styled-components';

const Loader = () => {
	return (
		<LoaderContainer>
			<LoaderImage src='/spinner.gif' alt='Loading...' />
			<Title>Fetching Data</Title>
		</LoaderContainer>
	);
};

export default Loader;

const LoaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

const LoaderImage = styled.img`
	width: 400px;
`;
const Title = styled.h1`
	margin-top: -100px;
`;
