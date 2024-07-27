# Social Network API

## Description

This is a Social Network API built with Express.js, MongoDB, and Mongoose. It allows users to share their thoughts, react to friends’ thoughts, and create a friend list.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file and add your MongoDB URI
4. Run `npm run dev` to start the server

## Usage

Use Insomnia or Postman to test the API endpoints.

## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:userId` - Get a single user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:userId` - Update a user by ID
- `DELETE /api/users/:userId` - Delete a user by ID

### Friends

- `POST /api/users/:userId/friends/:friendId` - Add a friend to a user's friend list
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list

### Thoughts

- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:thoughtId` - Get a single thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:thoughtId` - Update a thought by ID
- `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID

### Reactions

- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## License

This project is licensed under the MIT License.

## Screen Recording
[Screen Recording 2024-07-27 at 5.00.48 PM.zip](https://github.com/user-attachments/files/16401466/Screen.Recording.2024-07-27.at.5.00.48.PM.zip)

