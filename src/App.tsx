import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageLogin } from './pages/PageLogin';
import { PageLogout } from './pages/PageLogout';

function App() {
	return (
		<div className="App">
			<h1>Book Site</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/logout">Logout</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/login" element={<PageLogin />} />
				<Route path="/logout" element={<PageLogout />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
