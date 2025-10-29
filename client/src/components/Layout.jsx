import { useState, useEffect } from 'react';
import { ChevronUp, Menu, X, Home, Newspaper, Drama, BarChart3, FolderCheck, MessageSquare, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Newspaper, label: 'News Verification', path: '/news-verification' },
  { icon: Drama, label: 'Deepfake Reports', path: '/deepfake-reports' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FolderCheck, label: 'Verified Sources', path: '/verified-sources' },
  { icon: MessageSquare, label: 'User Reports', path: '/user-reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [autoExpandMenu, setAutoExpandMenu] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  // Handle scroll to show/hide scroll button and auto-expand menu on desktop
  useEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop;
      setScrolled(scrollTop > 50);
      
      // Auto-expand menu on scroll for desktop/laptop (screen width > 1024px)
      const isDesktop = window.innerWidth >= 1024;
      setAutoExpandMenu(isDesktop && scrollTop > 200);
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Combined menu state: manual toggle OR auto-expand on desktop
  const isMenuVisible = menuOpen || autoExpandMenu;

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Backdrop overlay - only show on mobile when manually opened */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Expandable Horizontal Menu Bar */}
      <div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 rounded-full shadow-2xl transition-all duration-200 ease-out pointer-events-auto"
        style={{
          height: '60px',
          width: isMenuVisible ? 'auto' : '60px',
          padding: isMenuVisible ? '0 24px' : '0',
          background: theme === 'dark' 
            ? 'rgba(30, 30, 30, 0.95)' 
            : 'rgba(245, 245, 240, 0.95)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          border: theme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : '2px solid rgba(139, 69, 19, 0.2)',
          boxShadow: theme === 'dark'
            ? '0 4px 15px 0 rgba(0, 0, 0, 0.3)'
            : '0 4px 15px 0 rgba(101, 67, 33, 0.12)',
          willChange: 'width, padding',
        }}
      >
        <div className="flex items-center h-full">
          {/* Menu Items - slide in when expanded (LEFT SIDE) */}
          <div 
            className={`flex items-center gap-3 overflow-hidden transition-all duration-200 ${
              isMenuVisible ? 'opacity-100 max-w-[600px] pr-4' : 'opacity-0 max-w-0 pr-0'
            }`}
            style={{
              willChange: 'max-width, opacity',
            }}
          >
            {menuItems.slice(0, Math.floor(menuItems.length / 2)).map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative flex items-center justify-center transition-all duration-200 rounded-xl flex-shrink-0 ${
                    isActive 
                      ? theme === 'dark' 
                        ? 'bg-white/30 p-2.5' 
                        : 'bg-amber-800/20 p-2.5 shadow-sm'
                      : theme === 'dark'
                        ? 'hover:bg-white/20 p-2.5'
                        : 'hover:bg-amber-900/10 p-2.5'
                  }`}
                  style={{ 
                    transitionDelay: isMenuVisible ? `${index * 30}ms` : '0ms',
                  }}
                >
                  <Icon className={`w-5 h-5 ${
                    theme === 'dark' ? 'text-white' : isActive ? 'text-amber-900' : 'text-amber-800'
                  } drop-shadow-sm ${isActive ? 'animate-pulse' : ''}`} />
                  
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                  )}
                  
                  {/* Label tooltip */}
                  <span className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none ${
                    theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Toggle Button - CENTER */}
          <button
            onClick={() => {
              console.log('Menu toggle clicked');
              setMenuOpen(!menuOpen);
            }}
            className="flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform rounded-full hover:bg-black/5 cursor-pointer relative z-10"
            aria-label="Toggle Menu"
            type="button"
          >
            {isMenuVisible ? (
              <X className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-amber-900'} drop-shadow-sm pointer-events-none`} />
            ) : (
              <Menu className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-amber-900'} drop-shadow-sm pointer-events-none`} />
            )}
          </button>

          {/* Menu Items - slide in when expanded (RIGHT SIDE) */}
          <div 
            className={`flex items-center gap-3 overflow-hidden transition-all duration-200 ${
              isMenuVisible ? 'opacity-100 max-w-[600px] pl-4' : 'opacity-0 max-w-0 pl-0'
            }`}
            style={{
              willChange: 'max-width, opacity',
            }}
          >
            {menuItems.slice(Math.floor(menuItems.length / 2)).map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative flex items-center justify-center transition-all duration-200 rounded-xl flex-shrink-0 ${
                    isActive 
                      ? theme === 'dark' 
                        ? 'bg-white/30 p-2.5' 
                        : 'bg-amber-800/20 p-2.5 shadow-sm'
                      : theme === 'dark'
                        ? 'hover:bg-white/20 p-2.5'
                        : 'hover:bg-amber-900/10 p-2.5'
                  }`}
                  style={{ 
                    transitionDelay: isMenuVisible ? `${(index + Math.floor(menuItems.length / 2)) * 30}ms` : '0ms',
                  }}
                >
                  <Icon className={`w-5 h-5 ${
                    theme === 'dark' ? 'text-white' : isActive ? 'text-amber-900' : 'text-amber-800'
                  } drop-shadow-sm ${isActive ? 'animate-pulse' : ''}`} />
                  
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                  )}
                  
                  {/* Label tooltip */}
                  <span className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none ${
                    theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Pulse animation ring */}
        {!isMenuVisible && (
          <span className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-20" />
        )}
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setMenuOpen(!menuOpen)} />
        
        <main className="flex-1 overflow-y-auto p-6 relative scroll-smooth">
          {children}
        </main>

        {/* Scroll to Top Button */}
        <button
          onClick={() => document.querySelector('main').scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 z-50 bg-gray-800 dark:bg-gray-700 text-white p-4 rounded-full shadow-2xl hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-500 hover:scale-110 active:scale-95 group ${
            scrolled ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll to Top"
        >
          <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Back to Top
          </span>
        </button>
      </div>
    </div>
  );
}
