import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IBook } from './interfaces';

interface IAppContext {
	appTitle: string;
	books: IBook[];
}

interface IAppProvider {
	children: React.ReactNode;
}

const backendUrl = 'http://localhost:3610';

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [books, setBooks] = useState<IBook[]>([]);
	const appTitle = 'Book Site';

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/books`);
			const _books: IBook[] = response.data;
			setBooks(_books);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				books,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
