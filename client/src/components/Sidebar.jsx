import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Newspaper, 
  Drama, 
  BarChart3, 
  FolderCheck, 
  MessageSquare, 
  Settings,
  Eye
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Newspaper, label: 'News Verification', path: '/news-verification' },
  { icon: Drama, label: 'Deepfake Reports', path: '/deepfake-reports' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FolderCheck, label: 'Verified Sources', path: '/verified-sources' },
  { icon: MessageSquare, label: 'User Reports', path: '/user-reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar({ isOpen }) {
  const location = useLocation();

  return (
    <aside 
      className={`fixed left-0 top-0 h-full bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white transition-all duration-500 ease-in-out z-40 shadow-2xl ${
        isOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0'
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center h-16 border-b border-primary-700/50 backdrop-blur-sm bg-primary-900/50">
        <div className={`flex items-center transition-all duration-300 ${isOpen ? 'space-x-3' : 'space-x-0'}`}>
          <div className="relative">
            <Eye className="w-8 h-8 animate-pulse" />
            <span className="absolute inset-0 w-8 h-8 bg-white/20 rounded-full blur-md animate-pulse" />
          </div>
          {isOpen && (
            <span className="text-xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent animate-fade-in">
              TruthLens
            </span>
          )}
        </div>
      </div>
      
      {/* Navigation Menu */}
      <nav className="mt-6 space-y-1 px-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center px-3 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden ${
                isActive 
                  ? 'bg-white/10 shadow-lg shadow-primary-500/20 scale-105' 
                  : 'hover:bg-white/5 hover:scale-105 hover:shadow-md'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Active indicator */}
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-primary-200 to-white rounded-r-full animate-slide-in" />
              )}
              
              {/* Icon with hover effect */}
              <div className="relative">
                <Icon className={`w-5 h-5 transition-all duration-300 ${
                  isActive ? 'text-white scale-110' : 'text-primary-200 group-hover:text-white group-hover:scale-110'
                }`} />
                {!isOpen && (
                  <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl z-50 group-hover:translate-x-2">
                    {item.label}
                  </span>
                )}
              </div>
              
              {/* Label with animation */}
              {isOpen && (
                <span className={`ml-4 font-medium transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-primary-100 group-hover:text-white'
                }`}>
                  {item.label}
                </span>
              )}
              
              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" 
                    style={{ transition: 'transform 0.6s ease-in-out' }} />
            </Link>
          );
        })}
      </nav>

      {/* Footer decoration */}
      <div className="absolute bottom-6 left-0 right-0 px-6">
        <div className={`border-t border-primary-700/50 pt-4 ${isOpen ? 'block' : 'hidden'}`}>
          <p className="text-xs text-primary-300 text-center">
            Powered by AI
          </p>
        </div>
      </div>
    </aside>
  );
}
