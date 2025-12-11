'use client'

import Header from '@/components/Header'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { FiTrendingUp, FiTrendingDown, FiDollarSign, FiActivity } from 'react-icons/fi'
import { useTheme } from '@/contexts/ThemeContext'

const portfolioData = [
  { month: 'Jan', value: 15000 },
  { month: 'Feb', value: 16500 },
  { month: 'Mar', value: 18000 },
  { month: 'Apr', value: 17200 },
  { month: 'May', value: 19000 },
  { month: 'Jun', value: 21000 },
]

const assetDistribution = [
  { name: 'Bitcoin', value: 45, color: '#F7931A' },
  { name: 'Ethereum', value: 30, color: '#627EEA' },
  { name: 'Litecoin', value: 15, color: '#BFBBBB' },
  { name: 'Others', value: 10, color: '#3B82F6' },
]

const stats = [
  { label: 'Total Value', value: '$17,643.41', change: '+12.5%', trend: 'up', icon: FiDollarSign },
  { label: '24h Change', value: '+$234.12', change: '+1.34%', trend: 'up', icon: FiTrendingUp },
  { label: 'Total Trades', value: '1,234', change: '+8.2%', trend: 'up', icon: FiActivity },
  { label: 'Avg. Return', value: '8.5%', change: '-2.1%', trend: 'down', icon: FiTrendingDown },
]

export default function AnalyticsPage() {
  const { theme } = useTheme()
  const tooltipStyle = {
    backgroundColor: theme === 'dark' ? '#1F2937' : '#fff',
    border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
    borderRadius: '8px',
    color: theme === 'dark' ? '#fff' : '#000',
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">Analytics</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Track your portfolio performance and insights</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Icon className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <span className={`text-xs font-semibold flex items-center gap-1 ${
                    stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
                    {stat.change}
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              </div>
            )
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Portfolio Growth */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 min-w-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Portfolio Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={portfolioData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                <XAxis dataKey="month" stroke="#6b7280" className="dark:stroke-gray-400" />
                <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Asset Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 min-w-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Asset Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={assetDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {assetDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trading Volume */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Trading Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
              <XAxis dataKey="month" stroke="#6b7280" className="dark:stroke-gray-400" />
              <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  )
}
