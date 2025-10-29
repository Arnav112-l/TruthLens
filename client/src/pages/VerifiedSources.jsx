import { Star, ExternalLink, Shield, Search, Filter, TrendingUp, X, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function VerifiedSources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [selectedSource, setSelectedSource] = useState(null);

  const sources = [
    { name: 'BBC News', url: 'bbc.com', reliability: 98, category: 'News', verifiedBy: 'Government + AI', articles: 15420 },
    { name: 'Reuters', url: 'reuters.com', reliability: 97, category: 'News', verifiedBy: 'Government + AI', articles: 12350 },
    { name: 'The Guardian', url: 'theguardian.com', reliability: 95, category: 'News', verifiedBy: 'AI + Community', articles: 10280 },
    { name: 'Associated Press', url: 'apnews.com', reliability: 96, category: 'News', verifiedBy: 'Government + AI', articles: 11540 },
    { name: 'NPR', url: 'npr.org', reliability: 94, category: 'News', verifiedBy: 'AI + Community', articles: 9870 },
    { name: 'The New York Times', url: 'nytimes.com', reliability: 93, category: 'News', verifiedBy: 'AI + Community', articles: 13250 },
    { name: 'Washington Post', url: 'washingtonpost.com', reliability: 92, category: 'News', verifiedBy: 'AI + Community', articles: 11890 },
    { name: 'Financial Times', url: 'ft.com', reliability: 96, category: 'Business', verifiedBy: 'AI + Expert', articles: 8420 },
  ];

  const categories = ['All', 'News', 'Business'];

  const filteredSources = sources.filter(source => {
    const matchesSearch = source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          source.url.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || source.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">Verified Sources</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Trusted news sources with verified reliability scores</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 opacity-80" />
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold">{sources.length}</p>
          <p className="text-xs sm:text-sm opacity-90">Verified Sources</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Star className="w-8 h-8 sm:w-10 sm:h-10 opacity-80" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold">95.3%</p>
          <p className="text-xs sm:text-sm opacity-90">Avg Reliability</p>
        </div>
        
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <ExternalLink className="w-8 h-8 sm:w-10 sm:h-10 opacity-80" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold">93K+</p>
          <p className="text-xs sm:text-sm opacity-90">Total Articles</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 sm:p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Filter className="w-8 h-8 sm:w-10 sm:h-10 opacity-80" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold">{categories.length - 1}</p>
          <p className="text-xs sm:text-sm opacity-90">Categories</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                  filterCategory === category
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sources Grid */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-500" />
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">Trusted Media Organizations</h2>
          <span className="ml-auto text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {filteredSources.length} sources
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredSources.map((source, index) => (
            <div 
              key={index} 
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all hover:-translate-y-1 bg-white dark:bg-gray-700/50 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 dark:text-gray-100 truncate group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                    {source.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{source.url}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2 group-hover:text-amber-600 transition-colors" />
              </div>
              
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Reliability</span>
                  <span className="text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-500">{source.reliability}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-amber-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${source.reliability}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Category:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 px-2 py-0.5 rounded">
                    {source.category}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Verified By:</span>
                  <span className="font-medium text-green-600 dark:text-green-500 text-xs">
                    {source.verifiedBy}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Articles:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {source.articles.toLocaleString()}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setSelectedSource(source)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 sm:py-2.5 rounded-lg transition-all text-xs sm:text-sm font-medium hover:shadow-lg active:scale-95"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSources.length === 0 && (
          <div className="text-center py-12">
            <Shield className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">No sources found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedSource && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedSource(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 rounded-t-2xl">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{selectedSource.name}</h2>
                  <a 
                    href={`https://${selectedSource.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-100 hover:text-white flex items-center gap-2 text-sm sm:text-base transition-colors"
                  >
                    {selectedSource.url}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <button 
                  onClick={() => setSelectedSource(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Reliability Score */}
              <div className="bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-900/20 dark:to-amber-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-600" />
                    Reliability Score
                  </h3>
                  <span className="text-4xl font-bold text-amber-700 dark:text-amber-500">{selectedSource.reliability}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-amber-600 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${selectedSource.reliability}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This source has been verified as highly reliable based on AI analysis and expert review.
                </p>
              </div>

              {/* Key Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Category</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{selectedSource.category}</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Articles</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{selectedSource.articles.toLocaleString()}</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600 sm:col-span-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Verified By</p>
                  <p className="text-lg font-bold text-green-600 dark:text-green-500">{selectedSource.verifiedBy}</p>
                </div>
              </div>

              {/* Verification Details */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Verification Process
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">AI Content Analysis</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Advanced algorithms verify accuracy and bias detection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">Fact-Checking Standards</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Rigorous editorial guidelines and verification protocols</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">Historical Track Record</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Consistent accuracy over {selectedSource.articles.toLocaleString()}+ articles</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={`https://${selectedSource.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedSource(null)}
                  className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 py-3 rounded-lg font-medium transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
