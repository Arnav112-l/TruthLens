# TruthLens Dashboard 🔍

![TruthLens](https://img.shields.io/badge/TruthLens-Misinformation%20Detection-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

## 🎯 Project Overview

**TruthLens** is a comprehensive full-stack dashboard for real-time misinformation detection and digital literacy promotion. Built for the theme of "Misinformation & Digital Literacy," this platform provides:

- ✅ Real-time AI-powered fake news detection
- 🎭 Deepfake video analysis and reporting
- 📊 Visual analytics and trend insights
- 🤝 Trust Index scoring for news sources
- 🎓 Gamified awareness training with badges
- 🌍 Regional misinformation heatmaps

## 🚀 Features

### 1. Dashboard Overview
- **KPI Cards**: Verified News, Fake News Count, Deepfake Reports, User Awareness Score
- **Weekly Trends**: Real vs Fake article detection graphs
- **Recent Verifications Table**: Live feed of verified content
- **Trusted Sources Widget**: Reliability scores for top news organizations

### 2. News Verification
- URL-based article verification
- AI-powered authenticity analysis with confidence scores
- Trust indicators and red flag detection
- Weekly verification trends
- Topic-based fake news distribution

### 3. Deepfake Detection
- Video upload and AI analysis
- Face inconsistency detection
- Audio mismatch identification
- Temporal anomaly scanning
- Government reporting integration
- Educational content library

### 4. Analytics & Insights
- Misinformation by topic (pie charts)
- Regional heatmaps showing affected areas
- Real vs Fake engagement rate comparison
- Interactive data visualizations

### 5. User Awareness Training
- Digital literacy courses with progress tracking
- Badge system (Truth Seeker, Media Aware, etc.)
- Gamified quizzes
- Achievement tracking

### 6. Verified Sources
- Curated list of trusted media organizations
- Reliability scoring (0-100)
- Verification methodology transparency
- Source categorization

### 7. Community Reports
- User-submitted suspicious content
- Priority-based review system
- Status tracking
- Community statistics

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.2 with Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **File Upload**: Multer
- **Environment**: dotenv
- **CORS**: cors middleware

### APIs (Integration Ready)
- News API
- OpenAI Moderation Tools
- Deepfake Detection API
- Custom ML Models

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Step 1: Clone the Repository
```bash
cd truthlens-dashboard
```

### Step 2: Install Dependencies
```bash
# Install root dependencies
npm install

# Install all dependencies (client + server)
npm run install-all
```

### Step 3: Configure Environment Variables

**Server Configuration:**
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/truthlens
NODE_ENV=development

# Add your API keys
NEWS_API_KEY=your_news_api_key
OPENAI_API_KEY=your_openai_api_key
DEEPFAKE_API_KEY=your_deepfake_api_key
```

### Step 4: Start MongoDB
```bash
# If using local MongoDB
mongod
```

Or use MongoDB Atlas (cloud) and update the `MONGODB_URI` in `.env`

### Step 5: Run the Application

**Option A: Run Both (Recommended)**
```bash
# From root directory
npm run dev
```

**Option B: Run Separately**
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

### Step 6: Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api

## 📁 Project Structure

```
truthlens-dashboard/
├── client/                      # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── StatCard.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── NewsVerification.jsx
│   │   │   ├── DeepfakeReports.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── VerifiedSources.jsx
│   │   │   ├── UserReports.jsx
│   │   │   └── Settings.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── server/                      # Node.js Backend
│   ├── models/                 # MongoDB schemas
│   │   ├── News.js
│   │   ├── Deepfake.js
│   │   ├── User.js
│   │   └── UserReport.js
│   ├── routes/                 # API routes
│   │   ├── news.js
│   │   ├── deepfake.js
│   │   ├── analytics.js
│   │   └── user.js
│   ├── uploads/                # Uploaded videos
│   ├── server.js               # Entry point
│   ├── package.json
│   └── .env.example
├── package.json                # Root package
└── README.md
```

## 🔌 API Endpoints

### News Verification
- `POST /api/news/verify` - Verify news article
- `GET /api/news/recent` - Get recent verifications
- `GET /api/news/stats` - Get statistics

### Deepfake Detection
- `POST /api/deepfake/analyze` - Analyze video
- `GET /api/deepfake/recent` - Get recent reports
- `GET /api/deepfake/timeline` - Get timeline data

### Analytics
- `GET /api/analytics/dashboard` - Dashboard stats
- `GET /api/analytics/topics` - Topic distribution
- `GET /api/analytics/regions` - Regional data
- `GET /api/analytics/trends` - Weekly trends

### User Management
- `GET /api/user/profile/:id` - Get user profile
- `PUT /api/user/profile/:id` - Update profile
- `POST /api/user/report` - Submit report
- `GET /api/user/reports` - Get all reports
- `GET /api/user/badges/:userId` - Get user badges

## 🎨 Key Features in Detail

### Fake News Detection
The system uses multiple indicators to verify news authenticity:
- Source credibility checking
- Cross-referencing with trusted databases
- Author verification
- Language analysis for sensationalism
- Citation verification

### Deepfake Analysis
Video analysis includes:
- Facial inconsistency detection
- Audio-visual synchronization checking
- Temporal anomaly identification
- Frame-by-frame analysis
- Metadata verification

### Trust Score Algorithm
Sources are scored based on:
- Historical accuracy
- Editorial standards
- Fact-checking processes
- Transparency
- Community feedback

## 🎓 Digital Literacy Courses
1. Introduction to Digital Literacy
2. Identifying Fake News
3. Deepfake Detection Basics
4. Social Media Verification

## 🏆 Badge System
- 🔍 **Truth Seeker** - Verify 10+ articles
- 📰 **Media Aware** - Complete digital literacy course
- 🎭 **Deepfake Hunter** - Report 5 deepfakes
- 🏆 **Fact Champion** - 95%+ accuracy in quizzes
- 🛡️ **Community Guardian** - Help 50+ users
- ⚔️ **Digital Sentinel** - 100 days active

## 💡 USP (Unique Selling Propositions)

1. **Real-time AI Detection** - Instant verification of news and videos
2. **Crowdsourced Reporting** - Community-driven content moderation
3. **Government Integration** - Direct reporting to authorities
4. **Visual Analytics** - Easy-to-understand data visualization
5. **Gamified Learning** - Engaging digital literacy training
6. **Trust Index** - AI-powered source reliability scoring

## 🚧 Future Enhancements

- [ ] Browser extension for on-the-fly verification
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Advanced ML models (BERT, GPT-based)
- [ ] Blockchain-based verification ledger
- [ ] Integration with fact-checking organizations
- [ ] Real-time social media monitoring
- [ ] API for third-party integration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Built for the Vercel AI Hackathon - Scaler Track

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Made with ❤️ for a more informed and aware digital world**
