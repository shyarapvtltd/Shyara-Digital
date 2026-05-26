import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DEMO_BASE = '/invitation-website/demo'

interface WeddingNavigationProps {
  eventAccess: string[]
  guestName?: string
}

export default function WeddingNavigation({ eventAccess, guestName }: WeddingNavigationProps) {
  const location = useLocation()
  const pathname = location.pathname
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const navItems: Array<{ href: string; label: string; icon: string; iconType?: 'image' | 'emoji' }> = [
    { href: DEMO_BASE, label: 'About Rahul and Priya', icon: '🏠', iconType: 'emoji' },
  ]

  if (eventAccess?.includes('mehndi')) {
    navItems.push({ href: `${DEMO_BASE}/events/mehndi`, label: 'Mehndi', icon: '/wedding-demo/images/mehndi-icon.png', iconType: 'image' })
  }
  if (eventAccess?.includes('wedding')) {
    navItems.push({ href: `${DEMO_BASE}/events/wedding`, label: 'Baraat and Wedding', icon: '/wedding-demo/images/Baraat_Logo-removebg-preview.png', iconType: 'image' })
  }
  if (eventAccess?.includes('reception')) {
    navItems.push({ href: `${DEMO_BASE}/events/reception`, label: 'Reception', icon: '/wedding-demo/images/reception-icon.png', iconType: 'image' })
  }

  navItems.push(
    { href: `${DEMO_BASE}/save-the-date`, label: 'Save the Date', icon: '📅', iconType: 'emoji' },
    { href: `${DEMO_BASE}/venue-travel`, label: 'Travel and Venue', icon: '📍', iconType: 'emoji' },
    { href: `${DEMO_BASE}/gallery`, label: 'Gallery', icon: '📸', iconType: 'emoji' },
    { href: `${DEMO_BASE}/rsvp`, label: 'RSVP', icon: '💌', iconType: 'emoji' },
    { href: `${DEMO_BASE}/dashboard`, label: 'Dashboard', icon: '👑', iconType: 'emoji' },
  )

  return (
    <>
      {/* Desktop Left Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white shadow-lg border-r-2 border-wedding-gold/30 z-[100] flex-col">
        <div className="flex-shrink-0 px-4 py-4 border-b-2 border-wedding-gold/20">
          <Link to={DEMO_BASE} className="block">
            <h1 className="text-base font-display font-bold text-wedding-gold">
              From the Families of Rahul and Priya
            </h1>
            {guestName && <p className="text-xs text-gray-600 mt-1">Hi, {guestName}!</p>}
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain py-4 px-2 min-h-0">
          <div className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 min-h-[48px] ${
                    isActive
                      ? 'bg-wedding-gold text-white shadow-md font-semibold'
                      : 'bg-white/90 text-wedding-navy hover:bg-wedding-cream hover:text-wedding-gold'
                  }`}
                >
                  {item.iconType === 'image' ? (
                    <div className="w-6 h-6 relative flex-shrink-0">
                      <img src={item.icon} alt={item.label} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                  )}
                  <span className="font-medium text-sm flex-1">{item.label}</span>
                  {isActive && (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-white flex-shrink-0">✓</motion.span>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      </aside>

      {/* Mobile Top Bar */}
      <nav className="md:hidden sticky top-0 z-[100] bg-white/98 backdrop-blur-lg shadow-lg border-b-2 border-wedding-gold/30">
        <div className="flex items-center justify-between px-4 py-3 gap-3">
          <div className="flex-shrink-0 min-w-[140px]">
            <Link to={DEMO_BASE} className="block">
              <h1 className="text-base font-display font-bold text-wedding-gold">
                From the Families of Rahul and Priya
              </h1>
              {guestName && <p className="text-xs text-gray-600">Hi, {guestName}!</p>}
            </Link>
          </div>

          <button
            className="p-3 -mr-2 rounded-xl transition-colors flex items-center gap-2 flex-shrink-0 active:bg-wedding-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium text-wedding-navy">Menu</span>
            <motion.div animate={isMobileMenuOpen ? 'open' : 'closed'} className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }} className="w-full h-0.5 rounded-full origin-center transition-all bg-wedding-navy" />
              <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="w-full h-0.5 rounded-full transition-all bg-wedding-navy" />
              <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }} className="w-full h-0.5 rounded-full origin-center transition-all bg-wedding-navy" />
            </motion.div>
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 z-[9998]"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl z-[9999] flex flex-col h-screen"
              >
                <div className="flex-shrink-0 bg-white border-b-2 border-wedding-gold/20 px-4 py-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-display text-wedding-navy font-bold">Menu</h2>
                    {guestName && <p className="text-sm text-gray-600 truncate">Welcome, {guestName}</p>}
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg active:bg-wedding-cream transition-colors flex-shrink-0 ml-2" aria-label="Close menu">
                    <svg className="w-6 h-6 text-wedding-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-4 min-h-0" style={{ WebkitOverflowScrolling: 'touch' }}>
                  <div className="space-y-2 pb-48">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.href
                      return (
                        <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                          <Link
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 min-h-[56px] ${
                              isActive
                                ? 'bg-wedding-gold text-white shadow-lg'
                                : 'bg-wedding-cream text-wedding-navy active:bg-wedding-gold-light active:scale-[0.98]'
                            }`}
                          >
                            {item.iconType === 'image' ? (
                              <div className="w-8 h-8 relative flex-shrink-0">
                                <img src={item.icon} alt={item.label} width={32} height={32} className="w-full h-full object-contain" />
                              </div>
                            ) : (
                              <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            )}
                            <span className={`font-medium text-base flex-1 ${isActive ? 'font-semibold' : ''}`}>{item.label}</span>
                            {isActive && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-white flex-shrink-0">✓</motion.span>}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex-shrink-0 px-4 py-4 border-t border-wedding-gold/20 bg-white">
                  <p className="text-xs text-center text-gray-500">Rahul & Priya&apos;s Wedding</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
