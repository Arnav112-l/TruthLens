import mongoose from 'mongoose';
import dotenv from 'dotenv';
import News from './models/News.js';
import Deepfake from './models/Deepfake.js';
import User from './models/User.js';
import UserReport from './models/UserReport.js';

dotenv.config();

// Sample data - More realistic examples
const sampleNews = [
  {
    url: 'https://bbc.com/news/climate-policy-2025',
    headline: 'New Climate Policy Announced by International Summit',
    content: 'Major nations agree on carbon reduction targets...',
    source: 'BBC News',
    status: 'verified',
    confidence: 98,
    verifiedBy: 'AI + Expert',
    indicators: {
      positive: ['Reputable source', 'Multiple corroborations', 'Official statements'],
      negative: []
    },
    topic: 'Politics',
  },
  {
    url: 'https://fake-blog.net/miracle-cure',
    headline: 'Miracle Cure for All Diseases Discovered by Local Doctor',
    content: 'A revolutionary treatment that cures everything...',
    source: 'Unknown Blog',
    status: 'fake',
    confidence: 94,
    verifiedBy: 'AI',
    indicators: {
      positive: [],
      negative: ['Unverified source', 'Sensational claims', 'No scientific evidence']
    },
    topic: 'Health',
  },
  {
    url: 'https://reuters.com/tech/ai-breakthrough',
    headline: 'Major AI Breakthrough Announced by Tech Giant',
    content: 'Revolutionary AI model outperforms previous benchmarks...',
    source: 'Reuters',
    status: 'verified',
    confidence: 97,
    verifiedBy: 'AI + Expert',
    indicators: {
      positive: ['Trusted source', 'Technical documentation', 'Peer reviewed'],
      negative: []
    },
    topic: 'Technology',
  },
  {
    url: 'https://theguardian.com/sports/world-cup-final',
    headline: 'World Cup Final: Historic Victory Celebrated Worldwide',
    content: 'Millions celebrate as underdog team wins championship...',
    source: 'The Guardian',
    status: 'verified',
    confidence: 99,
    verifiedBy: 'Govt Verified',
    indicators: {
      positive: ['Live coverage', 'Multiple sources', 'Photo evidence'],
      negative: []
    },
    topic: 'Sports',
  },
  {
    url: 'https://sketchy-news.info/celebrity-scandal',
    headline: 'Celebrity Caught in Shocking Scandal - EXCLUSIVE!',
    content: 'Anonymous sources claim shocking behavior...',
    source: 'SketchyNews',
    status: 'fake',
    confidence: 91,
    verifiedBy: 'AI',
    indicators: {
      positive: [],
      negative: ['Anonymous sources', 'Clickbait headline', 'No credible evidence']
    },
    topic: 'Entertainment',
  },
  {
    url: 'https://who.int/health-advisory-2025',
    headline: 'WHO Issues New Health Guidelines for 2025',
    content: 'World Health Organization updates recommendations...',
    source: 'WHO Official',
    status: 'verified',
    confidence: 100,
    verifiedBy: 'Govt Verified',
    indicators: {
      positive: ['Official source', 'Peer reviewed', 'Expert consensus'],
      negative: []
    },
    topic: 'Health',
  },
  {
    url: 'https://viral-stories.biz/election-fraud',
    headline: 'BREAKING: Massive Election Fraud Discovered!',
    content: 'Shocking evidence reveals widespread corruption...',
    source: 'Viral Stories',
    status: 'fake',
    confidence: 96,
    verifiedBy: 'AI + Expert',
    indicators: {
      positive: [],
      negative: ['No credible sources', 'Conspiracy theory', 'Debunked by fact-checkers']
    },
    topic: 'Politics',
  },
  {
    url: 'https://techcrunch.com/startup-funding',
    headline: 'Tech Startup Raises $500M in Series C Funding',
    content: 'AI company secures major investment round...',
    source: 'TechCrunch',
    status: 'verified',
    confidence: 95,
    verifiedBy: 'AI + Expert',
    indicators: {
      positive: ['Verified investors', 'Official announcement', 'Industry sources'],
      negative: []
    },
    topic: 'Technology',
  },
];

const sampleDeepfakes = [
  {
    videoUrl: 'https://example.com/videos/deepfake1.mp4',
    fileName: 'political-speech.mp4',
    type: 'Political Speech',
    status: 'Confirmed Deepfake',
    confidence: 92,
    indicators: {
      faceInconsistencies: 15,
      audioMismatch: 12,
      temporalAnomalies: 8,
    },
    isDeepfake: true,
    reportedBy: 'AI Detection System',
    action: 'Reported to authorities',
  },
  {
    videoUrl: 'https://example.com/videos/authentic1.mp4',
    fileName: 'press-conference.mp4',
    type: 'News Anchor',
    status: 'Authentic',
    confidence: 99,
    indicators: {
      faceInconsistencies: 1,
      audioMismatch: 0,
      temporalAnomalies: 2,
    },
    isDeepfake: false,
    reportedBy: 'Community Report',
    action: 'Verified authentic',
  },
  {
    videoUrl: 'https://example.com/videos/celebrity-deepfake.mp4',
    fileName: 'celebrity-endorsement.mp4',
    type: 'Celebrity Video',
    status: 'Confirmed Deepfake',
    confidence: 88,
    indicators: {
      faceInconsistencies: 18,
      audioMismatch: 7,
      temporalAnomalies: 11,
    },
    isDeepfake: true,
    reportedBy: 'Expert Analysis',
    action: 'Content removed',
  },
  {
    videoUrl: 'https://example.com/videos/news-anchor.mp4',
    fileName: 'breaking-news.mp4',
    type: 'News Anchor',
    status: 'Under Review',
    confidence: 65,
    indicators: {
      faceInconsistencies: 5,
      audioMismatch: 8,
      temporalAnomalies: 4,
    },
    isDeepfake: false,
    reportedBy: 'User Report',
    action: 'Pending investigation',
  },
  {
    videoUrl: 'https://example.com/videos/concert-footage.mp4',
    fileName: 'live-performance.mp4',
    type: 'Celebrity Video',
    status: 'Authentic',
    confidence: 97,
    indicators: {
      faceInconsistencies: 0,
      audioMismatch: 2,
      temporalAnomalies: 1,
    },
    isDeepfake: false,
    reportedBy: 'Official Source',
    action: 'Verified authentic',
  },
];

const sampleUsers = [
  {
    name: 'Arnav Singh',
    email: 'arnav@truthlens.com',
    password: 'hashed_password_here', // In production, use bcrypt
    awarenessScore: 87,
    badges: [
      { name: 'Truth Seeker', icon: '🔍', earned: true, earnedDate: new Date() },
      { name: 'Media Aware', icon: '📰', earned: true, earnedDate: new Date() },
    ],
    coursesCompleted: [
      { title: 'Introduction to Digital Literacy', progress: 100, completedDate: new Date() },
    ],
    verificationsCount: 25,
    reportsSubmitted: 8,
  },
];

const sampleUserReports = [
  {
    reportId: '#UR-1001',
    type: 'Fake News',
    content: 'Suspicious article about election fraud',
    url: 'https://suspicious-site.com/election-fraud',
    reporter: 'User @truth_seeker',
    status: 'Under Investigation',
    priority: 'High',
    action: 'Pending review',
  },
  {
    reportId: '#UR-1002',
    type: 'Deepfake Video',
    content: 'Manipulated video of government official',
    url: 'https://video-site.com/v/abc123',
    reporter: 'User @media_watch',
    status: 'Reviewed - Confirmed Fake',
    priority: 'Critical',
    action: 'Reported to authorities',
  },
];

// Seed function
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/truthlens');
    console.log('✅ Connected to MongoDB');

    // Clear existing data (optional - comment out if you want to keep existing data)
    await News.deleteMany({});
    await Deepfake.deleteMany({});
    await User.deleteMany({});
    await UserReport.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert sample data
    await News.insertMany(sampleNews);
    console.log('✅ Inserted sample news articles');

    await Deepfake.insertMany(sampleDeepfakes);
    console.log('✅ Inserted sample deepfake reports');

    await User.insertMany(sampleUsers);
    console.log('✅ Inserted sample users');

    await UserReport.insertMany(sampleUserReports);
    console.log('✅ Inserted sample user reports');

    console.log('\n🎉 Database seeded successfully!');
    console.log('\nSample Data Summary:');
    console.log(`  - News Articles: ${sampleNews.length}`);
    console.log(`  - Deepfake Reports: ${sampleDeepfakes.length}`);
    console.log(`  - Users: ${sampleUsers.length}`);
    console.log(`  - User Reports: ${sampleUserReports.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();
