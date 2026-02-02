# User Management System (Workshop 1)

A fully-fledged CRUD backend Application built with Node.js, Express, and TypeScript, demonstrating Object-Oriented Programming (OOP) principles and Layered Architecture.

## Features

- **Layered Architecture**: Strict separation of concerns (Routes -> Controllers -> Services -> Repositories).
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality for Users.
- **Search & Filtering**: Filter by role, active status, and fuzzy search by name/email.
- **Pagination**: Efficient data retrieval with `page` and `limit`.
- **Validation**: Request body validation using Middleware and DTOs.
- **Global Error Handling**: Centralized error management with custom exceptions.

## Project Structure

```
src/
├── controllers/    # handles HTTP requests and responses
├── services/       # contains business logic
├── repositories/   # handles data access (simulated DB)
├── routes/         # defines API endpoints
├── dtos/           # Data Transfer Objects for validation
├── interfaces/     # TypeScript interfaces/models
├── middlewares/    # Express middlewares (Validation, Error)
├── exceptions/     # Custom error classes
├── app.ts          # App configuration
└── server.ts       # Entry point
```

## API Endpoints

### Users

| Method | Endpoint      | Description           | Query Params / Body                          |
| :----- | :------------ | :-------------------- | :------------------------------------------- |
| `GET`  | `/users`      | Get all users         | `?page=1&limit=10&role=admin&search=john`   |
| `GET`  | `/users/:id`  | Get user by ID        | -                                            |
| `POST` | `/users`      | Create a new user     | Body: `{ email, name, role, isActive }`      |
| `PUT`  | `/users/:id`  | Update a user         | Body: `{ email?, name?, role?, isActive? }` |
| `DELETE`| `/users/:id` | Delete a user         | -                                            |

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the App

- **Development Mode**:
    ```bash
    npm run dev
    ```
- **Production Build**:
    ```bash
    npm run build
    npm start
    ```

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
