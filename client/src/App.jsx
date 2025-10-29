import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import NewsVerification from './pages/NewsVerification';
import DeepfakeReports from './pages/DeepfakeReports';
import Analytics from './pages/Analytics';
import VerifiedSources from './pages/VerifiedSources';
import UserReports from './pages/UserReports';
import Settings from './pages/Settings';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/news-verification" element={
            <Layout>
              <NewsVerification />
            </Layout>
          } />
          <Route path="/deepfake-reports" element={
            <Layout>
              <DeepfakeReports />
            </Layout>
          } />
          <Route path="/analytics" element={
            <Layout>
              <Analytics />
            </Layout>
          } />
          <Route path="/verified-sources" element={
            <Layout>
              <VerifiedSources />
            </Layout>
          } />
          <Route path="/user-reports" element={
            <Layout>
              <UserReports />
            </Layout>
          } />
          <Route path="/settings" element={
            <Layout>
              <Settings />
            </Layout>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
