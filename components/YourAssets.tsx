'use client'

import { FiMoreVertical, FiArrowUpRight } from 'react-icons/fi'
import {
  SiBitcoin,
  SiLitecoin,
  SiEthereum,
} from 'react-icons/si'
import { useLanguage } from '@/contexts/LanguageContext'

const assets = [
  {
    symbol: 'BTC',
    amount: '1.25 BTC',
    value: '$ 2948.04',
    change: '+0.14%',
    color: 'purple',
    Icon: SiBitcoin,
  },
  {
    symbol: 'LTC',
    amount: '0.32 LTC',
    value: '$ 2948.04',
    change: '+0.31%',
    color: 'green',
    Icon: SiLitecoin,
  },
  {
    symbol: 'ETH',
    amount: '1.25 ETH',
    value: '$ 2948.04',
    change: '+0.27%',
    color: 'yellow',
    Icon: SiEthereum,
  },
]

const colorClasses = {
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/20',
    text: 'text-purple-700 dark:text-purple-400',
    iconBg: 'bg-purple-50 dark:bg-purple-900/30',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/20',
    text: 'text-green-700 dark:text-green-400',
    iconBg: 'bg-green-50 dark:bg-green-900/30',
  },
  yellow: {
    bg: 'bg-yellow-100 dark:bg-yellow-900/20',
    text: 'text-yellow-700 dark:text-yellow-400',
    iconBg: 'bg-yellow-50 dark:bg-yellow-900/30',
  },
}

export default function YourAssets() {
  const { t } = useLanguage()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 w-full min-w-0">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{t('dashboard.yourAssets')}</h2>
        <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
          <FiArrowUpRight className="text-lg sm:text-xl" />
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {assets.map((asset) => {
          const colors = colorClasses[asset.color as keyof typeof colorClasses]
          return (
            <div
              key={asset.symbol}
              className={`${colors.bg} rounded-lg p-3 sm:p-4 relative`}
            >
              <button className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                <FiMoreVertical className="text-base sm:text-lg" />
              </button>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`${colors.iconBg} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg flex-shrink-0 text-gray-800`}>
                    <asset.Icon />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">{asset.amount}</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{asset.value}</div>
                  </div>
                </div>
                
                <div className={`${colors.text} font-semibold text-sm sm:text-base`}>
                  {asset.change}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

