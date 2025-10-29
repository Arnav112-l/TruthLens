import { Settings as SettingsIcon, User, Bell, Shield, Database } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account and application preferences</p>
      </div>

      {/* Profile Settings */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <User className="w-6 h-6" />
          Profile Settings
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                defaultValue="Arnav Singh"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                defaultValue="arnav@truthlens.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <button className="btn-primary">Save Changes</button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Bell className="w-6 h-6" />
          Notifications
        </h2>
        <div className="space-y-4">
          {[
            { label: 'Email notifications for new fake news detections', checked: true },
            { label: 'Push notifications for deepfake reports', checked: true },
            { label: 'Weekly analytics summary', checked: false },
            { label: 'Community report updates', checked: true },
          ].map((item, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                defaultChecked={item.checked}
                className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
              />
              <span className="text-gray-700">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Security
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Current Password</label>
            <input 
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">New Password</label>
            <input 
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Confirm New Password</label>
            <input 
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="btn-primary">Update Password</button>
        </div>
      </div>

      {/* API Settings */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6" />
          API Configuration
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">News API Key</label>
            <input 
              type="text"
              placeholder="Enter your News API key"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">OpenAI API Key (for content moderation)</label>
            <input 
              type="text"
              placeholder="Enter your OpenAI API key"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Deepfake Detection API Key</label>
            <input 
              type="text"
              placeholder="Enter your deepfake detection API key"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="btn-primary">Save API Keys</button>
        </div>
      </div>
    </div>
  );
}
