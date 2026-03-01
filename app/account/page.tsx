'use client'

import { useState } from 'react'

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'settings'>('profile')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginEmail('')
    setLoginPassword('')
  }

  if (!isLoggedIn) {
    return (
      <div className="py-12 max-w-2xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          {/* Login */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <button type="submit" className="button-primary w-full">
                Sign In
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              <a href="#" className="text-pyrros-blue hover:underline">Forgot password?</a>
            </p>
          </div>

          {/* Register */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Create Account</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <button type="button" className="button-secondary w-full">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Account</h1>
        <button onClick={handleLogout} className="button-primary">
          Sign Out
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b mb-8">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-4 font-bold border-b-2 ${
              activeTab === 'profile'
                ? 'border-pyrros-blue text-pyrros-blue'
                : 'border-transparent text-gray-600'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-4 font-bold border-b-2 ${
              activeTab === 'orders'
                ? 'border-pyrros-blue text-pyrros-blue'
                : 'border-transparent text-gray-600'
            }`}
          >
            Order History
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-4 font-bold border-b-2 ${
              activeTab === 'settings'
                ? 'border-pyrros-blue text-pyrros-blue'
                : 'border-transparent text-gray-600'
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                defaultValue="John"
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                defaultValue="Doe"
                className="px-4 py-2 border rounded-lg"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              defaultValue={loginEmail}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <button type="button" className="button-primary">
              Save Changes
            </button>
          </form>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Order History</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold">Order #PYR123456</p>
                  <p className="text-gray-600">Feb 28, 2026</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Delivered</span>
              </div>
              <p className="text-gray-600 mb-2">Web Development Bundle + Design System Pro</p>
              <p className="font-bold text-pyrros-gold">$349.98</p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold">Order #PYR123455</p>
                  <p className="text-gray-600">Feb 15, 2026</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Delivered</span>
              </div>
              <p className="text-gray-600 mb-2">Premium Digital Package</p>
              <p className="font-bold text-pyrros-gold">$99.99</p>
            </div>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="font-bold mb-4">Change Password</h3>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <button type="button" className="button-primary">
                  Update Password
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Email Preferences</h3>
              <label className="flex items-center space-x-2 mb-2">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span>Receive promotional emails</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span>Receive order notifications</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
