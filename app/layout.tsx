import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Crypto Dashboard',
  description: 'Modern cryptocurrency portfolio dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 transition-colors">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

