'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FiGrid, 
  FiFileText, 
  FiBarChart2, 
  FiBox, 
  FiUser, 
  FiLogOut,
  FiDollarSign,
  FiMenu,
  FiX
} from 'react-icons/fi'

const menuItems = [
  { icon: FiGrid, label: 'Overview', path: '/dashboard' },
  { icon: FiFileText, label: 'Documents', path: '/dashboard/documents' },
  { icon: FiBarChart2, label: 'Analytics', path: '/dashboard/analytics' },
  { icon: FiBox, label: 'Assets', path: '/dashboard/assets' },
  { icon: FiUser, label: 'Profile', path: '/dashboard/profile' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
    window.location.href = '/login'
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
      </button>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:flex bg-gray-800 w-20 h-screen flex-col items-center py-6 fixed left-0 top-0 z-40">
        {/* Logo */}
        <div className="mb-8">
          <div className="bg-black rounded-full p-3">
            <FiDollarSign className="text-white text-xl" />
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-6">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
                title={item.label}
              >
                <Icon className="text-xl" />
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-gray-400 hover:text-white hover:bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
          title="Logout"
        >
          <FiLogOut className="text-xl" />
        </button>
      </div>

      {/* Sidebar - Mobile */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-gray-800 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-between">
            <div className="bg-black rounded-full p-3">
              <FiDollarSign className="text-white text-xl" />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-gray-300"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-4">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className="text-xl" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <FiLogOut className="text-xl" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

