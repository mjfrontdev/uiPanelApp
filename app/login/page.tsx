'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FiDollarSign } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LoginPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Simple validation
    if (!email || !password) {
      setError(t('common.error') + ': Please fill all fields')
      return
    }

    // Simulate login - in real app, call API
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('user', JSON.stringify({ email, name: 'Zoia M.' }))
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 sm:p-6 transition-colors">
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="bg-black dark:bg-gray-700 rounded-full p-2.5 sm:p-3">
            <FiDollarSign className="text-white text-xl sm:text-2xl" />
          </div>
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">{t('login.title')}</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">{t('login.subtitle')}</p>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('login.email')}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm sm:text-base"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('login.password')}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm sm:text-base"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black dark:bg-gray-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            {t('login.button')}
          </button>
        </form>

        <div className="mt-5 sm:mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            {t('login.noAccount')}{' '}
            <Link href="/register" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
              {t('login.signup')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
