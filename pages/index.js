import { useState, useEffect } from 'react';
import Meta from '../components/Meta';
import Map from '../components/Map';
import Loader from '../components/Loader';
import Header from '../components/Header';

export default function Home() {
	const [eventData, setEventData] = useState([]);
	const [loading, setLoading] = useState(false);

	// TODO: Put your NASA API Keys
	const apiKey = process.env.NASA_API_KEY;
	const baseUrl = `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?api_key=${apiKey}`;

	// TODO: Fetch Data
	useEffect(() => {
		const fetchEvent = async () => {
			try {
				setLoading(true);

				const res = await fetch(baseUrl);
				const { events } = await res.json();

				setEventData(events);

				setLoading(false);
			} catch (error) {
				alert(error.message);
			}
		};

		return fetchEvent();
	}, []);

	return (
		<>
			<Meta />
			<Header />
			{!loading ? <Map eventData={eventData} /> : <Loader />}
		</>
	);
}
