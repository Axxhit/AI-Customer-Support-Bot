# AI Customer Support Bot

A modern AI-powered chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and integrated with OpenAI's GPT API.

## Features

- 🤖 Real-time AI chat interactions
- 🔐 Secure user authentication
- 💾 Persistent chat history
- 🎨 Modern, responsive UI
- 🌙 Dark mode interface
- 🔄 Real-time message updates

## Tech Stack

### Frontend
- React with TypeScript
- Material-UI for styling
- React Router for navigation
- Axios for API requests
- React Hot Toast for notifications

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- OpenAI API integration
- TypeScript


### Demo
[Watch Video](./demo(1).mp4)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd AIChatBot
```

2. Install dependencies for both frontend and backend

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables

Create `.env` file in the backend directory:
```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPEN_AI_SECRET=your_openai_api_key
PORT=5000
```

4. Start the development servers

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
AIChatBot/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── helpers/
│   │   └── ...
│   ├── package.json
│   └── ...
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── config/
│   │   └── ...
│   ├── package.json
│   └── ...
└── README.md
```

## Features in Detail

### User Authentication
- Secure signup and login
- JWT-based authentication
- Protected routes

### Chat Interface
- Real-time message updates
- Chat history persistence
- Message typing indicators
- Clear conversation option

### AI Integration
- OpenAI GPT integration
- Context-aware responses
- Support for various query types

## API Endpoints

### Auth Routes
- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/auth-status` - Check auth status

### Chat Routes
- `POST /api/v1/chat/new` - Send message to AI
- `GET /api/v1/chat/all-chats` - Get chat history
- `DELETE /api/v1/chat/delete` - Clear chat history

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the GPT API
- Material-UI for the component library
- The MERN stack community for excellent documentation and support
