import { ReactNode } from 'react'
import WeddingNavigation from './WeddingNavigation'
import BackToShyara from './BackToShyara'

interface WeddingLayoutProps {
  eventAccess: string[]
  guestName: string
  children: ReactNode
}

export default function WeddingLayout({ eventAccess, guestName, children }: WeddingLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-wedding flex flex-col">
      <WeddingNavigation eventAccess={eventAccess} guestName={guestName} />
      <main className="flex-1 md:ml-64">
        {children}
      </main>
      <footer className="bg-gradient-to-b from-wedding-navy to-wedding-navy-light text-white py-6 sm:py-8 md:py-12 mt-8 sm:mt-12 md:ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl">💛</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 font-script text-wedding-gold-light">
            Made with love for our special day
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Thank you for being a part of our celebration.
          </p>
          <div className="wedding-divider max-w-xs mx-auto mb-4 sm:mb-6 opacity-30" />
          <p className="text-xs sm:text-sm opacity-75">
            &copy; {new Date().getFullYear()} Rahul Mehta & Priya Sharma
          </p>
          <p className="text-xs opacity-50 mt-2">
            Demo showcase &mdash; Built by <span className="text-wedding-gold-light">Shyara Digital</span>
          </p>
        </div>
      </footer>
      <BackToShyara />
    </div>
  )
}
