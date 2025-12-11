'use client'

import { useState, useEffect } from 'react'
import { FiSearch, FiBell, FiChevronDown, FiMoon, FiSun, FiGlobe } from 'react-icons/fi'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [userName, setUserName] = useState('Zoia M.')
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      try {
        const userData = JSON.parse(user)
        if (userData.name) {
          setUserName(userData.name)
        }
      } catch (e) {
        // Handle error
      }
    }
  }, [])

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
    { code: 'fa' as const, name: 'فارسی', flag: '🇮🇷' },
    { code: 'ar' as const, name: 'العربية', flag: '🇸🇦' },
  ]

  return (
    <header className="bg-white dark:bg-gray-800 h-auto sm:h-16 flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-700 gap-3 sm:gap-0 py-3 sm:py-0 w-full min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white truncate w-full sm:w-auto">{t('nav.overview')}</h1>
      
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 w-full sm:w-auto justify-end flex-wrap min-w-0">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <FiMoon className="text-lg sm:text-xl" />
          ) : (
            <FiSun className="text-lg sm:text-xl" />
          )}
        </button>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-1 shrink-0"
            title="Change language"
          >
            <FiGlobe className="text-lg sm:text-xl" />
            <span className="text-sm hidden sm:inline">
              {languages.find(l => l.code === language)?.flag}
            </span>
          </button>
          
          {showLangMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowLangMenu(false)}
              />
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setShowLangMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 ${
                      language === lang.code
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0">
          <FiSearch className="text-lg sm:text-xl" />
        </button>
        
        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0">
          <FiBell className="text-lg sm:text-xl" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
            {userName.charAt(0)}
          </div>
          <span className="hidden sm:inline text-gray-700 dark:text-gray-300 font-medium text-sm lg:text-base truncate max-w-[8rem] lg:max-w-[12rem]">{userName}</span>
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors p-1 shrink-0">
            <FiChevronDown className="text-base sm:text-lg" />
          </button>
        </div>
      </div>
    </header>
  )
}

