import { Link } from 'react-router-dom';
import { Shield, CheckCircle, AlertTriangle, TrendingUp, Users, Eye, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Shield,
      title: 'News Verification',
      description: 'AI-powered fact-checking to verify news authenticity and combat misinformation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Deepfake Detection',
      description: 'Advanced algorithms to identify manipulated media and deepfake content.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Track misinformation trends and patterns across digital platforms.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Community Reports',
      description: 'Crowdsourced reporting system for suspicious content verification.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { value: '50K+', label: 'News Verified' },
    { value: '99.2%', label: 'Accuracy Rate' },
    { value: '10K+', label: 'Active Users' },
    { value: '24/7', label: 'Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-amber-900/20 dark:border-amber-700/30 animate-slide-up">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-slide-right">
              <div className="p-2 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/30 rounded-xl animate-glow-pulse">
                <Shield className="w-8 h-8 text-amber-800 dark:text-amber-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">TruthLens</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Government of India</p>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-slide-left">
              <Link
                to="/dashboard"
                className="px-6 py-2 bg-gradient-to-r from-amber-800 to-amber-900 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all animate-bounce-subtle"
              >
                Enter Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-right">
              <div className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6 animate-scale-in">
                <p className="text-sm font-medium text-amber-900 dark:text-amber-600 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 animate-bounce-subtle" />
                  Official Government Portal
                </p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                Combat Misinformation with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-900 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  AI-Powered Truth
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
                India's premier platform for news verification, deepfake detection, and digital truth validation. Protect yourself from fake news and manipulated media.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '500ms' }}>
                <Link
                  to="/dashboard"
                  className="px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-900 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group animate-glow-pulse"
                >
                  Access Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-slide-left" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-3xl rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-amber-900/20 dark:border-amber-700/30 hover:scale-105 transition-transform duration-500">
                  <div className="space-y-4">
                    {/* Fake News Alert */}
                    <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl animate-slide-left" style={{ animationDelay: '600ms' }}>
                      <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 animate-bounce-subtle" />
                      <div>
                        <p className="font-semibold text-red-900 dark:text-red-300 text-sm">Misinformation Detected</p>
                        <p className="text-xs text-red-700 dark:text-red-400 mt-1">AI Analysis: 98% fake probability</p>
                      </div>
                    </div>
                    
                    {/* Verified News */}
                    <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl animate-slide-left" style={{ animationDelay: '700ms' }}>
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 animate-bounce-subtle" />
                      <div>
                        <p className="font-semibold text-green-900 dark:text-green-300 text-sm">Content Verified</p>
                        <p className="text-xs text-green-700 dark:text-green-400 mt-1">Authentic source confirmed</p>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {stats.slice(0, 2).map((stat, index) => (
                        <div key={index} className="bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/30 p-4 rounded-xl text-center animate-scale-in hover:scale-110 transition-transform" style={{ animationDelay: `${800 + index * 100}ms` }}>
                          <p className="text-2xl font-bold text-amber-900 dark:text-amber-600">{stat.value}</p>
                          <p className="text-xs text-amber-800 dark:text-amber-700">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-y border-amber-900/10 dark:border-amber-700/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in group hover:scale-110 transition-transform cursor-default" style={{ animationDelay: `${index * 100}ms` }}>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-900 mb-2 group-hover:animate-bounce-subtle">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Powerful Features for Truth Verification
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Advanced AI technology to protect citizens from misinformation and ensure digital safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-amber-900/10 dark:border-amber-700/20 hover:border-amber-900/30 dark:hover:border-amber-700/40 transition-all hover:scale-105 hover:shadow-2xl group animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-block p-3 bg-gradient-to-br ${feature.color} rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-amber-800 dark:group-hover:text-amber-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-800 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center animate-scale-in relative z-10">
          <Lock className="w-16 h-16 text-amber-200 mx-auto mb-6 animate-bounce-subtle" />
          <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up">
            Join the Fight Against Misinformation
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Get instant access to AI-powered verification tools and protect yourself from fake news.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Link
              to="/signup"
              className="px-8 py-4 bg-white text-amber-900 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group animate-glow-pulse"
            >
              Create Free Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:scale-105"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100 dark:bg-gray-900 border-t border-amber-900/10 dark:border-amber-700/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-amber-800 dark:text-amber-600" />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">TruthLens</p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Official Government of India Portal for Digital Truth Verification
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © 2025 TruthLens. All rights reserved. | Powered by AI & Blockchain Technology
          </p>
        </div>
      </footer>
    </div>
  );
}
