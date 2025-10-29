# MongoDB Setup Guide

## Error: MongoDB Connection Refused

The error `connect ECONNREFUSED ::1:27017` means MongoDB is not running on your local machine.

## Solution Options

### Option 1: Install MongoDB Locally (Recommended for Production)

1. **Download MongoDB Community Edition**
   - Visit: https://www.mongodb.com/try/download/community
   - Choose Windows version
   - Download and install

2. **Start MongoDB Service**
   ```powershell
   # After installation, start MongoDB service
   net start MongoDB
   ```

3. **Verify Installation**
   ```powershell
   # Check if MongoDB is running
   mongod --version
   ```

### Option 2: Use MongoDB Atlas (Cloud) - EASIEST!

1. **Create Free Account**
   - Visit: https://www.mongodb.com/cloud/atlas/register
   - Sign up for free tier (512MB storage)

2. **Create Cluster**
   - Click "Build a Database"
   - Choose FREE tier
   - Select your region
   - Click "Create"

3. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://username:password@cluster.mongodb.net/truthlens`

4. **Update .env File**
   ```env
   # Replace with your MongoDB Atlas connection string
   MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/truthlens?retryWrites=true&w=majority
   ```

5. **Whitelist Your IP**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)

### Option 3: Use Docker (For Advanced Users)

```powershell
# Pull and run MongoDB container
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Verify it's running
docker ps
```

## Testing Your Connection

After setting up MongoDB, test the connection:

```powershell
# Navigate to server directory
cd "c:\Users\Arnav Singh\Documents\Codes\versel_ai_hack_scaler\tester\truthlens-dashboard\server"

# Run the seed script
node seed.js
```

You should see:
```
✅ Connected to MongoDB
🗑️  Cleared existing data
✅ Inserted sample news articles
✅ Inserted sample deepfake reports
✅ Inserted sample users
✅ Inserted sample user reports
🎉 Database seeded successfully!
```

## Quick Start with MongoDB Atlas (Step by Step)

This is the **fastest way** to get started without installing anything:

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create account (use Google sign-in for speed)
3. Create FREE cluster (M0 Sandbox)
4. Create database user:
   - Username: `truthlens_admin`
   - Password: `yourSecurePassword123` (save this!)
5. Whitelist IP: Click "Allow Access from Anywhere"
6. Get connection string:
   - Click "Connect" → "Connect your application"
   - Copy the string
7. Update `server/.env`:
   ```env
   MONGODB_URI=mongodb+srv://truthlens_admin:yourSecurePassword123@cluster0.xxxxx.mongodb.net/truthlens?retryWrites=true&w=majority
   ```
8. Replace `xxxxx` with your actual cluster ID
9. Run: `npm run dev` from root folder

## Current Status

Your application is currently running **without a database** - it's using mock data in memory. Once you set up MongoDB, all data will persist and be stored in the database.

## Need Help?

If you encounter issues:
1. Check the MongoDB connection string format
2. Ensure your IP is whitelisted (for Atlas)
3. Verify MongoDB service is running (for local install)
4. Check server logs for specific error messages
