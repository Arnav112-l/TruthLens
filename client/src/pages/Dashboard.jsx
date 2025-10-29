import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { CheckCircle, AlertTriangle, Drama, TrendingUp } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function Dashboard() {
  const [stats, setStats] = useState({
    verifiedNews: 1247,
    fakeNews: 89,
    deepfakes: 34,
    awarenessScore: 87
  });

  // Weekly data for Real vs Fake articles
  const weeklyData = [
    { day: 'Mon', real: 180, fake: 12 },
    { day: 'Tue', real: 195, fake: 15 },
    { day: 'Wed', real: 170, fake: 8 },
    { day: 'Thu', real: 210, fake: 18 },
    { day: 'Fri', real: 192, fake: 14 },
    { day: 'Sat', real: 145, fake: 10 },
    { day: 'Sun', real: 155, fake: 12 },
  ];

  // Recent verifications
  const recentVerifications = [
    { headline: 'New Climate Policy Announced', status: 'Verified', source: 'BBC News', verifiedBy: 'AI + Expert', date: '2025-10-28' },
    { headline: 'Celebrity Scandal Breaking News', status: 'Fake', source: 'Unknown Blog', verifiedBy: 'AI Model', date: '2025-10-28' },
    { headline: 'Tech Giant Releases New Product', status: 'Verified', source: 'Reuters', verifiedBy: 'AI + Expert', date: '2025-10-27' },
    { headline: 'Miracle Cure Discovery', status: 'Fake', source: 'Social Media', verifiedBy: 'AI Model', date: '2025-10-27' },
    { headline: 'Government Economic Report', status: 'Verified', source: 'Official Portal', verifiedBy: 'Govt Verified', date: '2025-10-26' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Dashboard Overview</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Real-time insights on misinformation and digital literacy</p>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={CheckCircle}
          title="Verified News Today"
          value={stats.verifiedNews}
          change="+12.5%"
          trend="up"
          color="success"
        />
        <StatCard
          icon={AlertTriangle}
          title="Fake News Detected"
          value={stats.fakeNews}
          change="-8.3%"
          trend="down"
          color="danger"
        />
        <StatCard
          icon={Drama}
          title="Deepfakes Reported"
          value={stats.deepfakes}
          change="+5.2%"
          trend="up"
          color="warning"
        />
        <StatCard
          icon={TrendingUp}
          title="User Awareness Score"
          value={`${stats.awarenessScore}%`}
          change="+3.1%"
          trend="up"
          color="primary"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real vs Fake Articles Chart */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Real vs Fake Articles This Week</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="real" fill="#10b981" name="Real Articles" />
              <Bar dataKey="fake" fill="#ef4444" name="Fake Articles" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Awareness Score Trend */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">User Awareness Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { month: 'Jun', score: 72 },
              { month: 'Jul', score: 75 },
              { month: 'Aug', score: 79 },
              { month: 'Sep', score: 82 },
              { month: 'Oct', score: 87 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#0ea5e9" strokeWidth={3} name="Awareness Score" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Verifications Table */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Recent Verifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Headline</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Source</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Verified By</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentVerifications.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{item.headline}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Verified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{item.source}</td>
                  <td className="py-3 px-4 text-gray-600">{item.verifiedBy}</td>
                  <td className="py-3 px-4 text-gray-600">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trusted Sources Widget */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Trusted Sources Reliability Score</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: 'BBC News', score: 98 },
            { name: 'Reuters', score: 97 },
            { name: 'The Guardian', score: 95 },
            { name: 'Associated Press', score: 96 },
            { name: 'NPR', score: 94 },
          ].map((source, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-primary-600">{source.score}</div>
              <div className="text-sm text-gray-600 mt-1">{source.name}</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full" 
                  style={{ width: `${source.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
