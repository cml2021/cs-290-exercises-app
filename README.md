# Exercises App

Full-stack MERN single page application that tracks exercises completed by the user. This project was completed during Oregon State University's Fall 2022 CS 290 Web Development course.

## Requirements

- Node
- MongoDB database

## Installation

1. Clone the repo to your local machine
2. Install dependencies for the API

```shell
$ cd exercise-api
$ npm install
```

3. Set environment variables for the API

- Create a .env file in the `exercise-api` directory, E.g.,

```
PORT=3000
MONGODB_CONNECT_STRING = "mongodb+srv://username:password@cluster0..."
```

4. Install dependencies for the UI layer

```shell
$ cd exercise-api
$ npm install
```

5. Create a .env file in the `exercise-ui` directory, E.g.,

```
PORT=8000
```

## Usage

1. Start the API

```shell
$ cd exercise-api
$ npm start
```

2. In another window, launch the React app

```shell
$ cd exercise-ui
$ npm start
```
