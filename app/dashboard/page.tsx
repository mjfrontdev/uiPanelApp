import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import YourAssets from '@/components/YourAssets'
import MarketData from '@/components/MarketData'
import AdCard from '@/components/AdCard'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors overflow-x-hidden">
      <Header />
      
      <main className="p-4 sm:p-6 lg:p-8">
        {/* Top Section: Portfolio and Assets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 min-w-0">
          <Portfolio />
          <YourAssets />
        </div>
        
        {/* Bottom Section: Market Data and Ad */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 min-w-0">
          <div className="lg:col-span-2 order-2 lg:order-1 min-w-0">
            <MarketData />
          </div>
          <div className="order-1 lg:order-2 min-w-0">
            <AdCard />
          </div>
        </div>
      </main>
    </div>
  )
}

