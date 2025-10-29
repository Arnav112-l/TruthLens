import { useState } from 'react';
import { Upload, Video, AlertTriangle, CheckCircle, PlayCircle, Shield, Eye, Clock, Zap, ExternalLink, FileVideo, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import axios from 'axios';

export default function DeepfakeReports() {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setResult(null);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    
    setAnalyzing(true);
    setProgress(0);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 5;
      });
    }, 150);
    
    // Simulate analysis
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      
      const isDeepfake = Math.random() > 0.5;
      setResult({
        isDeepfake,
        confidence: Math.floor(Math.random() * 20) + 80,
        indicators: {
          faceInconsistencies: Math.floor(Math.random() * 10) + 5,
          audioMismatch: Math.floor(Math.random() * 15) + 10,
          temporalAnomalies: Math.floor(Math.random() * 12) + 8,
        },
        recommendation: isDeepfake 
          ? 'This video shows signs of manipulation. Report to authorities.' 
          : 'No significant signs of manipulation detected.',
        analysisTime: (Math.random() * 2 + 1).toFixed(2)
      });
      setAnalyzing(false);
      setProgress(0);
    }, 3000);
  };

  const handleReportToGovernment = () => {
    window.open('https://cybercrime.gov.in/Webform/Accept.aspx', '_blank');
  };

  const timelineData = [
    { month: 'May', reports: 18 },
    { month: 'Jun', reports: 23 },
    { month: 'Jul', reports: 19 },
    { month: 'Aug', reports: 31 },
    { month: 'Sep', reports: 28 },
    { month: 'Oct', reports: 34 },
  ];

  const recentReports = [
    { 
      id: '#DF-1024', 
      type: 'Political Speech', 
      status: 'Confirmed Deepfake', 
      confidence: 94, 
      reportedBy: 'User @truth_seeker',
      date: '2025-10-28',
      action: 'Reported to authorities'
    },
    { 
      id: '#DF-1023', 
      type: 'Celebrity Video', 
      status: 'Under Review', 
      confidence: 78, 
      reportedBy: 'AI Detection',
      date: '2025-10-27',
      action: 'Investigating'
    },
    { 
      id: '#DF-1022', 
      type: 'News Anchor', 
      status: 'Authentic', 
      confidence: 97, 
      reportedBy: 'User @media_watch',
      date: '2025-10-27',
      action: 'Case closed'
    },
    { 
      id: '#DF-1021', 
      type: 'Corporate CEO', 
      status: 'Confirmed Deepfake', 
      confidence: 91, 
      reportedBy: 'AI Detection',
      date: '2025-10-26',
      action: 'Reported to authorities'
    },
  ];

  const educationalVideos = [
    { 
      title: 'How to Spot Deepfakes', 
      videoId: 'gLoI9hAX9dw', // MIT Media Lab - How to detect deepfakes
      channel: 'MIT Media Lab',
      duration: '5:30', 
      verified: true 
    },
    { 
      title: 'Understanding AI-Generated Media', 
      videoId: 'DWK_iYBl8cA', // Vox - Deepfakes explained
      channel: 'Vox',
      duration: '8:15', 
      verified: true 
    },
    { 
      title: 'Digital Literacy & Media Manipulation', 
      videoId: 'c_j82432fCc', // TED-Ed - Deepfakes
      channel: 'TED-Ed',
      duration: '6:45', 
      verified: true 
    },
    { 
      title: 'Fighting Deepfakes with AI', 
      videoId: 'wFKUv2Dz7-Q', // WSJ - Deepfake detection
      channel: 'Wall Street Journal',
      duration: '4:20', 
      verified: true 
    },
  ];

  const stats = [
    { label: 'Total Analyzed', value: '2,547', icon: FileVideo, color: 'from-blue-500 to-blue-600', change: '+12%' },
    { label: 'Deepfakes Found', value: '421', icon: AlertTriangle, color: 'from-red-500 to-red-600', change: '+8%' },
    { label: 'Authentic Videos', value: '2,126', icon: CheckCircle, color: 'from-green-500 to-green-600', change: '+15%' },
    { label: 'Avg Analysis Time', value: '2.4s', icon: Zap, color: 'from-amber-500 to-amber-600', change: '-5%' },
  ];

  const COLORS = ['#ef4444', '#22c55e', '#f59e0b'];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="space-y-2 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">Deepfake Detection</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">AI-powered video analysis to detect manipulated content</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 animate-slide-up">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 opacity-80" />
              <span className="text-xs sm:text-sm font-semibold bg-white/20 px-2 py-1 rounded-full">{stat.change}</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
            <p className="text-xs sm:text-sm opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Upload and Analysis Tool */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-100">
          <Upload className="w-6 h-6 text-amber-600" />
          Upload Video for AI Analysis
        </h2>
        
        <div 
          className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center transition-all duration-300 ${
            dragActive 
              ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 scale-105' 
              : 'border-gray-300 dark:border-gray-600 hover:border-amber-400 dark:hover:border-amber-500'
          } ${file ? 'bg-green-50 dark:bg-green-900/20 border-green-400' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            accept="video/*"
            onChange={handleFileChange}
            className="hidden" 
            id="video-upload"
          />
          <label htmlFor="video-upload" className="cursor-pointer block">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all ${
              file ? 'bg-green-500 animate-bounce-subtle' : 'bg-gray-100 dark:bg-gray-700'
            }`}>
              {file ? (
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              ) : (
                <Video className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
              )}
            </div>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
              {file ? `✓ ${file.name}` : 'Click to upload or drag and drop'}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {file ? 'File ready for analysis' : 'MP4, AVI, MOV up to 100MB'}
            </p>
          </label>
        </div>

        {file && (
          <button 
            onClick={handleAnalyze}
            disabled={analyzing}
            className="mt-4 w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 sm:py-4 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {analyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Analyzing with AI... {progress}%
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Analyze Video with AI
              </>
            )}
          </button>
        )}

        {analyzing && (
          <div className="mt-6 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600"></div>
                <Zap className="w-6 h-6 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg mb-1">AI Analysis in Progress...</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Scanning for face inconsistencies, audio mismatches, and temporal anomalies
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-300 animate-pulse"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {result && (
          <div className={`mt-6 p-4 sm:p-6 rounded-xl border-2 animate-scale-in ${
            result.isDeepfake 
              ? 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-500' 
              : 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-500'
          }`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className={`p-3 rounded-xl ${result.isDeepfake ? 'bg-red-500' : 'bg-green-500'} animate-bounce-subtle`}>
                  {result.isDeepfake ? (
                    <AlertTriangle className="w-8 h-8 text-white" />
                  ) : (
                    <CheckCircle className="w-8 h-8 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                    {result.isDeepfake ? '⚠️ Deepfake Detected' : '✅ Authentic Video'}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{result.recommendation}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Analysis time: {result.analysisTime}s
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      AI Model: GPT-Vision v3
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg min-w-[120px]">
                <div className={`text-4xl sm:text-5xl font-bold ${result.isDeepfake ? 'text-red-600' : 'text-green-600'}`}>
                  {result.confidence}%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">Confidence</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-500 mb-1">{result.indicators.faceInconsistencies}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Face Inconsistencies</div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: `${result.indicators.faceInconsistencies * 5}%` }}></div>
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-500 mb-1">{result.indicators.audioMismatch}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Audio Mismatches</div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${result.indicators.audioMismatch * 4}%` }}></div>
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-600 dark:text-yellow-500 mb-1">{result.indicators.temporalAnomalies}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Temporal Anomalies</div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${result.indicators.temporalAnomalies * 6}%` }}></div>
                </div>
              </div>
            </div>

            {result.isDeepfake && (
              <div className="space-y-3">
                <div className="bg-red-100 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-800 rounded-xl p-4 animate-pulse-slow">
                  <p className="text-sm sm:text-base font-semibold text-red-900 dark:text-red-300 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    This content has been flagged as potentially manipulated
                  </p>
                </div>
                <button 
                  onClick={handleReportToGovernment}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 sm:py-4 rounded-xl font-bold transition-all hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base animate-glow-pulse"
                >
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                  🚨 Report to Government (Cybercrime Portal)
                  <ExternalLink className="w-5 h-5" />
                </button>
                <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                  This will redirect you to India's official cybercrime reporting portal
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Timeline Chart */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Deepfake Reports Timeline</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="reports" stroke="#f59e0b" strokeWidth={3} name="Reports" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Reports Table */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Recent Deepfake Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Confidence</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Reported By</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono text-sm">{report.id}</td>
                  <td className="py-3 px-4">{report.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === 'Confirmed Deepfake' 
                        ? 'bg-red-100 text-red-800' 
                        : report.status === 'Authentic'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{report.confidence}%</td>
                  <td className="py-3 px-4 text-gray-600">{report.reportedBy}</td>
                  <td className="py-3 px-4 text-gray-600">{report.date}</td>
                  <td className="py-3 px-4 text-gray-600">{report.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Educational Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <PlayCircle className="w-6 h-6 text-amber-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">📺 Verified Educational Content</h2>
        </div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
          Government-verified videos from trusted sources to help you understand and identify deepfakes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {educationalVideos.map((video, index) => (
            <div 
              key={index} 
              className="group border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 cursor-pointer bg-gray-50 dark:bg-gray-700/50"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative w-full h-40 sm:h-48 bg-gradient-to-br from-red-500 to-amber-600 overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <PlayCircle className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>
                {video.verified && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm sm:text-base text-gray-800 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{video.channel}</span>
                  <span className="text-gray-500 dark:text-gray-500">{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Channel: {selectedVideo.channel} • Duration: {selectedVideo.duration}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${selectedVideo.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 font-medium"
              >
                Watch on YouTube
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
