import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({ eventData, center, zoom }) => {
	const [locationInfo, setLocationInfo] = useState(null);

	// Satellite View
	const getMapOptions = (maps) => {
		return {
			mapTypeControl: true,
			streetViewControl: true,
			styles: [
				{
					featureType: 'poi',
					elementType: 'labels',
					stylers: [{ visibility: 'on' }],
				},
			],
		};
	};

	const markers = eventData.map((ev, index) => {
		if (ev.categories[0].id === 8) {
			return (
				<LocationMarker
					key={index}
					lat={ev.geometries[0].coordinates[1]}
					lng={ev.geometries[0].coordinates[0]}
					onCLick={() => setLocationInfo({ id: ev.id, title: ev.title })}
				/>
			);
		}

		return null;
	});

	return (
		<MapContainer>
			<GoogleMapReact
				// TODO: Put your Google Map API here!
				bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
				defaultCenter={center}
				defaultZoom={zoom}
				options={getMapOptions}
			>
				{markers}
			</GoogleMapReact>
			{locationInfo && <LocationInfoBox info={locationInfo} />}
		</MapContainer>
	);
};

export default Map;

Map.defaultProps = {
	// My Location
	center: {
		lat: 35.508566,
		lng: 139.067077,
	},
	zoom: 6,
};

const MapContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
`;
