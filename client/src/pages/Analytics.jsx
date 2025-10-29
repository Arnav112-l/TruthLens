import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Globe, Award, BookOpen } from 'lucide-react';

export default function Analytics() {
  // Misinformation by Topic
  const topicData = [
    { name: 'Politics', value: 35, color: '#ef4444' },
    { name: 'Health', value: 28, color: '#f59e0b' },
    { name: 'Technology', value: 15, color: '#10b981' },
    { name: 'Entertainment', value: 12, color: '#3b82f6' },
    { name: 'Sports', value: 10, color: '#8b5cf6' },
  ];

  // Regional Distribution (Heatmap Data)
  const regionalData = [
    { region: 'North America', cases: 245, percentage: 28 },
    { region: 'Europe', cases: 198, percentage: 23 },
    { region: 'Asia', cases: 312, percentage: 36 },
    { region: 'South America', cases: 67, percentage: 8 },
    { region: 'Africa', cases: 43, percentage: 5 },
  ];

  // Engagement Rate Comparison
  const engagementData = [
    { category: 'Politics', real: 12500, fake: 28000 },
    { category: 'Health', real: 9800, fake: 35000 },
    { category: 'Tech', real: 18500, fake: 8200 },
    { category: 'Entertainment', real: 22000, fake: 15600 },
    { category: 'Sports', real: 14200, fake: 6800 },
  ];

  // User Badges
  const badges = [
    { name: 'Truth Seeker', icon: '🔍', earned: true, description: 'Verified 10+ articles' },
    { name: 'Media Aware', icon: '📰', earned: true, description: 'Completed digital literacy course' },
    { name: 'Deepfake Hunter', icon: '🎭', earned: false, description: 'Reported 5 deepfakes' },
    { name: 'Fact Champion', icon: '🏆', earned: true, description: '95%+ accuracy in quizzes' },
    { name: 'Community Guardian', icon: '🛡️', earned: false, description: 'Helped 50+ users' },
    { name: 'Digital Sentinel', icon: '⚔️', earned: false, description: '100 days active' },
  ];

  // Awareness Courses
  const courses = [
    { title: 'Introduction to Digital Literacy', progress: 100, duration: '2 hours', completed: true },
    { title: 'Identifying Fake News', progress: 75, duration: '1.5 hours', completed: false },
    { title: 'Deepfake Detection Basics', progress: 40, duration: '3 hours', completed: false },
    { title: 'Social Media Verification', progress: 0, duration: '2.5 hours', completed: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Analytics & Insights</h1>
        <p className="text-gray-600 mt-2">Comprehensive analysis of misinformation trends and user awareness</p>
      </div>

      {/* Topic Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Misinformation by Topic</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={topicData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {topicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {topicData.map((topic, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: topic.color }}></div>
                <span className="text-sm">{topic.name}: {topic.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Heatmap */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Most Affected Regions
          </h2>
          <div className="space-y-4">
            {regionalData.map((region, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{region.region}</span>
                  <span className="text-gray-600">{region.cases} cases ({region.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-red-500 h-3 rounded-full transition-all"
                    style={{ width: `${region.percentage * 2.5}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Rate Comparison */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Real vs Fake News Engagement Rate</h2>
        <p className="text-gray-600 mb-4">Comparing social media engagement for authentic vs fake content</p>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="real" fill="#10b981" name="Real News Engagement" />
            <Bar dataKey="fake" fill="#ef4444" name="Fake News Engagement" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* User Awareness Section */}
      <div className="card bg-gradient-to-br from-primary-50 to-purple-50">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <BookOpen className="w-7 h-7" />
          Digital Literacy Training
        </h2>
        <p className="text-gray-600 mb-6">Build your skills and earn badges as you learn</p>

        {/* Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800">{course.title}</h3>
                {course.completed && (
                  <span className="text-green-600 text-xl">✓</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-3">Duration: {course.duration}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className={`h-2 rounded-full ${course.completed ? 'bg-green-500' : 'bg-primary-600'}`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{course.progress}% complete</span>
                <button className="text-sm btn-primary py-1 px-3">
                  {course.progress === 0 ? 'Start' : course.completed ? 'Review' : 'Continue'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Badge System */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Your Badges
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg text-center transition-all ${
                  badge.earned 
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg transform hover:scale-105' 
                    : 'bg-gray-200 opacity-50'
                }`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h4 className={`font-semibold text-sm ${badge.earned ? 'text-white' : 'text-gray-600'}`}>
                  {badge.name}
                </h4>
                <p className={`text-xs mt-1 ${badge.earned ? 'text-yellow-100' : 'text-gray-500'}`}>
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gamified Quiz Section */}
        <div className="mt-6 bg-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">🎯 Take the Digital Literacy Quiz</h3>
          <p className="text-gray-600 mb-4">Test your knowledge and earn points!</p>
          <div className="flex gap-4">
            <button className="btn-primary">Start Quiz</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              View Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
