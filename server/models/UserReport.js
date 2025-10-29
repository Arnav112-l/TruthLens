import mongoose from 'mongoose';

const userReportSchema = new mongoose.Schema({
  reportId: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ['Fake News', 'Deepfake Video', 'Misleading Image', 'Suspicious Social Media Post', 'Other'],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  url: String,
  reporter: String,
  status: {
    type: String,
    enum: ['Pending', 'Under Investigation', 'Reviewed - Confirmed Fake', 'Closed - Authentic'],
    default: 'Pending',
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    default: 'Medium',
  },
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

export default mongoose.model('UserReport', userReportSchema);
