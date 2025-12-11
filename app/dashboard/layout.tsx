'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [router])

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Sidebar />
      <div className="flex-1 lg:ml-20 w-full">
        {children}
      </div>
    </div>
  )
}

