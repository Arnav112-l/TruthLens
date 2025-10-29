import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  awarenessScore: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  badges: [{
    name: String,
    icon: String,
    earned: Boolean,
    earnedDate: Date,
  }],
  coursesCompleted: [{
    title: String,
    progress: Number,
    completedDate: Date,
  }],
  verificationsCount: {
    type: Number,
    default: 0,
  },
  reportsSubmitted: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('User', userSchema);
