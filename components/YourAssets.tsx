'use client'

import { FiMoreVertical } from 'react-icons/fi'
import { FiArrowUpDown } from 'react-icons/fi'

const assets = [
  {
    symbol: 'BTC',
    amount: '1.25 BTC',
    value: '$ 2948.04',
    change: '+0.14%',
    color: 'purple',
    icon: '₿',
  },
  {
    symbol: 'LTC',
    amount: '0.32 LTC',
    value: '$ 2948.04',
    change: '+0.31%',
    color: 'green',
    icon: 'Ł',
  },
  {
    symbol: 'ETH',
    amount: '1.25 ETH',
    value: '$ 2948.04',
    change: '+0.27%',
    color: 'yellow',
    icon: 'Ξ',
  },
]

const colorClasses = {
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-700',
    iconBg: 'bg-purple-50',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    iconBg: 'bg-green-50',
  },
  yellow: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    iconBg: 'bg-yellow-50',
  },
}

export default function YourAssets() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Your Assets</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <FiArrowUpDown className="text-lg sm:text-xl" />
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
              <button className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-gray-600">
                <FiMoreVertical className="text-base sm:text-lg" />
              </button>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`${colors.iconBg} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0`}>
                    {asset.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">{asset.amount}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{asset.value}</div>
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

