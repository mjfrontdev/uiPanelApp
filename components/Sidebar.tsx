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
import { useLanguage } from '@/contexts/LanguageContext'

export default function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const menuItems = [
    { icon: FiGrid, labelKey: 'nav.overview', path: '/dashboard' },
    { icon: FiFileText, labelKey: 'nav.documents', path: '/dashboard/documents' },
    { icon: FiBarChart2, labelKey: 'nav.analytics', path: '/dashboard/analytics' },
    { icon: FiBox, labelKey: 'nav.assets', path: '/dashboard/assets' },
    { icon: FiUser, labelKey: 'nav.profile', path: '/dashboard/profile' },
  ]

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
      <div className="hidden lg:flex bg-gray-800 dark:bg-gray-900 w-20 h-screen flex-col items-center py-6 fixed left-0 top-0 z-40">
        {/* Logo */}
        <div className="mb-8">
          <div className="bg-black dark:bg-gray-700 rounded-full p-3">
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
                    ? 'bg-gray-700 dark:bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-700 hover:text-white'
                }`}
                title={t(item.labelKey)}
              >
                <Icon className="text-xl" />
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
          title={t('nav.logout')}
        >
          <FiLogOut className="text-xl" />
        </button>
      </div>

      {/* Sidebar - Mobile */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-gray-800 dark:bg-gray-900 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-between">
            <div className="bg-black dark:bg-gray-700 rounded-full p-3">
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
                      ? 'bg-gray-700 dark:bg-gray-700 text-white'
                      : 'text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className="text-xl" />
                  <span className="font-medium">{t(item.labelKey)}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
          >
            <FiLogOut className="text-xl" />
            <span className="font-medium">{t('nav.logout')}</span>
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

