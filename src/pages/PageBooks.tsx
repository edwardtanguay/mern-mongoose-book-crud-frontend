import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageBooks = () => {
	const {
		appTitle,
		books,
		adminIsLoggedIn,
		handleDeleteBook,
		handleBookFieldChange,
		handleEditBook,
	} = useContext(AppContext);

	return (
		<div className="pageBooks">
			<Helmet>
				<title>{appTitle} - Books</title>
			</Helmet>
			{books.length > 0 && <p>There are {books.length} books:</p>}

			{adminIsLoggedIn && (
				<div className="addBookArea">
					<button>Add Book</button>
				</div>
			)}
			<div className="books">
				{books.map((book) => {
					return (
						<div className="book" key={book._id}>
							<div className="imageWrapper">
								<img src={book.imageUrl} />
							</div>
							<div className="info">
								{!book.isBeingEdited ? (
									<div className="showDataArea">
										<div className="title">
											<a href={book.buyUrl}>
												{book.title}
											</a>
										</div>
										<div className="description">
											{book.description}
										</div>
										<div className="language">
											{book.languageText}
										</div>
										{adminIsLoggedIn && (
											<div className="buttonArea">
												<button
													onClick={() =>
														handleEditBook(book)
													}
												>
													Edit
												</button>
												<button
													onClick={() =>
														handleDeleteBook(book)
													}
												>
													Delete
												</button>
											</div>
										)}
									</div>
								) : (
									<div className="editArea">
										<form>
											<div className="row">
												<label>Title</label>
												<div className="control">
													<input
														value={
															book
																.originalEditFields
																.title
														}
														onChange={(e) =>
															handleBookFieldChange(
																'title',
																book,
																e.target.value
															)
														}
														type="text"
													/>
												</div>
											</div>
											<div className="row">
												<label>Description</label>
												<div className="control">
													<textarea
														value={
															book
																.originalEditFields
																.description
														}
														onChange={(e) =>
															handleBookFieldChange(
																'description',
																book,
																e.target.value
															)
														}
													/>
												</div>
											</div>
											<div className="row">
												<label>Language</label>
												<div className="control">
													<input
														value={
															book
																.originalEditFields
																.language
														}
														onChange={(e) =>
															handleBookFieldChange(
																'language',
																book,
																e.target.value
															)
														}
														type="text"
													/>
												</div>
												</div>
												<div className="editFormButtons">
													<button>Cancel</button>
													<button>Save</button>
												</div>
										</form>
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
