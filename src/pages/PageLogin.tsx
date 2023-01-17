import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageLogin = () => {
	const { appTitle} = useContext(AppContext);

	return (
		<div className="page pageLogin">
			<Helmet>
				<title>{appTitle} - Login</title>
			</Helmet>
			<p>This is the Login page.</p>
		</div>
	);
};