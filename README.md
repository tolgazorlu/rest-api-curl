# rest-api-curl

A minimal Express + MongoDB REST API for managing student records (CRUD).

## About
Course assignment ("Ileri Web Odevi") built to practice REST API design with
Express and Mongoose. Built: 2022-01.

## Features
- Create, read, update, and delete student records (`name`, `studentNo`, `eMail`)
- JSON request/response bodies via `express.json()`
- MongoDB persistence through Mongoose models

## Tech stack
- Node.js, Express 4
- MongoDB, Mongoose 6
- nodemon (dev reload)

## Project structure
```
index.js            # app entry, DB connection, route mounting
models/student.js   # Mongoose schema
routers/students.js # CRUD routes for /students
```

## Getting started
```bash
npm install
npm start   # nodemon index.js, listens on port 9000
```
Requires a local MongoDB instance; the app connects to `mongodb://localhost/IleriWebOdev`.

## Status
Learning project, not maintained.

## License
ISC (per `package.json`).
