import express from 'express';
import News from '../models/News.js';
import Deepfake from '../models/Deepfake.js';
import User from '../models/User.js';

const router = express.Router();

// Get dashboard statistics
router.get('/dashboard', async (req, res) => {
  try {
    const verifiedNews = await News.countDocuments({ status: 'verified' });
    const fakeNews = await News.countDocuments({ status: 'fake' });
    const deepfakes = await Deepfake.countDocuments({ isDeepfake: true });
    const avgAwarenessScore = await User.aggregate([
      { $group: { _id: null, avgScore: { $avg: '$awarenessScore' } } },
    ]);

    res.json({
      verifiedNews,
      fakeNews,
      deepfakes,
      awarenessScore: avgAwarenessScore[0]?.avgScore || 87,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard stats' });
  }
});

// Get topic distribution
router.get('/topics', async (req, res) => {
  try {
    const topicData = await News.aggregate([
      { $match: { status: 'fake' } },
      { $group: { _id: '$topic', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.json(topicData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch topic data' });
  }
});

// Get regional data
router.get('/regions', async (req, res) => {
  try {
    // Mock regional data (replace with actual geolocation data)
    const regionalData = [
      { region: 'North America', cases: 245, percentage: 28 },
      { region: 'Europe', cases: 198, percentage: 23 },
      { region: 'Asia', cases: 312, percentage: 36 },
      { region: 'South America', cases: 67, percentage: 8 },
      { region: 'Africa', cases: 43, percentage: 5 },
    ];

    res.json(regionalData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch regional data' });
  }
});

// Get weekly trends
router.get('/trends', async (req, res) => {
  try {
    const trends = await News.aggregate([
      {
        $group: {
          _id: {
            date: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
            status: '$status',
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.date': 1 } },
      { $limit: 7 },
    ]);

    res.json(trends);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trends' });
  }
});

export default router;
