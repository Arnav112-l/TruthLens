import mongoose from 'mongoose';

const deepfakeSchema = new mongoose.Schema({
  videoUrl: String,
  fileName: String,
  type: {
    type: String,
    enum: ['Political Speech', 'Celebrity Video', 'News Anchor', 'Corporate CEO', 'Other'],
  },
  status: {
    type: String,
    enum: ['Confirmed Deepfake', 'Authentic', 'Under Review'],
    default: 'Under Review',
  },
  confidence: {
    type: Number,
    min: 0,
    max: 100,
  },
  indicators: {
    faceInconsistencies: Number,
    audioMismatch: Number,
    temporalAnomalies: Number,
  },
  isDeepfake: Boolean,
  reportedBy: String,
  action: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Deepfake', deepfakeSchema);
