'use client'

export default function AdCard() {
  return (
    <div className="bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 text-white h-full flex flex-col">
      <div className="mb-4 flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2">
          Earn <span className="bg-white text-gray-800 px-2 py-1 rounded-full text-xs sm:text-sm">free</span> crypto with Coinview Earn!
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm">
          Learn about different cryptocurrencies and earn them for free!
        </p>
      </div>
      
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors w-full text-sm sm:text-base">
        Earn Now
      </button>
    </div>
  )
}

