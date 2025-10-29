import { MessageSquare, AlertTriangle, CheckCircle, Clock, Send, Shield } from 'lucide-react';

export default function UserReports() {
  const reports = [
    { 
      id: '#UR-1045', 
      type: 'Fake News', 
      content: 'Suspicious article about miracle cure', 
      url: 'suspicious-health-blog.net/cure',
      reporter: 'User @health_aware',
      status: 'Reviewed - Confirmed Fake',
      priority: 'High',
      date: '2025-10-28',
      action: 'Source blacklisted'
    },
    { 
      id: '#UR-1044', 
      type: 'Deepfake Video', 
      content: 'Manipulated political speech video', 
      url: 'video-share-site.com/v/xyz123',
      reporter: 'User @truth_seeker',
      status: 'Under Investigation',
      priority: 'Critical',
      date: '2025-10-27',
      action: 'Pending review'
    },
    { 
      id: '#UR-1043', 
      type: 'Fake News', 
      content: 'False celebrity death announcement', 
      url: 'fake-gossip.info/breaking',
      reporter: 'User @media_watch',
      status: 'Reviewed - Confirmed Fake',
      priority: 'Medium',
      date: '2025-10-27',
      action: 'Reported to platform'
    },
    { 
      id: '#UR-1042', 
      type: 'Misleading Image', 
      content: 'Out of context protest photo', 
      url: 'social-media.com/post/abc456',
      reporter: 'User @fact_checker',
      status: 'Closed - Authentic',
      priority: 'Low',
      date: '2025-10-26',
      action: 'No action needed'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">User Reports</h1>
        <p className="text-gray-600 mt-2">Community-submitted reports of suspicious content</p>
      </div>

      {/* Submit New Report */}
      <div className="card bg-gradient-to-br from-primary-50 to-blue-50">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <MessageSquare className="w-6 h-6" />
          Submit a Report
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Report Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Fake News Article</option>
              <option>Deepfake Video</option>
              <option>Misleading Image</option>
              <option>Suspicious Social Media Post</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Content URL or Link</label>
            <input 
              type="text" 
              placeholder="https://..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea 
              rows="4"
              placeholder="Describe why you think this content is suspicious..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 sm:py-3.5 rounded-xl font-semibold transition-all hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group">
              <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Submit Report
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="sm:w-auto px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-medium transition-all">
              Clear Form
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            🔒 Your report will be reviewed by our verification team within 24 hours
          </p>
        </div>
      </div>

      {/* Reports Table */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Recent Community Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Content</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Reporter</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Priority</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono text-sm">{report.id}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="max-w-xs">
                      <p className="font-medium">{report.content}</p>
                      <p className="text-xs text-gray-500 truncate">{report.url}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{report.reporter}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status.includes('Confirmed Fake')
                        ? 'bg-red-100 text-red-800'
                        : report.status.includes('Investigation')
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.priority === 'Critical'
                        ? 'bg-red-100 text-red-800'
                        : report.priority === 'High'
                        ? 'bg-orange-100 text-orange-800'
                        : report.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {report.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{report.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">1,247</div>
          <div className="text-gray-600">Total Reports</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-yellow-600 mb-2">34</div>
          <div className="text-gray-600">Under Review</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">892</div>
          <div className="text-gray-600">Confirmed Fake</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">321</div>
          <div className="text-gray-600">Authentic</div>
        </div>
      </div>
    </div>
  );
}
