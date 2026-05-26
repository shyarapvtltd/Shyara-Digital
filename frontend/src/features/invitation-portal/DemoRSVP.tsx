import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WeddingLayout from './components/WeddingLayout'
import FloatingPetals from './components/FloatingPetals'
import OrnamentalDivider from './components/OrnamentalDivider'
import WeddingPageTransition from './components/WeddingPageTransition'
import { mockGuest } from './mock-data'
import './wedding-demo.css'

type AttendanceChoice = 'all' | 'some' | 'none' | null

const eventNames: Record<string, string> = {
  mehndi: 'Mehndi',
  wedding: 'Hindu Wedding',
  reception: 'Reception',
}

export default function DemoRSVP() {
  const guest = mockGuest
  const [submitted, setSubmitted] = useState(false)
  const [showDemoToast, setShowDemoToast] = useState(false)
  const [overallAttendanceChoice, setOverallAttendanceChoice] = useState<AttendanceChoice>(null)
  const [formData, setFormData] = useState({
    rsvpStatus: {} as Record<string, 'yes' | 'no'>,
    menuPreference: '' as 'veg' | 'non-veg' | 'both' | '',
    numberOfAttendeesPerEvent: {} as Record<string, number | undefined>,
    allEventsAttendeeCount: undefined as number | undefined,
  })

  const isReceptionOnly = guest.eventAccess.length === 1 && guest.eventAccess[0] === 'reception'
  const hasReceptionAccess = guest.eventAccess.includes('reception')

  const handleAttendanceChoice = (choice: AttendanceChoice) => {
    setOverallAttendanceChoice(choice)
    const newStatus: Record<string, 'yes' | 'no'> = {}

    if (choice === 'all') {
      guest.eventAccess.forEach((event) => { newStatus[event] = 'yes' })
    } else if (choice === 'none') {
      guest.eventAccess.forEach((event) => { newStatus[event] = 'no' })
    }

    setFormData((prev) => ({
      ...prev,
      rsvpStatus: newStatus,
      numberOfAttendeesPerEvent: {},
      allEventsAttendeeCount: undefined,
      menuPreference: choice === 'none' ? '' : prev.menuPreference,
    }))
  }

  const handleEventToggle = (event: string, status: 'yes' | 'no') => {
    setFormData((prev) => ({
      ...prev,
      rsvpStatus: { ...prev.rsvpStatus, [event]: status },
    }))
  }

  const handleSubmit = () => {
    setShowDemoToast(true)
    setSubmitted(true)
    setTimeout(() => setShowDemoToast(false), 4000)
  }

  const isFormValid = () => {
    if (!overallAttendanceChoice && !isReceptionOnly) return false
    if (overallAttendanceChoice === 'none') return true
    if (isReceptionOnly) {
      return formData.rsvpStatus['reception'] !== undefined
    }
    if (overallAttendanceChoice === 'all') {
      return formData.allEventsAttendeeCount !== undefined && formData.allEventsAttendeeCount > 0
    }
    if (overallAttendanceChoice === 'some') {
      const hasAtLeastOneYes = guest.eventAccess.some((e) => formData.rsvpStatus[e] === 'yes')
      return hasAtLeastOneYes
    }
    return false
  }

  if (submitted) {
    return (
      <WeddingLayout eventAccess={guest.eventAccess} guestName={guest.name}>
        <FloatingPetals />
        <WeddingPageTransition>
          <div className="min-h-screen bg-gradient-rsvp relative flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full wedding-card rounded-2xl shadow-2xl p-6 sm:p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl sm:text-3xl font-display text-wedding-navy mb-4">Thank You!</h2>
              <OrnamentalDivider variant="simple" className="mb-4" />
              <p className="text-gray-700 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Your RSVP has been received.</p>
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800 font-medium">This is a demo - no data was actually submitted</p>
              </div>
              <button onClick={() => { setSubmitted(false); setOverallAttendanceChoice(null); setFormData({ rsvpStatus: {}, menuPreference: '', numberOfAttendeesPerEvent: {}, allEventsAttendeeCount: undefined }) }}
                className="mt-6 px-6 py-3 bg-wedding-gold text-white rounded-lg font-semibold hover:bg-wedding-gold/90 transition-colors">
                Try Again
              </button>
            </motion.div>
          </div>
        </WeddingPageTransition>
      </WeddingLayout>
    )
  }

  return (
    <WeddingLayout eventAccess={guest.eventAccess} guestName={guest.name}>
      <FloatingPetals />
      <WeddingPageTransition>
        <div className="min-h-screen bg-gradient-rsvp relative">
          <div className="max-w-[640px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Header */}
              <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-wedding-navy mb-4 sm:mb-6"
                  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 500, letterSpacing: '0.03em' }}>
                  RSVP
                </h1>
                <OrnamentalDivider variant="ornate" className="mb-4 sm:mb-6" />
                <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                  We look forward to celebrating with you!
                </p>
              </div>

              {/* Demo Notice */}
              <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg text-center">
                <p className="text-sm text-amber-800 font-medium">Demo Mode - No data will be saved</p>
              </div>

              {/* Guest Info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="wedding-card rounded-2xl p-6 sm:p-8 mb-6 border-2 border-wedding-gold/30">
                <div className="text-center">
                  <p className="text-lg sm:text-xl text-gray-600 mb-1" style={{ fontFamily: 'Georgia, serif' }}>Dear</p>
                  <h2 className="text-2xl sm:text-3xl font-script text-wedding-navy mb-2">{guest.name}</h2>
                  <p className="text-sm text-gray-500">You are invited to {guest.eventAccess.length} event{guest.eventAccess.length > 1 ? 's' : ''} with up to {guest.numberOfAttendees} attendees</p>
                </div>
              </motion.div>

              {/* Attendance Choice (skip for reception-only) */}
              {!isReceptionOnly && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="wedding-card rounded-2xl p-6 sm:p-8 mb-6 border-2 border-wedding-gold/30">
                  <h3 className="text-xl font-display text-wedding-navy mb-4 text-center">Will you be attending?</h3>
                  <OrnamentalDivider variant="simple" className="mb-4" />
                  <div className="space-y-3">
                    {[
                      { value: 'all' as const, label: 'Yes, attending all events', emoji: '🎊' },
                      { value: 'some' as const, label: 'Attending some events', emoji: '📝' },
                      { value: 'none' as const, label: 'Unable to attend', emoji: '😔' },
                    ].map((option) => (
                      <button key={option.value} onClick={() => handleAttendanceChoice(option.value)}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center gap-3 ${
                          overallAttendanceChoice === option.value
                            ? 'border-wedding-gold bg-wedding-cream shadow-md'
                            : 'border-gray-200 bg-white hover:border-wedding-gold/50'
                        }`}>
                        <span className="text-2xl">{option.emoji}</span>
                        <span className="font-medium text-wedding-navy" style={{ fontFamily: 'Georgia, serif' }}>{option.label}</span>
                        {overallAttendanceChoice === option.value && <span className="ml-auto text-wedding-gold text-xl">✓</span>}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Reception-only RSVP */}
              {isReceptionOnly && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="wedding-card rounded-2xl p-6 sm:p-8 mb-6 border-2 border-wedding-gold/30">
                  <h3 className="text-xl font-display text-wedding-navy mb-4 text-center">Will you attend the Reception?</h3>
                  <OrnamentalDivider variant="simple" className="mb-4" />
                  <div className="flex gap-4 justify-center">
                    {['yes', 'no'].map((status) => (
                      <button key={status} onClick={() => { handleEventToggle('reception', status as 'yes' | 'no'); if (status === 'yes') setOverallAttendanceChoice('all'); else setOverallAttendanceChoice('none') }}
                        className={`px-8 py-3 rounded-xl border-2 font-medium transition-all ${
                          formData.rsvpStatus['reception'] === status
                            ? 'border-wedding-gold bg-wedding-cream shadow-md text-wedding-navy'
                            : 'border-gray-200 bg-white hover:border-wedding-gold/50 text-gray-700'
                        }`}>
                        {status === 'yes' ? '🎉 Yes' : '😔 No'}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Per-event selection (for "some" choice) */}
              <AnimatePresence>
                {overallAttendanceChoice === 'some' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="wedding-card rounded-2xl p-6 sm:p-8 mb-6 border-2 border-wedding-gold/30 overflow-hidden">
                    <h3 className="text-xl font-display text-wedding-navy mb-4 text-center">Select events you&apos;ll attend</h3>
                    <OrnamentalDivider variant="simple" className="mb-4" />
                    <div className="space-y-3">
                      {guest.eventAccess.map((event) => (
                        <div key={event} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                          <span className="font-medium text-wedding-navy" style={{ fontFamily: 'Georgia, serif' }}>{eventNames[event] || event}</span>
                          <div className="flex gap-2">
                            <button onClick={() => handleEventToggle(event, 'yes')}
                              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                formData.rsvpStatus[event] === 'yes' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-green-100'
                              }`}>Yes</button>
                            <button onClick={() => handleEventToggle(event, 'no')}
                              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                formData.rsvpStatus[event] === 'no' ? 'bg-red-400 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-100'
                              }`}>No</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Attendee count (for "all" or per-event for "some") */}
              <AnimatePresence>
                {overallAttendanceChoice === 'all' && !isReceptionOnly && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="wedding-card rounded-2xl p-6 sm:p-8 mb-6 border-2 border-wedding-gold/30 overflow-hidden">
                    <h3 className="text-xl font-display text-wedding-navy mb-4 text-center">Number of Attendees</h3>
                    <OrnamentalDivider variant="simple" className="mb-4" />
                    <p className="text-sm text-gray-500 text-center mb-4">Maximum {guest.numberOfAttendees} attendees</p>
                    <div className="flex justify-center">
                      <div className="flex items-center gap-4">
                        <button onClick={() => setFormData((p) => ({ ...p, allEventsAttendeeCount: Math.max(1, (p.allEventsAttendeeCount || 1) - 1) }))}
                          className="w-10 h-10 rounded-full border-2 border-wedding-gold text-wedding-gold font-bold text-xl hover:bg-wedding-cream transition-colors">-</button>
                        <span className="text-3xl font-bold text-wedding-navy w-12 text-center">{formData.allEventsAttendeeCount || 0}</span>
                        <button onClick={() => setFormData((p) => ({ ...p, allEventsAttendeeCount: Math.min(guest.numberOfAttendees, (p.allEventsAttendeeCount || 0) + 1) }))}
                          className="w-10 h-10 rounded-full border-2 border-wedding-gold text-wedding-gold font-bold text-xl hover:bg-wedding-cream transition-colors">+</button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Menu Preference (only for reception) */}
              <AnimatePresence>
                {hasReceptionAccess && overallAttendanceChoice && overallAttendanceChoice !== 'none' &&
                 (overallAttendanceChoice === 'all' || formData.rsvpStatus['reception'] === 'yes') && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="wedding-card rounded-2xl p-6 sm:p-8 mb-6 border-2 border-wedding-gold/30 overflow-hidden">
                    <h3 className="text-xl font-display text-wedding-navy mb-4 text-center">Menu Preference</h3>
                    <OrnamentalDivider variant="simple" className="mb-4" />
                    <p className="text-sm text-gray-500 text-center mb-4">For the Reception dinner</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'veg' as const, label: 'Vegetarian', emoji: '🥬' },
                        { value: 'non-veg' as const, label: 'Non-Vegetarian', emoji: '🍗' },
                        { value: 'both' as const, label: 'Both', emoji: '🍽️' },
                      ].map((option) => (
                        <button key={option.value} onClick={() => setFormData((p) => ({ ...p, menuPreference: option.value }))}
                          className={`p-3 rounded-xl border-2 transition-all text-center ${
                            formData.menuPreference === option.value
                              ? 'border-wedding-gold bg-wedding-cream shadow-md'
                              : 'border-gray-200 bg-white hover:border-wedding-gold/50'
                          }`}>
                          <div className="text-2xl mb-1">{option.emoji}</div>
                          <div className="text-xs font-medium text-wedding-navy">{option.label}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <AnimatePresence>
                {overallAttendanceChoice !== null && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                    className="text-center mt-8">
                    <button onClick={handleSubmit} disabled={!isFormValid()}
                      className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
                        isFormValid()
                          ? 'bg-wedding-gold text-white hover:bg-wedding-gold/90 shadow-lg hover:shadow-xl'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}>
                      {overallAttendanceChoice === 'none' ? 'Submit Regrets' : 'Submit RSVP'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </WeddingPageTransition>

      {/* Demo Toast */}
      <AnimatePresence>
        {showDemoToast && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[300] bg-wedding-navy text-white px-6 py-3 rounded-xl shadow-xl">
            <p className="font-medium">This is a demo - RSVP was not actually submitted</p>
          </motion.div>
        )}
      </AnimatePresence>
    </WeddingLayout>
  )
}
