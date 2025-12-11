import Header from '@/components/Header'
import { FiSearch, FiFilter, FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import {
  SiBitcoin,
  SiEthereum,
  SiLitecoin,
  SiBinance,
  SiCardano,
} from 'react-icons/si'

const assets = [
  {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    amount: '1.25',
    value: '$54,234.50',
    change: '+2.45%',
    changeValue: '+$1,234.12',
    isPositive: true,
    Icon: SiBitcoin,
    color: 'orange',
  },
  {
    id: 2,
    symbol: 'ETH',
    name: 'Ethereum',
    amount: '5.32',
    value: '$12,456.78',
    change: '+1.23%',
    changeValue: '+$156.78',
    isPositive: true,
    Icon: SiEthereum,
    color: 'blue',
  },
  {
    id: 3,
    symbol: 'LTC',
    name: 'Litecoin',
    amount: '12.50',
    value: '$1,234.56',
    change: '-0.45%',
    changeValue: '-$5.67',
    isPositive: false,
    Icon: SiLitecoin,
    color: 'gray',
  },
  {
    id: 4,
    symbol: 'BNB',
    name: 'Binance Coin',
    amount: '8.90',
    value: '$2,345.67',
    change: '+3.21%',
    changeValue: '+$72.89',
    isPositive: true,
    Icon: SiBinance,
    color: 'yellow',
  },
  {
    id: 5,
    symbol: 'ADA',
    name: 'Cardano',
    amount: '1,234.56',
    value: '$567.89',
    change: '-1.12%',
    changeValue: '-$6.45',
    isPositive: false,
    Icon: SiCardano,
    color: 'blue',
  },
]

export default function AssetsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">Assets</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Manage your cryptocurrency holdings</p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search assets..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
              <FiFilter className="text-base" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Assets List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 min-w-0">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow min-w-0"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                    asset.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
                    asset.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                    asset.color === 'gray' ? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400' :
                    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    <asset.Icon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{asset.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{asset.symbol}</p>
                  </div>
                </div>
                <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                  <FiArrowUpRight className="text-xl" />
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Amount</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{asset.amount} {asset.symbol}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Value</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{asset.value}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-600 dark:text-gray-400">24h Change</span>
                  <div className="flex items-center gap-2">
                    {asset.isPositive ? (
                      <FiArrowUpRight className={`text-green-600 dark:text-green-400`} />
                    ) : (
                      <FiArrowDownRight className={`text-red-600 dark:text-red-400`} />
                    )}
                    <span className={`font-semibold ${
                      asset.isPositive
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {asset.change}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {asset.changeValue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
