'use client'

import { useState } from 'react'
import { FiStar } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

const marketData = [
  {
    name: 'Band Protocol',
    symbol: 'BAND',
    iconChar: 'B', // fallback letter
    price: '$2.42',
    change: '+13.38%',
    marketCap: '$399.8M',
    isPositive: true,
  },
  {
    name: 'VeChain',
    symbol: 'VET',
    iconChar: 'V',
    price: '$7.48',
    change: '+11.19%',
    marketCap: '$152.5M',
    isPositive: true,
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    iconChar: 'A',
    price: '$0.0184',
    change: '+7.57%',
    marketCap: '$1.2B',
    isPositive: true,
  },
  {
    name: 'Waves',
    symbol: 'WAVES',
    iconChar: 'W',
    price: '$30.68',
    change: '+6.80%',
    marketCap: '$399.8M',
    isPositive: true,
  },
]

export default function MarketData() {
  const [selectedTime, setSelectedTime] = useState('24h')
  const [selectedFilter, setSelectedFilter] = useState('Top gainers')
  const { t } = useLanguage()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 w-full min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
          {t('dashboard.market.down')} 0.80%
        </h2>
        <div className="flex flex-wrap gap-2">
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="24h">24h</option>
            <option value="7d">7d</option>
            <option value="30d">30d</option>
          </select>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Top gainers">Top gainers</option>
            <option value="Top losers">Top losers</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="w-full min-w-[520px]">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">Name</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">Price</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">Change</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 hidden sm:table-cell">Market Cap</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">Watch</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((coin, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/80 dark:bg-gray-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm flex-shrink-0">
                        {coin.iconChar || coin.symbol}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">{coin.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{coin.price}</td>
                  <td className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold text-sm sm:text-base ${coin.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {coin.change}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base hidden sm:table-cell">{coin.marketCap}</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4">
                    <button className="text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
                      <FiStar className="text-base sm:text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

