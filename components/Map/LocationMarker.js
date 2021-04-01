import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import styled from 'styled-components';

const LocationMarker = ({ lat, lng, onClick }) => {
	return (
		<MarkerContainer onClick={onClick}>
			<Icon icon={locationIcon} className='locationIcon' lat={lat} lng={lng} />
		</MarkerContainer>
	);
};

export default LocationMarker;

const MarkerContainer = styled.div``;
