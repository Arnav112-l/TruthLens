import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import NewsVerification from './pages/NewsVerification';
import DeepfakeReports from './pages/DeepfakeReports';
import Analytics from './pages/Analytics';
import VerifiedSources from './pages/VerifiedSources';
import UserReports from './pages/UserReports';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Component to handle landing page redirect logic
function LandingPageWrapper() {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <LandingPage />;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPageWrapper />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/news-verification" element={
              <ProtectedRoute>
                <Layout>
                  <NewsVerification />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/deepfake-reports" element={
              <ProtectedRoute>
                <Layout>
                  <DeepfakeReports />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute>
                <Layout>
                  <Analytics />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/verified-sources" element={
              <ProtectedRoute>
                <Layout>
                  <VerifiedSources />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/user-reports" element={
              <ProtectedRoute>
                <Layout>
                  <UserReports />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Layout>
                  <Settings />
                </Layout>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
