# TruthLens Dashboard - Vercel Deployment Guide

## 🚀 Deploy to Vercel

### Prerequisites
1. GitHub account (already done ✓)
2. Vercel account (sign up at https://vercel.com)
3. MongoDB Atlas account for production database

### Quick Deploy Steps

#### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose `Arnav112-l/12-Hr-Hackathon`

3. **Configure Project**
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `cd client && npm install && npm run build`
   - Output Directory: `client/dist`

4. **Environment Variables**
   Add these in Vercel Dashboard:
   ```
   MONGODB_URI=mongodb+srv://your-mongodb-atlas-uri
   JWT_SECRET=your-secret-key-change-in-production
   OPENAI_API_KEY=sk-proj-your-key
   NEWS_API_KEY=your-news-api-key
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at: `https://your-project.vercel.app`

#### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd "c:\Users\Arnav Singh\Documents\Codes\versel_ai_hack_scaler\tester\truthlens-dashboard"
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - What's your project's name? truthlens-dashboard
# - In which directory is your code located? ./
# - Want to override settings? Yes
# - Build Command: cd client && npm install && npm run build
# - Output Directory: client/dist
# - Development Command: npm run dev

# For production deployment
vercel --prod
```

### MongoDB Atlas Setup (Required for Production)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free tier

2. **Create Cluster**
   - Create a free M0 cluster
   - Choose a region close to your users

3. **Create Database User**
   - Database Access → Add New Database User
   - Choose password authentication
   - Save username and password

4. **Whitelist IP**
   - Network Access → Add IP Address
   - Allow access from anywhere: `0.0.0.0/0` (for Vercel)

5. **Get Connection String**
   - Clusters → Connect → Connect your application
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Add database name: `mongodb+srv://user:password@cluster.mongodb.net/truthlens`

### Important Notes

⚠️ **Security:**
- Never commit `.env` file to Git
- Use Vercel environment variables for secrets
- Rotate API keys regularly

⚠️ **CORS:**
- Update server CORS settings to allow Vercel domain
- In `server/server.js`, update CORS origin

⚠️ **API Routes:**
- Backend will be at: `https://your-app.vercel.app/api/`
- Update frontend API calls if needed

### Post-Deployment Checklist

- ✅ Test authentication (login/signup)
- ✅ Test news verification
- ✅ Test deepfake detection
- ✅ Check MongoDB connection
- ✅ Verify all API endpoints
- ✅ Test dark mode
- ✅ Check responsive design on mobile

### Troubleshooting

**Build Fails:**
- Check Node.js version (use Node 18.x)
- Verify all dependencies are installed
- Check build logs in Vercel dashboard

**Database Connection Issues:**
- Verify MongoDB connection string
- Check IP whitelist settings
- Ensure database user has correct permissions

**API Not Working:**
- Check environment variables
- Verify API routes configuration
- Check server logs in Vercel

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS settings as instructed
4. Wait for SSL certificate provisioning

### Monitoring

- View logs: Vercel Dashboard → Your Project → Deployments → View Logs
- Monitor performance: Vercel Analytics
- Error tracking: Integrate Sentry (optional)

## 📊 Expected Deployment Time

- Initial deployment: 3-5 minutes
- Subsequent deployments: 1-2 minutes (automatic on git push)

## 🎉 Your App Will Be Live!

Once deployed, share your app:
- Production URL: `https://your-project.vercel.app`
- GitHub Repo: `https://github.com/Arnav112-l/12-Hr-Hackathon`

---

Need help? Check Vercel docs: https://vercel.com/docs
