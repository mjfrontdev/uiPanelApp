'use client'

import Header from '@/components/Header'
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2, FiSave, FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Zoia M.',
    email: 'zoia@example.com',
    phone: '+1 234 567 8900',
    location: 'New York, USA',
    bio: 'Cryptocurrency enthusiast and trader',
  })

  const handleSave = () => {
    setIsEditing(false)
    // In real app, save to API
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sm:p-8 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {formData.name.charAt(0)}
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                    <FiEdit2 className="text-sm" />
                  </button>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{formData.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{formData.bio}</p>
                  </div>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <FiEdit2 className="text-base" />
                      <span>Edit Profile</span>
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                      >
                        <FiSave className="text-base" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                      >
                        <FiX className="text-base" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FiUser className="text-base" />
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{formData.name}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FiMail className="text-base" />
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{formData.email}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FiPhone className="text-base" />
                  Phone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{formData.phone}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FiMapPin className="text-base" />
                  Location
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{formData.location}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <FiUser className="text-base" />
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{formData.bio}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
