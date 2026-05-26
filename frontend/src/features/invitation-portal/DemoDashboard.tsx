import { useState } from 'react'
import { motion } from 'framer-motion'
import WeddingLayout from './components/WeddingLayout'
import OrnamentalDivider from './components/OrnamentalDivider'
import WeddingPageTransition from './components/WeddingPageTransition'
import { mockGuest, mockStats, mockGuestList } from './mock-data'
import './wedding-demo.css'

export default function DemoDashboard() {
  const guest = mockGuest
  const stats = mockStats
  const guests = mockGuestList
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGuests = guests.filter((g) =>
    g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.phone?.includes(searchTerm) ||
    g.email?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <WeddingLayout eventAccess={guest.eventAccess} guestName="Admin">
      <WeddingPageTransition>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Header */}
              <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-wedding-navy mb-4"
                  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 500 }}>
                  Admin Dashboard
                </h1>
                <OrnamentalDivider variant="ornate" className="mb-4" />
                <div className="inline-block p-2 px-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800 font-medium">Demo Mode - Showing sample data</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <StatCard title="Total Invite Links" value={stats.totalInviteLinks} icon="🔗" color="bg-blue-50 border-blue-200" />
                <StatCard title="Total Attendees (Invite)" value={stats.totalAttendeesInviteBased} icon="👥" color="bg-green-50 border-green-200" />
                <StatCard title="RSVPs Received" value={Object.values(stats.rsvpBased).reduce((sum, e) => sum + e.totalAttendees, 0)} icon="💌" color="bg-purple-50 border-purple-200" />
                <StatCard title="Pending RSVPs" value={stats.totalInviteLinks - guests.filter((g) => g.rsvpSubmitted).length} icon="⏳" color="bg-amber-50 border-amber-200" />
              </div>

              {/* Event Breakdown */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-display text-wedding-navy mb-6">Event Breakdown</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(['mehndi', 'wedding', 'reception'] as const).map((event) => (
                    <div key={event} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="text-lg font-semibold text-wedding-navy mb-3 capitalize flex items-center gap-2">
                        <img src={`/wedding-demo/images/${event}-icon.png`} alt="" className="w-6 h-6" />
                        {event === 'wedding' ? 'Hindu Wedding' : event.charAt(0).toUpperCase() + event.slice(1)}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Invited</span>
                          <span className="font-semibold text-wedding-navy">{stats.inviteBased[event]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">RSVP&apos;d</span>
                          <span className="font-semibold text-green-600">{stats.rsvpBased[event].totalAttendees}</span>
                        </div>
                        {event === 'reception' && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Veg</span>
                              <span className="font-semibold text-emerald-600">{stats.rsvpBased[event].veg}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Non-Veg</span>
                              <span className="font-semibold text-orange-600">{stats.rsvpBased[event].nonVeg}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Guest Table */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl sm:text-2xl font-display text-wedding-navy">Guest List</h2>
                  <input
                    type="text"
                    placeholder="Search guests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
                  />
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-wedding-gold/30">
                        <th className="text-left py-3 px-2 font-semibold text-wedding-navy">Name</th>
                        <th className="text-left py-3 px-2 font-semibold text-wedding-navy hidden sm:table-cell">Contact</th>
                        <th className="text-left py-3 px-2 font-semibold text-wedding-navy">Events</th>
                        <th className="text-left py-3 px-2 font-semibold text-wedding-navy"># Guests</th>
                        <th className="text-left py-3 px-2 font-semibold text-wedding-navy">RSVP</th>
                        <th className="text-left py-3 px-2 font-semibold text-wedding-navy hidden md:table-cell">Menu</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredGuests.map((g, index) => (
                        <motion.tr key={g.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.05 }}
                          className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2 font-medium text-wedding-navy">{g.name}</td>
                          <td className="py-3 px-2 text-gray-600 hidden sm:table-cell">
                            {g.phone || g.email || '-'}
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex flex-wrap gap-1">
                              {g.eventAccess.map((e) => (
                                <span key={e} className="px-2 py-0.5 text-xs rounded-full bg-wedding-cream text-wedding-navy font-medium capitalize">{e}</span>
                              ))}
                            </div>
                          </td>
                          <td className="py-3 px-2 text-center">{g.numberOfAttendees}</td>
                          <td className="py-3 px-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${g.rsvpSubmitted ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                              {g.rsvpSubmitted ? 'Submitted' : 'Pending'}
                            </span>
                          </td>
                          <td className="py-3 px-2 hidden md:table-cell capitalize text-gray-600">
                            {g.menuPreference || '-'}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredGuests.length === 0 && (
                  <div className="text-center py-8 text-gray-500">No guests match your search.</div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </WeddingPageTransition>
    </WeddingLayout>
  )
}

function StatCard({ title, value, icon, color }: { title: string; value: number; icon: string; color: string }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      className={`rounded-xl p-5 border ${color} shadow-sm`}>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <p className="text-sm text-gray-600 font-medium">{title}</p>
      </div>
      <p className="text-3xl font-bold text-wedding-navy">{value}</p>
    </motion.div>
  )
}
