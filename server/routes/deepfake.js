import express from 'express';
import multer from 'multer';
import Deepfake from '../models/Deepfake.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Analyze video for deepfakes
router.post('/analyze', upload.single('video'), async (req, res) => {
  try {
    const file = req.file;

    // Simulate AI analysis (replace with actual deepfake detection API)
    const isDeepfake = Math.random() > 0.5;
    const confidence = Math.floor(Math.random() * 20) + 80;

    const deepfakeData = {
      videoUrl: file ? `/uploads/${file.filename}` : '',
      fileName: file ? file.originalname : '',
      type: 'Other',
      status: isDeepfake ? 'Confirmed Deepfake' : 'Authentic',
      confidence,
      indicators: {
        faceInconsistencies: Math.floor(Math.random() * 10) + 5,
        audioMismatch: Math.floor(Math.random() * 15) + 10,
        temporalAnomalies: Math.floor(Math.random() * 12) + 8,
      },
      isDeepfake,
      reportedBy: 'AI Detection',
      action: isDeepfake ? 'Reported to authorities' : 'No action needed',
    };

    const deepfake = new Deepfake(deepfakeData);
    await deepfake.save();

    res.json({
      isDeepfake,
      confidence,
      indicators: deepfakeData.indicators,
      recommendation: isDeepfake
        ? 'This video shows signs of manipulation. Report to authorities.'
        : 'No significant signs of manipulation detected.',
    });
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ error: 'Analysis failed' });
  }
});

// Get recent deepfake reports
router.get('/recent', async (req, res) => {
  try {
    const reports = await Deepfake.find()
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reports' });
  }
});

// Get timeline data
router.get('/timeline', async (req, res) => {
  try {
    // Aggregate deepfake reports by month
    const timeline = await Deepfake.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } },
    ]);

    res.json(timeline);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch timeline' });
  }
});

export default router;
