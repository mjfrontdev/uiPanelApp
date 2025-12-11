import Header from '@/components/Header'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Profile</h2>
          <p className="text-gray-600 text-sm sm:text-base">Profile page content coming soon...</p>
        </div>
      </main>
    </div>
  )
}

