import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import WeddingLayout from './components/WeddingLayout'
import OrnamentalDivider from './components/OrnamentalDivider'
import FloatingPetals from './components/FloatingPetals'
import StarParticles from './components/StarParticles'
import InteractiveFloatingHearts from './components/InteractiveFloatingHearts'
import WeddingPageTransition from './components/WeddingPageTransition'
import { mockGuest } from './mock-data'
import './wedding-demo.css'

const eventContent: Record<string, {
  title: string
  date: string
  time: string
  attire: string
  venue: string
  venueDetails?: string
  address: string
  additionalInfo?: string | null
  cocktailHour?: string
  pherasDescription?: string
  baraatDescription?: string
  baraatTime?: string
  note?: string | null
  description?: string
}> = {
  mehndi: {
    title: 'Mehndi',
    date: '20th Day of March, 2026',
    time: "Six O'Clock in the Evening",
    attire: 'Casual',
    venue: 'Grand Heritage Resort & Spa',
    venueDetails: 'Mehndi Hall',
    address: '123 Celebration Avenue, Mumbai, Maharashtra 400001',
    additionalInfo: 'Traditional Dinner will be served',
    description: 'Join us for an evening of mehndi, music, and celebration as we begin the wedding festivities.',
  },
  wedding: {
    title: 'Hindu Wedding Ceremony',
    date: '21st Day of March, 2026',
    time: "Ten O'Clock in the Morning",
    attire: 'Formal Indian Attire',
    venue: 'Grand Heritage Resort & Spa',
    venueDetails: 'Garden Terrace',
    address: '123 Celebration Avenue, Mumbai, Maharashtra 400001',
    pherasDescription: 'The Wedding Ceremony unites two souls spiritually, mentally and physically. The bond of matrimony is sacred and the ceremony of marriage is conducted according to Vedic traditions.',
    baraatDescription: "Baraat is an Indian wedding ceremony where the groom accompanied by his family and friends dance all the way to the bride's doorstep or wedding venue.",
    baraatTime: "Thirty Minutes past Nine O'Clock in the Morning",
    additionalInfo: 'No Boxed Gifts/Registry',
    note: null,
  },
  reception: {
    title: 'Reception',
    date: '21st Day of March, 2026',
    time: "Five O'Clock in the Evening",
    attire: 'Formal Indian/Western Attire',
    venue: 'Grand Heritage Resort & Spa',
    venueDetails: 'Grand Ballroom',
    address: '123 Celebration Avenue, Mumbai, Maharashtra 400001',
    cocktailHour: "Half past Five O'Clock in the Evening to Half past Six O'Clock in the Evening",
    note: 'No Boxed Gifts/Registry',
    additionalInfo: null,
    description: 'Celebrate with us at the grand reception with dinner, dancing, and festivities.',
  },
}

const scriptFont = "'Dancing Script', cursive"

export default function DemoEvent() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const guest = mockGuest

  if (!slug || !eventContent[slug]) {
    return (
      <WeddingLayout eventAccess={guest.eventAccess} guestName={guest.name}>
        <div className="min-h-screen flex items-center justify-center bg-gradient-wedding p-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full wedding-card rounded-2xl shadow-2xl p-6 sm:p-8 text-center">
            <div className="text-5xl sm:text-6xl mb-4">🔍</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display text-wedding-navy mb-4">Page Not Found</h1>
            <div className="wedding-divider max-w-32 mx-auto mb-6" />
            <p className="text-base sm:text-lg text-gray-700 mb-6">The event page you&apos;re looking for doesn&apos;t exist.</p>
            <button onClick={() => navigate('/invitation-website/demo')} className="px-6 py-3 bg-wedding-gold text-white rounded-lg font-semibold hover:bg-wedding-gold/90 transition-colors">
              Return to Home
            </button>
          </motion.div>
        </div>
      </WeddingLayout>
    )
  }

  const content = eventContent[slug]
  const isReception = slug === 'reception'
  const isMehendi = slug === 'mehndi'
  const isWedding = slug === 'wedding'

  const backgroundClass = isMehendi
    ? 'bg-gradient-mehendi'
    : isWedding
    ? 'bg-gradient-wedding-teal'
    : 'bg-gradient-reception'

  const receptionTextStyle = isReception ? { filter: 'brightness(1.2)' as const } : {}
  const receptionHeadingStyle = isReception ? { filter: 'brightness(1.3)' as const } : {}

  return (
    <WeddingLayout eventAccess={guest.eventAccess} guestName={guest.name}>
      {isReception && <StarParticles count={75} />}
      {isWedding && <InteractiveFloatingHearts />}
      {!isReception && !isWedding && <FloatingPetals />}
      <WeddingPageTransition>
        <div className={`min-h-screen relative ${backgroundClass}`}>
          {isMehendi && (
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/wedding-demo/images/mehndi-background-2.svg)', backgroundSize: '400px 400px', backgroundRepeat: 'repeat', opacity: 0.35 }}
            />
          )}
          <div className={`max-w-[640px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 relative z-20 ${isMehendi ? 'overflow-visible' : ''}`}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">

              {/* Title (non-wedding) */}
              {!isWedding && (
                <div className="text-center mb-6 sm:mb-8">
                  <h1
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 ${
                      isReception ? 'text-wedding-gold drop-shadow-lg' : isMehendi ? 'text-wedding-forest-green' : 'text-wedding-navy'
                    }`}
                    style={{ fontFamily: scriptFont, fontWeight: 500, letterSpacing: '0.03em', ...(isReception ? { textShadow: '0 0 10px rgba(212, 175, 55, 0.5), 0 0 20px rgba(212, 175, 55, 0.3)' } : {}) }}
                  >
                    {content.title}
                  </h1>
                  <OrnamentalDivider variant="ornate" />
                </div>
              )}

              {/* Description (Mehndi/Reception) */}
              {content.description && (isMehendi || isReception) && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className={`rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-md ${isMehendi ? 'bg-white' : 'bg-white/60'} border border-wedding-gold/20 relative overflow-hidden event-card-pattern`}>
                  <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-prose mx-auto relative z-10 ${isReception ? 'text-wedding-gold-light' : 'text-gray-700'}`}
                    style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>
                    {content.description}
                  </p>
                </motion.div>
              )}

              {/* Baraat Section (Wedding only) */}
              {isWedding && content.baraatDescription && (
                <>
                  <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-wedding-navy" style={{ fontFamily: scriptFont, fontWeight: 500, letterSpacing: '0.03em' }}>
                      Baraat
                    </h1>
                    <OrnamentalDivider variant="ornate" />
                    <div className="mt-6 sm:mt-8 w-full flex justify-center overflow-hidden" style={{ maxHeight: '450px' }}>
                      <img src="/wedding-demo/images/baraat-image.svg" alt="" className="w-full h-auto" style={{ maxHeight: '500px', objectFit: 'contain', objectPosition: 'center' }} />
                    </div>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mb-6 sm:mb-8">
                    <div className="rounded-xl p-4 sm:p-6 bg-white/60 border border-wedding-gold/20 relative overflow-hidden event-card-pattern">
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-prose mx-auto relative z-10" style={{ fontFamily: 'Georgia, serif' }}>{content.baraatDescription}</p>
                    </div>
                  </motion.div>
                  {content.baraatTime && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}
                      className="rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 bg-white/70 border border-wedding-gold/30 relative overflow-hidden event-card-pattern">
                      <div className="text-center relative z-10">
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                          On {content.date} at {content.baraatTime}
                        </p>
                      </div>
                    </motion.div>
                  )}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}
                    className="rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 bg-white/80 border-2 border-wedding-gold/30 relative overflow-hidden event-card-pattern">
                    <div className="relative z-10">
                      <h2 className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-display mb-3 sm:mb-4 text-wedding-navy">
                        <span className="text-xl sm:text-2xl">📍</span><span>Venue</span>
                      </h2>
                      <OrnamentalDivider variant="simple" className="mb-3 sm:mb-4" />
                      <p className="text-base sm:text-lg md:text-xl font-semibold mb-2 leading-relaxed text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>Grand Heritage Resort & Spa</p>
                      <p className="text-sm sm:text-base md:text-lg mb-2 leading-relaxed text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>Front Entrance, Garden Terrace</p>
                      <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>123 Celebration Avenue, Mumbai, Maharashtra 400001</p>
                    </div>
                  </motion.div>
                </>
              )}

              {/* Hindu Wedding Section */}
              {isWedding && content.pherasDescription && (
                <>
                  <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-wedding-navy" style={{ fontFamily: scriptFont, fontWeight: 500, letterSpacing: '0.03em' }}>
                      Hindu Wedding
                    </h1>
                    <OrnamentalDivider variant="ornate" />
                    <div className="mt-6 sm:mt-8 w-full flex justify-center overflow-hidden" style={{ maxHeight: '250px' }}>
                      <img src="/wedding-demo/images/wedding-hand.svg" alt="" className="w-full h-auto" style={{ maxHeight: '300px', objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-6 sm:mb-8">
                    <div className="rounded-xl p-4 sm:p-6 bg-white/60 border border-wedding-gold/20 relative overflow-hidden event-card-pattern">
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-prose mx-auto relative z-10" style={{ fontFamily: 'Georgia, serif' }}>{content.pherasDescription}</p>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.17 }} className="mb-6 sm:mb-8">
                    <div className="rounded-2xl p-6 sm:p-8 bg-white/70 border border-wedding-gold/30 relative overflow-hidden event-card-pattern shadow-md">
                      <div className="text-center space-y-3 relative z-10">
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>On {content.date}</p>
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>at {content.time}</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.19 }} className="mb-6 sm:mb-8">
                    <div className="rounded-xl p-4 sm:p-6 bg-white/60 border border-wedding-gold/20 text-center relative overflow-hidden event-card-pattern">
                      <div className="relative z-10">
                        <h2 className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-display mb-3 sm:mb-4 text-wedding-navy">
                          <span className="text-xl sm:text-2xl">🍽️</span><span>Lunch</span>
                        </h2>
                        <OrnamentalDivider variant="simple" className="mb-3 sm:mb-4" />
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>Vegetarian Lunch to be served After Photo Session</p>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}

              {/* Date & Time (non-wedding) */}
              {!isWedding && (
                <div className="relative mb-6 sm:mb-8">
                  {isMehendi && (
                    <div className="absolute right-full top-0 bottom-0 flex items-center pointer-events-none z-[2]">
                      <img src="/wedding-demo/images/mehndi-girl-image.svg" alt="" className="h-full w-auto" />
                    </div>
                  )}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className={`rounded-2xl p-6 sm:p-8 relative overflow-hidden event-card-pattern shadow-md ${
                      isReception ? 'bg-wedding-gold/20 border-2 border-wedding-gold/40' : isMehendi ? 'bg-white border border-wedding-gold/30' : 'bg-white/70 border border-wedding-gold/30'
                    }`}>
                    <div className="text-center space-y-3 relative z-10">
                      <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed ${isReception ? 'text-wedding-gold-light' : 'text-gray-700'}`} style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>On {content.date}</p>
                      <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed ${isReception ? 'text-wedding-gold-light' : 'text-gray-700'}`} style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>at {content.time}</p>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Additional Info for Wedding */}
              {isWedding && content.additionalInfo && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                  className="rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 bg-white/60 border border-wedding-gold/20 text-center relative overflow-hidden event-card-pattern">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 relative z-10" style={{ fontFamily: 'Georgia, serif' }}>{content.additionalInfo}</p>
                </motion.div>
              )}

              {/* Cocktail Hour (Reception) */}
              {content.cocktailHour && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-center bg-wedding-gold/10 border border-wedding-gold/30 relative overflow-hidden event-card-pattern">
                  <p className="text-base sm:text-lg md:text-xl text-wedding-gold-light leading-relaxed relative z-10" style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>
                    <span className="font-semibold" style={receptionHeadingStyle}>Cocktail hour:</span> {content.cocktailHour}
                  </p>
                </motion.div>
              )}

              {/* Note (Reception) */}
              {isReception && content.note && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-center bg-wedding-gold/10 border border-wedding-gold/30 relative overflow-hidden event-card-pattern">
                  <p className="text-base sm:text-lg md:text-xl text-wedding-gold-light leading-relaxed relative z-10" style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>{content.note}</p>
                </motion.div>
              )}

              {/* Attire */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className={`rounded-xl ${(isMehendi || isWedding) ? 'p-3 sm:p-4' : 'p-4 sm:p-6'} mb-6 sm:mb-8 relative overflow-hidden event-card-pattern shadow-md ${
                  isWedding ? 'bg-white/80 border-2 border-wedding-gold/40' : isReception ? 'bg-wedding-gold/10 border border-wedding-gold/30' : isMehendi ? 'bg-white border border-wedding-gold/20' : 'bg-white/60 border border-wedding-gold/20'
                }`}>
                <div className="relative z-10">
                  <h2 className={`flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-display mb-3 sm:mb-4 ${isReception ? 'text-wedding-gold' : 'text-wedding-navy'}`} style={receptionHeadingStyle}>
                    <span className="text-xl sm:text-2xl">👗</span><span>Attire</span>
                  </h2>
                  <OrnamentalDivider variant="simple" className="mb-3 sm:mb-4" />
                  <p className={`text-base sm:text-lg md:text-xl whitespace-pre-line leading-relaxed text-center max-w-prose mx-auto ${isReception ? 'text-wedding-gold-light' : 'text-gray-700'}`}
                    style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>
                    {content.attire}
                  </p>
                </div>
              </motion.div>

              {/* Dinner (Reception) */}
              {isReception && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                  className="rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 bg-wedding-gold/10 border border-wedding-gold/30 relative overflow-hidden event-card-pattern">
                  <div className="relative z-10">
                    <h2 className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-display mb-3 sm:mb-4 text-wedding-gold" style={receptionHeadingStyle}>
                      <span className="text-xl sm:text-2xl">🍽️</span><span>Dinner</span>
                    </h2>
                    <OrnamentalDivider variant="simple" className="mb-3 sm:mb-4" />
                    <p className="text-base sm:text-lg md:text-xl text-wedding-gold-light leading-relaxed text-center" style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>Dinner to be served</p>
                  </div>
                </motion.div>
              )}

              {/* Dinner (Mehndi) */}
              {isMehendi && content.additionalInfo && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                  className="rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-md bg-white border border-wedding-gold/20 relative overflow-hidden event-card-pattern">
                  <div className="relative z-10">
                    <h2 className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-display mb-3 sm:mb-4 text-wedding-navy">
                      <span className="text-xl sm:text-2xl">🍽️</span><span>Dinner</span>
                    </h2>
                    <OrnamentalDivider variant="simple" className="mb-3 sm:mb-4" />
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-prose mx-auto" style={{ fontFamily: 'Georgia, serif' }}>{content.additionalInfo}</p>
                  </div>
                </motion.div>
              )}

              {/* Venue */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className={`rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 relative overflow-hidden event-card-pattern shadow-md ${
                  isReception ? 'bg-wedding-gold/20 border-2 border-wedding-gold/40' : isMehendi ? 'bg-white border-2 border-wedding-gold/30' : 'bg-white/80 border-2 border-wedding-gold/30'
                }`}>
                <div className="relative z-10">
                  <h2 className={`flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-display mb-3 sm:mb-4 ${isReception ? 'text-wedding-gold' : 'text-wedding-navy'}`} style={receptionHeadingStyle}>
                    <span className="text-xl sm:text-2xl">📍</span><span>Venue</span>
                  </h2>
                  <OrnamentalDivider variant="simple" className="mb-3 sm:mb-4" />
                  <p className={`text-base sm:text-lg md:text-xl font-semibold mb-2 leading-relaxed ${isReception ? 'text-wedding-gold-light' : 'text-gray-800'}`} style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>{content.venue}</p>
                  {content.venueDetails && <p className={`text-sm sm:text-base md:text-lg mb-2 leading-relaxed ${isReception ? 'text-wedding-gold-light/90' : 'text-gray-700'}`} style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>{content.venueDetails}</p>}
                  <p className={`text-sm sm:text-base md:text-lg mb-4 leading-relaxed ${isReception ? 'text-wedding-gold-light/90' : 'text-gray-700'}`} style={{ fontFamily: 'Georgia, serif', ...receptionTextStyle }}>{content.address}</p>
                  <div className="rounded-lg overflow-hidden border-2 border-wedding-gold/30 shadow-lg mt-4">
                    <iframe
                      src="https://www.google.com/maps?q=Gateway+of+India+Mumbai&output=embed"
                      width="100%" height="240" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full" title="Venue Location"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </WeddingPageTransition>
    </WeddingLayout>
  )
}
