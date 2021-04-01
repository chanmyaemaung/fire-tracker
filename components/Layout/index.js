import Meta from '../Meta';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			{children}
		</>
	);
};

export default Layout;
