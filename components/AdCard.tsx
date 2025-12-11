'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function AdCard() {
  const { t } = useLanguage()

  return (
    <div className="bg-gray-800 dark:bg-gray-700 rounded-xl shadow-sm p-4 sm:p-6 text-white h-full flex flex-col">
      <div className="mb-4 flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2">
          {t('dashboard.earn.title').split('free')[0]}
          <span className="bg-white dark:bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs sm:text-sm mx-1">free</span>
          {t('dashboard.earn.title').split('free')[1]}
        </h3>
        <p className="text-gray-300 dark:text-gray-200 text-xs sm:text-sm">
          {t('dashboard.earn.description')}
        </p>
      </div>
      
      <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors w-full text-sm sm:text-base">
        {t('dashboard.earn.button')}
      </button>
    </div>
  )
}

