'use client'

import { useState } from 'react'
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'
import { FiMoreVertical } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'

const timeRanges = ['1H', '24H', '1W', '1M', '1Y', 'ALL']

// Sample data for the chart
const chartData = [
  { time: '00:00', value: 15000 },
  { time: '04:00', value: 16000 },
  { time: '08:00', value: 15500 },
  { time: '12:00', value: 17000 },
  { time: '16:00', value: 17500 },
  { time: '20:00', value: 17643 },
]

export default function Portfolio() {
  const [selectedRange, setSelectedRange] = useState('1W')
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 w-full min-w-0">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{t('dashboard.portfolio')}</h2>
        <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
          <FiMoreVertical className="text-lg sm:text-xl" />
        </button>
      </div>

      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">$ 17 643.41</span>
          <div className="bg-black dark:bg-gray-700 text-white px-3 py-1 rounded-full flex items-center gap-2 text-xs sm:text-sm w-fit">
            <span>$27 483.00</span>
            <FiMoreVertical className="text-xs" />
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">{t('dashboard.portfolio.balance')}</p>
      </div>

      <div className="h-40 sm:h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1F2937' : '#fff',
                border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
                color: theme === 'dark' ? '#fff' : '#000',
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        {timeRanges.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              selectedRange === range
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  )
}

