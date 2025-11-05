import React from 'react'
import { Mail, Lock } from 'lucide-react';

function Login() {
  return (
    <>
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-5/12 bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">LOGIN</h1>
        
        <div>
          {/* User Id Field */}
          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-2">
              User Id
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 p-3 bg-gray-200 flex items-center pointer-events-none rounded-lg border-r border-gray-300">
                <Mail className="h-4 w-4 text-gray-700" />
              </div>
              <input
                type="text"
                placeholder="User Id"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 p-3 bg-gray-200 flex items-center pointer-events-none rounded-lg border-r border-gray-300">
                <Lock className="h-4 w-4 text-gray-700" />
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
            >
            Log In
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login