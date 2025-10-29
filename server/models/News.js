import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  content: String,
  source: String,
  status: {
    type: String,
    enum: ['verified', 'fake', 'pending'],
    default: 'pending',
  },
  confidence: {
    type: Number,
    min: 0,
    max: 100,
  },
  verifiedBy: {
    type: String,
    enum: ['AI', 'Expert', 'AI + Expert', 'Community', 'Govt Verified'],
  },
  indicators: {
    positive: [String],
    negative: [String],
  },
  topic: {
    type: String,
    enum: ['Politics', 'Health', 'Technology', 'Entertainment', 'Sports', 'Other'],
  },
  reportedBy: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('News', newsSchema);
