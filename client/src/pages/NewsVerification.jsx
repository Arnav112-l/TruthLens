import { useState } from 'react';
import { Link2, Search, TrendingUp, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

export default function NewsVerification() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
    if (!url) return;
    
    setLoading(true);
    try {
      const response = await axios.post('/api/news/verify', { url });
      setResult(response.data);
    } catch (error) {
      console.error('Verification failed:', error);
      setResult({ 
        status: 'error', 
        message: 'Verification failed. Please try again.',
        confidence: 0 
      });
    }
    setLoading(false);
  };

  const weeklyTrend = [
    { date: 'Oct 22', real: 145, fake: 12 },
    { date: 'Oct 23', real: 158, fake: 15 },
    { date: 'Oct 24', real: 132, fake: 9 },
    { date: 'Oct 25', real: 167, fake: 18 },
    { date: 'Oct 26', real: 154, fake: 11 },
    { date: 'Oct 27', real: 171, fake: 14 },
    { date: 'Oct 28', real: 163, fake: 10 },
  ];

  const topicDistribution = [
    { topic: 'Politics', fake: 28, real: 145 },
    { topic: 'Health', fake: 22, real: 98 },
    { topic: 'Technology', fake: 12, real: 156 },
    { topic: 'Entertainment', fake: 15, real: 87 },
    { topic: 'Sports', fake: 8, real: 112 },
  ];

  const recentChecks = [
    { url: 'news-site.com/article-123', status: 'Verified', confidence: 95, timestamp: '2 mins ago' },
    { url: 'suspicious-blog.net/breaking', status: 'Fake', confidence: 88, timestamp: '5 mins ago' },
    { url: 'trusted-media.com/report-456', status: 'Verified', confidence: 97, timestamp: '12 mins ago' },
    { url: 'random-site.info/viral-news', status: 'Fake', confidence: 92, timestamp: '18 mins ago' },
    { url: 'official-portal.gov/announcement', status: 'Verified', confidence: 99, timestamp: '25 mins ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">News Verification</h1>
        <p className="text-gray-600 mt-2">Verify news articles and detect misinformation in real-time</p>
      </div>

      {/* Verification Tool */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Search className="w-6 h-6" />
          Verify News Article
        </h2>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter news article URL or paste headline..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button 
            onClick={handleVerify}
            disabled={loading}
            className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>

        {result && (
          <div className={`mt-6 p-6 rounded-lg border-2 ${
            result.status === 'verified' 
              ? 'bg-green-50 border-green-500' 
              : result.status === 'fake'
              ? 'bg-red-50 border-red-500'
              : 'bg-yellow-50 border-yellow-500'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  {result.status === 'verified' ? '✅ Verified News' : result.status === 'fake' ? '🚨 Fake News Detected' : '⚠️ Unable to Verify'}
                </h3>
                <p className="text-gray-700 mt-2">{result.message || 'Analysis complete'}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{result.confidence}%</div>
                <div className="text-sm text-gray-600">Confidence</div>
              </div>
            </div>
            
            {result.indicators && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Trust Indicators:</h4>
                  <ul className="space-y-1">
                    {result.indicators.positive?.map((item, i) => (
                      <li key={i} className="text-green-700">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Red Flags:</h4>
                  <ul className="space-y-1">
                    {result.indicators.negative?.map((item, i) => (
                      <li key={i} className="text-red-700">✗ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Weekly Verification Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="real" stroke="#10b981" strokeWidth={2} name="Real News" />
              <Line type="monotone" dataKey="fake" stroke="#ef4444" strokeWidth={2} name="Fake News" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Fake News by Topic</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topicDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="topic" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="real" fill="#10b981" name="Real" />
              <Bar dataKey="fake" fill="#ef4444" name="Fake" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Checks Table */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Recent Verifications</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">URL/Source</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Confidence</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentChecks.map((check, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">{check.url}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      check.status === 'Verified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {check.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${check.status === 'Verified' ? 'bg-green-600' : 'bg-red-600'}`}
                          style={{ width: `${check.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{check.confidence}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{check.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
