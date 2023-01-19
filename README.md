# mern-mongoose-book-crud-frontend

This is the frontend to a two-repository project that allows a user to view books, then log in to delete and edit them. You have to install the backend and frontend.

- [backend repository](https://github.com/edwardtanguay/mern-mongoose-book-crud-backend)
- [frontend repository](https://github.com/edwardtanguay/mern-mongoose-book-crud-frontend)


## CREATE ONE PROJECT FOR BOTH BACKEND AND FRONTEND

- open your terminal
- create a directory for this project, e.g.
  - `mkdir site001`

## INSTALL BACKEND

### set up directory and editor

- enter your project directory
	- `cd site001`
- create backend directory
	- `git clone git@github.com:edwardtanguay/et-mern-crud-site-backend.git site001-backend`
- open VSCode in the backend directory
	- `code site001-backend`
- open VSCode terminal
- delete old and create new Git repository
	- `rm -rf .git`
	- `git npm -b main`
	- make initial commit
- to distinguish your backend VSCode from your frontend VSCode, set the frame color
	- you need the [VSCode Peacock extension](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
	- **F1**
	- "Peacock: Enter a Color"
	- `navy` (**b**lue for **b**ackend)

### create database

- create MongoDB database at your MongoDB Atlas called `bookapi`
- create a collection in it called `books`
- import the file `dev/books.json` into the collection `books` (e.g. with MongoDB Compass)

### create .env file

- create an `.env` file in the root directory of your project
- copy in the following content
- replace all capitalized variables with appropriate data 
  - USERNAME
  - PASSWORD
  - RANDOMSTRING
  - ADMINPASSWORD
- you can also change the backend/frontend ports if you need to

``` text
APP_NAME = Book Site API
SECONDS_TILL_SESSION_TIMEOUT = 3600 
PORT = 5001
MONGODB_CONNECTION = mongodb+srv://USERNAME:PASSWORD@cluster0.ogshn.mongodb.net/bookapi?retryWrites=true&w=majority
SESSION_SECRET = RANDOMSTRING
ADMIN_PASSWORD = ADMINPASSWORD
FRONTEND_URL = http://localhost:5002
```
### start the backend

- `npm run dev`

---

## INSTALL FRONTEND

### set up directory and editor

- enter your project directory
  - `cd site001`
- create frontend directory
  - `git clone git@github.com:edwardtanguay/et-mern-crud-site-frontend.git site001-frontend`
- open VSCode in the frontend directory
  - `code site001-frontend`
- open VSCode terminal
- delete old and create new Git repository
  - `rm -rf .git`
  - `git npm -b main`
  - make initial commit
- to distinguish your frontend VSCode from your backend VSCode, set the frame color
	- you need the [VSCode Peacock extension](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
	- **F1**
	- "Peacock: Enter a Color"
	- `purple` (**f**uchsia for **f**rontend)

### create .env file

- create an `.env` file in the root directory of your project
- copy in the following content
- make sure the backend URL is correct, e.g. if you changed the port number of your backend, then change it here as well

``` text
VITE_BACKEND_URL = http://localhost:5001
```
### start the frontend

- `npm run dev`
- open in browser
- click url in terminal
