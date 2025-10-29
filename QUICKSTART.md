# 🚀 TruthLens - Quick Start Guide

## What You've Built

A complete **Misinformation Detection Dashboard** with:

✅ Fake News Detection with AI verification
✅ Deepfake Video Analysis
✅ Real-time Analytics & Insights
✅ Digital Literacy Training
✅ Community Reporting System
✅ Trusted Source Verification

---

## 📦 Installation (3 Steps)

### Step 1: Install Dependencies
Open PowerShell in the project root and run:

```powershell
cd truthlens-dashboard
npm run install-all
```

This installs everything for both frontend and backend!

### Step 2: Setup Environment
```powershell
cd server
Copy-Item .env.example .env
```

**Edit `server/.env`** with your MongoDB URL:
```env
MONGODB_URI=mongodb://localhost:27017/truthlens
```

Or use **MongoDB Atlas** (free cloud database):
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Paste in `.env`

### Step 3: Run the App!
```powershell
# Go back to root directory
cd ..

# Start everything at once
npm run dev
```

🎉 **Done!** Open http://localhost:3000

---

## 🌟 Features Tour

### 1️⃣ Dashboard (Home Page)
- **4 KPI Cards**: Verified News, Fake News, Deepfakes, Awareness Score
- **Weekly Chart**: Real vs Fake articles
- **Recent Verifications Table**: Latest checks
- **Trusted Sources**: Top 5 reliable news sources

### 2️⃣ News Verification
- **Paste any news URL** → Get instant verification
- **Confidence Score**: 0-100% accuracy
- **Trust Indicators**: Green flags for legitimate content
- **Red Flags**: Warning signs of fake news
- **Weekly Trends**: Graph of real vs fake
- **Topic Analysis**: Which topics have most fake news

### 3️⃣ Deepfake Detection
- **Upload Video**: Drag & drop MP4/AVI/MOV files
- **AI Analysis**: Checks for:
  - Face inconsistencies
  - Audio mismatches
  - Temporal anomalies
- **Confidence Score**: How sure the AI is
- **Report Button**: Send to government authorities
- **Educational Videos**: Learn to spot deepfakes

### 4️⃣ Analytics
- **Pie Chart**: Misinformation by topic (Politics, Health, etc.)
- **Regional Heatmap**: Most affected areas worldwide
- **Engagement Comparison**: Real vs Fake news reach
- **Digital Literacy Courses**: 4 courses with progress tracking
- **Badge System**: Earn achievements
  - 🔍 Truth Seeker
  - 📰 Media Aware
  - 🎭 Deepfake Hunter
  - 🏆 Fact Champion

### 5️⃣ Verified Sources
- **Curated List**: Top trusted news organizations
- **Reliability Score**: 0-100 rating
- **Verification Method**: How they're verified
- **Article Count**: Number of verified articles

### 6️⃣ User Reports
- **Submit Reports**: Flag suspicious content
- **Community Table**: See all user reports
- **Status Tracking**: Pending, Under Review, Confirmed
- **Priority Levels**: Low, Medium, High, Critical

### 7️⃣ Settings
- **Profile**: Update name and email
- **Notifications**: Email and push preferences
- **Security**: Change password
- **API Keys**: Configure external services

---

## 🎨 Color Scheme

- **Primary Blue**: #0ea5e9 (TruthLens brand color)
- **Success Green**: #10b981 (Verified content)
- **Danger Red**: #ef4444 (Fake news/deepfakes)
- **Warning Yellow**: #f59e0b (Under review)
- **Dark Blue**: #0c4a6e (Sidebar)

---

## 🔧 Customization Ideas

### Change Logo
Edit `client/src/components/Sidebar.jsx` line 26:
```jsx
<Eye className="w-8 h-8" />
{isOpen && <span className="ml-3 text-xl font-bold">YourName</span>}
```

### Add Your Name to Header
Edit `client/src/components/Header.jsx` line 25:
```jsx
<div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
  YI {/* Your Initials */}
</div>
```

### Modify Color Theme
Edit `client/tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#YOUR_COLOR', // Change this
  }
}
```

---

## 🛠️ Tech Stack Details

### Frontend
- **React 18** - UI framework
- **Vite** - Super fast build tool
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Beautiful charts
- **Lucide React** - Icon library
- **React Router** - Page navigation
- **Axios** - API requests

### Backend
- **Node.js + Express** - Server
- **MongoDB + Mongoose** - Database
- **Multer** - File uploads
- **CORS** - Cross-origin requests
- **dotenv** - Environment variables

---

## 📊 Sample Data

The app comes with **mock data** so you can test immediately:
- 5 recent news verifications
- 4 deepfake reports
- 10 trusted sources
- 4 user reports
- Analytics charts

To use **real data**, integrate:
- News API (https://newsapi.org/)
- OpenAI API (for content analysis)
- Custom deepfake detection model

---

## 🚨 Troubleshooting

### "Cannot find module" error
```powershell
cd client
npm install

cd ..\server
npm install
```

### Port 3000 already in use
Change in `client/vite.config.js`:
```javascript
server: { port: 3001 }
```

### MongoDB connection failed
- Install MongoDB: https://www.mongodb.com/try/download/community
- Start it: `mongod`
- Or use MongoDB Atlas (cloud)

### CSS not working
```powershell
cd client
npm install -D tailwindcss postcss autoprefixer
```

---

## 🎯 Demo Scenarios

### Test Fake News Detection
1. Go to **News Verification**
2. Paste: `https://suspicious-site.com/fake-article`
3. Click **Verify**
4. See confidence score and indicators

### Test Deepfake Detection
1. Go to **Deepfake Reports**
2. Upload any video file
3. Wait for AI analysis (simulated)
4. See face inconsistencies, audio mismatch scores

### Earn a Badge
1. Go to **Analytics**
2. Scroll to "Digital Literacy Training"
3. Click "Start" on a course
4. Complete it to earn badges

---

## 📱 Mobile Responsive

The dashboard is **fully responsive**:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px+)
- ✅ Tablet (768px+)
- ✅ Mobile (320px+)

---

## 🔐 Security Features

- Password hashing (ready for bcrypt)
- JWT authentication (structure ready)
- CORS protection enabled
- Input validation on forms
- Secure file upload limits

---

## 🌐 Deployment

### Frontend (Vercel)
```powershell
cd client
npm run build
# Upload dist/ folder to Vercel
```

### Backend (Render/Railway)
```powershell
cd server
# Set NODE_ENV=production
# Set MONGODB_URI to Atlas
npm start
```

---

## 📈 Future Features (Ideas)

- [ ] Real-time notifications
- [ ] Multi-language support
- [ ] Browser extension
- [ ] Mobile app
- [ ] Advanced ML models
- [ ] Blockchain verification
- [ ] Social media integration
- [ ] Fact-checker partnerships

---

## 🎓 Learning Resources

- **React**: https://react.dev/
- **Tailwind**: https://tailwindcss.com/
- **Recharts**: https://recharts.org/
- **Express**: https://expressjs.com/
- **MongoDB**: https://www.mongodb.com/docs/

---

## 💬 Need Help?

1. Check `README.md` for detailed docs
2. Check `SETUP.md` for troubleshooting
3. Review code comments
4. Search for error messages online

---

## 🎉 You're All Set!

Your **TruthLens Dashboard** is ready to fight misinformation!

**Next Steps:**
1. Customize the branding
2. Add real API integrations
3. Deploy to production
4. Share with the world!

**Made with ❤️ for digital literacy and truth**

---

## ⭐ Show Your Support

If you found this helpful:
- Give it a star ⭐
- Share with others
- Contribute improvements
- Use it to make the internet safer!

**Happy Coding! 🚀**
