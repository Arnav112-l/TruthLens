# TruthLens Setup Guide

## Quick Start

### 1. Install All Dependencies
```powershell
npm run install-all
```

### 2. Setup Environment
```powershell
cd server
Copy-Item .env.example .env
# Edit .env file with your settings
```

### 3. Start MongoDB
If using local MongoDB:
```powershell
mongod
```

Or use MongoDB Atlas cloud URL in .env

### 4. Run the Application
From root directory:
```powershell
npm run dev
```

This will start:
- Frontend on http://localhost:3000
- Backend on http://localhost:5000

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running
- Check MONGODB_URI in server/.env
- Try: `mongodb://127.0.0.1:27017/truthlens`

### Port Already in Use
Change ports in:
- `server/.env` - PORT variable
- `client/vite.config.js` - server.port

### Module Not Found
Run in both directories:
```powershell
cd client
npm install

cd ..\server
npm install
```

## Available Scripts

### Root Directory
- `npm run dev` - Run both client and server
- `npm run client` - Run frontend only
- `npm run server` - Run backend only
- `npm run install-all` - Install all dependencies

### Client Directory
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server Directory
- `npm run dev` - Start with nodemon (auto-reload)
- `npm start` - Start production server

## Database Setup

The application will automatically create the database and collections on first run. No manual setup required!

## API Keys (Optional)

For full functionality, add these API keys to `server/.env`:

1. **NEWS_API_KEY** - Get from https://newsapi.org/
2. **OPENAI_API_KEY** - Get from https://platform.openai.com/
3. **DEEPFAKE_API_KEY** - Custom deepfake detection API

The app works without these keys but with simulated data.

## Need Help?

Check the main README.md for detailed documentation.
