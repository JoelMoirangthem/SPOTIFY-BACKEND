# Spotify Backend

A Node.js backend for a Spotify-like music streaming application. This project provides authentication, music management, and storage services using Express.js and a modular folder structure.

## Features
- User authentication (register, login)
- Music and album management
- Secure API endpoints with middleware
- Modular MVC architecture
- Storage service abstraction

## Project Structure
```
backend/
├── package.json
├── server.js
├── src/
│   ├── app.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   ├── db/
│   │   └── db.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── model/
│   │   ├── albulm.js
│   │   ├── music.js
│   │   └── user.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── music.route.js
│   └── services/
│       └── storage.service.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/JoelMoirangthem/SPOTIFY-BACKEND.git
   cd SPOTIFY-BACKEND/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Set up your environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

### Running the Server
```sh
npm start
# or
node server.js
```

## Folder Overview
- **controllers/**: Route handler logic for authentication and music endpoints
- **db/**: Database connection and configuration
- **middlewares/**: Express middleware (e.g., authentication)
- **model/**: Data models (User, Music, Album)
- **routes/**: API route definitions
- **services/**: Service layer for storage and other utilities
