// API Configuration
const API_URL = import.meta.env.VITE_API_URL || '';

export const API_ENDPOINTS = {
  BASE_URL: API_URL,
  USERS: {
    LOGIN: `${API_URL}/api/users/login`,
    SIGNUP: `${API_URL}/api/users/signup`,
    PROFILE: (id) => `${API_URL}/api/users/profile/${id}`,
  },
  NEWS: {
    VERIFY: `${API_URL}/api/news/verify`,
    RECENT: `${API_URL}/api/news/recent`,
  },
  DEEPFAKE: {
    ANALYZE: `${API_URL}/api/deepfake/analyze`,
    REPORTS: `${API_URL}/api/deepfake/reports`,
  },
  ANALYTICS: {
    STATS: `${API_URL}/api/analytics/stats`,
  },
};

export default API_URL;
