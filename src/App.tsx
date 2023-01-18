import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageBooks } from './pages/PageBooks';
import { PageLogin } from './pages/PageLogin';
import { PageLogout } from './pages/PageLogout';

function App() {
	return (
		<div className="App">
			<h1>Book Site</h1>
			<nav>
				<NavLink to="/books">Books</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/logout">Logout</NavLink>
			</nav>

			<Routes>
				<Route path="/books" element={<PageBooks />} />
				<Route path="/login" element={<PageLogin />} />
				<Route path="/logout" element={<PageLogout />} />
				<Route path="/" element={<Navigate to="/books" replace />} />
			</Routes>
		</div>
	);
}

export default App;
