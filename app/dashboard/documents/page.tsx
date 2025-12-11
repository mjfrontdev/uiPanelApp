import Header from '@/components/Header'
import { FiFileText, FiDownload, FiEye, FiTrash2, FiSearch, FiFilter } from 'react-icons/fi'

const documents = [
  {
    id: 1,
    name: 'Tax Report 2023.pdf',
    type: 'PDF',
    size: '2.4 MB',
    date: '2024-01-15',
    category: 'Tax',
  },
  {
    id: 2,
    name: 'Trading History.xlsx',
    type: 'Excel',
    size: '1.8 MB',
    date: '2024-01-10',
    category: 'Trading',
  },
  {
    id: 3,
    name: 'Portfolio Statement.pdf',
    type: 'PDF',
    size: '3.2 MB',
    date: '2024-01-05',
    category: 'Portfolio',
  },
  {
    id: 4,
    name: 'Transaction Log.csv',
    type: 'CSV',
    size: '856 KB',
    date: '2023-12-28',
    category: 'Transactions',
  },
]

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <FiFileText className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Documents</h2>
            </div>
            
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
                <FiFilter className="text-base" />
                <span className="hidden sm:inline">Filter</span>
              </button>
              <div className="relative flex-1 sm:flex-initial">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400 hidden sm:table-cell">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400 hidden md:table-cell">Size</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400 hidden lg:table-cell">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                          <FiFileText className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{doc.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 sm:hidden">{doc.type} • {doc.size}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300 text-sm hidden sm:table-cell">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">{doc.type}</span>
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300 text-sm hidden md:table-cell">{doc.size}</td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300 text-sm hidden lg:table-cell">{doc.date}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" title="View">
                          <FiEye className="text-base" />
                        </button>
                        <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors" title="Download">
                          <FiDownload className="text-base" />
                        </button>
                        <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors" title="Delete">
                          <FiTrash2 className="text-base" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
