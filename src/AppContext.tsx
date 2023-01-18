import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IBook } from './interfaces';
import * as tools from './tools';

interface IAppContext {
	appTitle: string;
	books: IBook[];
	loginAsAdmin: (onSuccess: () => void, onFailure: () => void) => void;
	password: string;
	setPassword: (password: string) => void;
	adminIsLoggedIn: boolean;
	logoutAsAdmin: () => void;
	handleDeleteFlashcard: (book: IBook) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

const backendUrl = 'http://localhost:3610';

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [books, setBooks] = useState<IBook[]>([]);
	const appTitle = 'Book Site';
	const [password, setPassword] = useState('');
	const [adminIsLoggedIn, setAdminIsLoggedIn] = useState(false);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/books`);
			let _books: IBook[] = response.data;
			_books = tools.randomizeArray(_books);
			setBooks(_books);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const user = (
					await axios.get(`${backendUrl}/get-current-user`, {
						withCredentials: true,
					})
				).data;
				if (user === 'admin') {
					setAdminIsLoggedIn(true);
				}
			} catch (e: any) {
				console.log('GENERAL ERROR');
			}
		})();
	}, []);

	const loginAsAdmin = async (
		onSuccess: () => void,
		onFailure: () => void
	) => {
		try {
			await axios.post(
				`${backendUrl}/login`,
				{
					password,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			);
			setAdminIsLoggedIn(true);
			onSuccess();
		} catch (e: any) {
			switch (e.code) {
				case 'ERR_BAD_REQUEST':
					onFailure();
					break;
				default:
					break;
			}
			setAdminIsLoggedIn(false);
		}
		setPassword('');
	};

	const handleDeleteFlashcard = (book: IBook) => {
		setBooks([...books]);
	};

	const logoutAsAdmin = () => {
		(async () => {
			try {
				setAdminIsLoggedIn(false);
				const user = (
					await axios.get(`${backendUrl}/logout`, {
						withCredentials: true,
					})
				).data;
			} catch (e: any) {
				console.log('GENERAL ERROR');
			}
		})();
	};

	return (
		<AppContext.Provider
			value={{
				appTitle,
				books,
				loginAsAdmin,
				password,
				setPassword,
				adminIsLoggedIn,
				logoutAsAdmin,
				handleDeleteFlashcard,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
