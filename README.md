# mern-mongoose-book-crud-frontend

This is the frontend to a two-repository project that allows a user to view books, then log in to delete and edit them. You have to install the backend and frontend.

## clone this repository

- clone this repository into project directory, e.g. `mern-crud-frontend`
- delete the repository: `rm -rf .git`
- create a new repository: `git init -b main`
- install node modules: `npm i`

## create .env file

- create an `.env` file in the root directory of your project
- copy in the following content
- make sure the backend URL is correct, e.g. if you changed the port number of your backend, then change it here as well

``` text
VITE_BACKEND_URL = http://localhost:5001
```

## start the project

- `npm run dev`
