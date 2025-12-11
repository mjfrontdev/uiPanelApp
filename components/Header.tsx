'use client'

import { useState, useEffect } from 'react'
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi'

export default function Header() {
  const [userName, setUserName] = useState('Zoia M.')

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      try {
        const userData = JSON.parse(user)
        if (userData.name) {
          setUserName(userData.name)
        }
      } catch (e) {
        // Handle error
      }
    }
  }, [])

  return (
    <header className="bg-white h-16 flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-gray-200 gap-4 sm:gap-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Overview</h1>
      
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto justify-end">
        <button className="text-gray-600 hover:text-gray-800 transition-colors p-2">
          <FiSearch className="text-lg sm:text-xl" />
        </button>
        
        <button className="text-gray-600 hover:text-gray-800 transition-colors relative p-2">
          <FiBell className="text-lg sm:text-xl" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
            {userName.charAt(0)}
          </div>
          <span className="hidden sm:inline text-gray-700 font-medium text-sm lg:text-base">{userName}</span>
          <button className="text-gray-600 hover:text-gray-800 transition-colors p-1">
            <FiChevronDown className="text-base sm:text-lg" />
          </button>
        </div>
      </div>
    </header>
  )
}

