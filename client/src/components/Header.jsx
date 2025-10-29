import { Bell, Search, Menu, Sun, Moon, LogOut, CheckCircle, AlertTriangle, Info, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function Header({ toggleSidebar }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationsRef = useRef(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Verification Complete',
      message: 'News article verified successfully',
      time: '2 min ago',
      read: false,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Suspicious Content Detected',
      message: 'Deepfake analysis flagged potential manipulation',
      time: '15 min ago',
      read: false,
    },
    {
      id: 3,
      type: 'info',
      title: 'System Update',
      message: 'New AI model deployed for better accuracy',
      time: '1 hour ago',
      read: true,
    },
    {
      id: 4,
      type: 'success',
      title: 'Report Submitted',
      message: 'Your fake news report has been received',
      time: '3 hours ago',
      read: true,
    },
  ]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getUserInitials = () => {
    if (!user || !user.name) return 'U';
    return user.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  // Close notifications dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-gray-700 h-16 flex items-center justify-between px-6 transition-all sticky top-0 z-30">
      <button 
        onClick={toggleSidebar}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all hover:scale-110 active:scale-95 group"
      >
        <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
      </button>
      
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative group">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 group-focus-within:text-primary-500 transition-colors" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all hover:shadow-md focus:w-80"
          />
        </div>
        
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all hover:scale-110 active:scale-95 group overflow-hidden"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <div className="relative z-10">
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400 animate-float" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
            )}
          </div>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
        </button>
        
        {/* Notifications */}
        <div className="relative" ref={notificationsRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all hover:scale-110 active:scale-95"
          >
            <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" />
            {unreadCount > 0 && (
              <>
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                  {unreadCount}
                </span>
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full animate-ping"></span>
              </>
            )}
          </button>

          {/* Notifications Dropdown */}
          <div className={`absolute right-0 top-full mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 z-50 ${
            showNotifications ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}>
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/10">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Notifications
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                    {unreadCount} new
                  </span>
                )}
              </h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 font-medium transition-colors"
                >
                  Mark all read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="px-4 py-8 text-center">
                  <Bell className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-500 dark:text-gray-400 text-sm">No notifications</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer group/item ${
                      !notification.read ? 'bg-amber-50/30 dark:bg-amber-900/10' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className={`text-sm font-semibold ${
                            !notification.read 
                              ? 'text-gray-900 dark:text-gray-100' 
                              : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {notification.title}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteNotification(notification.id);
                            }}
                            className="opacity-0 group-hover/item:opacity-100 p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-all"
                          >
                            <X className="w-3 h-3 text-gray-500" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 dark:text-gray-500">
                            {notification.time}
                          </span>
                          {!notification.read && (
                            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                <button className="text-sm text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 font-medium transition-colors w-full text-center">
                  View all notifications
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* User Avatar with Dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center text-white font-semibold transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/50">
                {getUserInitials()}
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-success-500 rounded-full border-2 border-white dark:border-gray-800"></span>
            </div>
          </div>
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
