# Task Management Application

This project is a Task Management Application built with React Native for the mobile app and Node.js with Express.js for the backend. The application allows users to create, update, delete, and view tasks. It includes user authentication using JWT.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Signup, Login, Logout)
- Task Management (Create, View, Update, Delete)
- Filter tasks based on status (Pending, Completed)
- Sort tasks based on priority or deadline

## Prerequisites

- Node.js
- npm or yarn
- MongoDB (local or cloud instance)
- Expo CLI (for running the React Native app)

## Installation

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/Beamlakbisrat/test_rep2.git
    cd task-management-app/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```sh
   MONGODB_URI=mongodb+srv://LPcluster:16kidanemihiret@learningplatform.rhmqlln.mongodb.net/
JWT_SECRET=3q2+7wUHTxZ2k7w8P7yQ5R2hG9cVQ1cNjEjZMWcO8KU=
PORT=5000

    ```

4. Start the backend server:
    ```sh
    npm run dev
    ```

### Mobile Frontend

1. Navigate to the `mobile-frontend` directory:
    ```sh
    cd ../mobile-frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `mobile-frontend` directory and add the following environment variables:
    ```sh
    API_URL=http://localhost:5000
    ```

4. Start the mobile app using Expo:
    ```sh
    npx expo start
    ```

## Running the Application

1. Ensure MongoDB is running.
2. Start the backend server as described above.
3. Start the mobile app as described above.
4. Use the Expo client to scan the QR code and run the app on your mobile device.

## API Endpoints

### User Routes

- `POST /api/users/signup`: Register a new user
- `POST /api/users/login`: Authenticate a user and return a JWT

### Task Routes

- `GET /api/tasks`: Get all tasks for the authenticated user
- `POST /api/tasks`: Create a new task
- `PUT /api/tasks/:id`: Update a task
- `DELETE /api/tasks/:id`: Delete a task

