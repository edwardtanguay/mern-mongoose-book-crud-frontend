import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageBooks = () => {
	const { appTitle, books, adminIsLoggedIn } = useContext(AppContext);

	return (
		<div className="pageBooks">
			<Helmet>
				<title>{appTitle} - Books</title>
			</Helmet>
			<p>There are {books.length} books:</p>

			{adminIsLoggedIn && (
				<div className="addBookArea">
					<button>Add Book</button>
				</div>
			)}
			<div className="books">
				{books.map((book) => {
					return (
						<div className="book" key={book._id}>
							<img src={book.imageUrl} />
							<div className="info">
								<div className="title">
									<a href={book.buyUrl}>{book.title}</a>
								</div>
								<div className="description">
									{book.description}
								</div>
								<div className="language">
									{book.languageText}
								</div>
								{adminIsLoggedIn && (
									<div className="buttonArea">
										<button>Edit</button>
										<button>Delete</button>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
