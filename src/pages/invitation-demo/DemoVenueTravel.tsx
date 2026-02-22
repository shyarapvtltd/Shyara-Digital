import { motion } from 'framer-motion'
import WeddingLayout from './components/WeddingLayout'
import FloatingPetals from './components/FloatingPetals'
import OrnamentalDivider from './components/OrnamentalDivider'
import WeddingPageTransition from './components/WeddingPageTransition'
import { mockGuest } from './mock-data'
import './wedding-demo.css'

export default function DemoVenueTravel() {
  const guest = mockGuest

  return (
    <WeddingLayout eventAccess={guest.eventAccess} guestName={guest.name}>
      <FloatingPetals />
      <WeddingPageTransition>
        <div className="min-h-screen bg-gradient-travel-venue relative">
          <div className="max-w-[640px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-wedding-navy mb-4 sm:mb-6"
                  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 500, letterSpacing: '0.03em' }}>
                  Travel & Venue
                </h1>
                <OrnamentalDivider variant="ornate" className="mb-4 sm:mb-6" />
              </div>

              {/* Airport Info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-white/80 rounded-2xl p-6 sm:p-8 border-2 border-wedding-gold/30 shadow-lg mb-8">
                <h2 className="text-2xl sm:text-3xl font-script text-wedding-navy mb-4 text-center">✈️ Getting Here</h2>
                <OrnamentalDivider variant="simple" className="mb-4" />
                <div className="space-y-4">
                  <div className="p-4 bg-wedding-cream-light rounded-xl border border-wedding-gold/20">
                    <h3 className="font-semibold text-lg text-wedding-navy mb-1" style={{ fontFamily: 'Georgia, serif' }}>Chhatrapati Shivaji Maharaj International Airport (BOM)</h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>Closest airport &mdash; approximately 30 minutes from the venue</p>
                  </div>
                </div>
              </motion.div>

              {/* Shuttle Info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="bg-white/80 rounded-2xl p-6 sm:p-8 border-2 border-wedding-gold/30 shadow-lg mb-8">
                <h2 className="text-2xl sm:text-3xl font-script text-wedding-navy mb-4 text-center">🚐 Hotel Shuttle</h2>
                <OrnamentalDivider variant="simple" className="mb-4" />
                <p className="text-gray-700 text-center mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Complimentary shuttle service is available from the airport to the venue.
                </p>
                <p className="text-center">
                  <span className="font-semibold text-wedding-navy" style={{ fontFamily: 'Georgia, serif' }}>Contact hotel for shuttle: </span>
                  <a href="tel:+912212345678" className="text-wedding-gold font-semibold hover:underline">+91 22 1234 5678</a>
                </p>
              </motion.div>

              {/* Venue */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="bg-white/80 rounded-2xl p-6 sm:p-8 border-2 border-wedding-gold/30 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-script text-wedding-navy mb-4 text-center">📍 Venue</h2>
                <OrnamentalDivider variant="simple" className="mb-4" />
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Grand Heritage Resort & Spa</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>123 Celebration Avenue, Mumbai, Maharashtra 400001</p>
                </div>
                <div className="rounded-lg overflow-hidden border-2 border-wedding-gold/30 shadow-lg">
                  <iframe src="https://www.google.com/maps?q=Gateway+of+India+Mumbai&output=embed" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full" title="Venue Location" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </WeddingPageTransition>
    </WeddingLayout>
  )
}
