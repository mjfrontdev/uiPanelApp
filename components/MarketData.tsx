'use client'

import { useState } from 'react'
import { FiStar } from 'react-icons/fi'

const marketData = [
  {
    name: 'Band Protocol',
    symbol: 'BAND',
    icon: 'B',
    price: '$2.42',
    change: '+13.38%',
    marketCap: '$399.8M',
    isPositive: true,
  },
  {
    name: 'VeChain',
    symbol: 'VET',
    icon: 'V',
    price: '$7.48',
    change: '+11.19%',
    marketCap: '$152.5M',
    isPositive: true,
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    icon: 'A',
    price: '$0.0184',
    change: '+7.57%',
    marketCap: '$1.2B',
    isPositive: true,
  },
  {
    name: 'Waves',
    symbol: 'WAVES',
    icon: 'W',
    price: '$30.68',
    change: '+6.80%',
    marketCap: '$399.8M',
    isPositive: true,
  },
]

export default function MarketData() {
  const [selectedTime, setSelectedTime] = useState('24h')
  const [selectedFilter, setSelectedFilter] = useState('Top gainers')

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Market is down 0.80%
        </h2>
        <div className="flex flex-wrap gap-2">
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="24h">24h</option>
            <option value="7d">7d</option>
            <option value="30d">30d</option>
          </select>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Top gainers">Top gainers</option>
            <option value="Top losers">Top losers</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Name</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Price</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Change</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 hidden sm:table-cell">Market Cap</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Watch</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((coin, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                        {coin.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">{coin.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">{coin.price}</td>
                  <td className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold text-sm sm:text-base ${coin.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {coin.change}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-gray-700 text-sm sm:text-base hidden sm:table-cell">{coin.marketCap}</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4">
                    <button className="text-gray-400 hover:text-yellow-500 transition-colors">
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

