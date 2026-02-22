export interface MockGuest {
  id: string
  name: string
  phone: string | null
  email: string | null
  eventAccess: string[]
  allowedDevices: string[]
  hasPhone: boolean
  tokenUsedFirstTime: string | null
  maxDevicesAllowed: number
  numberOfAttendees: number
  createdAt: string
  token: string
  preferencesSubmitted: boolean
  rsvpSubmitted: boolean
  rsvpStatus: Record<string, string> | null
  menuPreference: string | null
  numberOfAttendeesPerEvent: Record<string, number> | null
}

export interface MockEvent {
  slug: string
  title: string
  date: string
  time: string
  venue: string
  address: string
  dressCode: string
  mapEmbedUrl: string
  description: string
}

export interface MockStats {
  totalInviteLinks: number
  totalAttendeesInviteBased: number
  inviteBased: { mehndi: number; wedding: number; reception: number }
  rsvpBased: {
    mehndi: { totalAttendees: number; veg: number; nonVeg: number }
    wedding: { totalAttendees: number; veg: number; nonVeg: number }
    reception: { totalAttendees: number; veg: number; nonVeg: number }
  }
}

export const mockGuest: MockGuest = {
  id: 'demo-guest-1',
  name: 'Guest',
  phone: null,
  email: null,
  eventAccess: ['mehndi', 'wedding', 'reception'],
  allowedDevices: [],
  hasPhone: false,
  tokenUsedFirstTime: null,
  maxDevicesAllowed: 3,
  numberOfAttendees: 4,
  createdAt: '2025-01-15T10:00:00Z',
  token: 'demo',
  preferencesSubmitted: false,
  rsvpSubmitted: false,
  rsvpStatus: null,
  menuPreference: null,
  numberOfAttendeesPerEvent: null,
}

export const mockEvents: Record<string, MockEvent> = {
  mehndi: {
    slug: 'mehndi',
    title: 'Mehndi Ceremony',
    date: '2025-03-20',
    time: '6PM',
    venue: 'Grand Heritage Resort & Spa',
    address: '123 Celebration Avenue, Mumbai, Maharashtra 400001',
    dressCode: 'Indian Traditional / Festive Colors',
    mapEmbedUrl: 'https://www.google.com/maps?q=Gateway+of+India+Mumbai&output=embed',
    description: 'Join us for an evening of mehndi, music, and celebration.',
  },
  wedding: {
    slug: 'wedding',
    title: 'Hindu Wedding Ceremony',
    date: '2025-03-21',
    time: '10AM',
    venue: 'Grand Heritage Resort & Spa',
    address: '123 Celebration Avenue, Mumbai, Maharashtra 400001',
    dressCode: 'Indian Traditional / Formal',
    mapEmbedUrl: 'https://www.google.com/maps?q=Gateway+of+India+Mumbai&output=embed',
    description: 'Witness the sacred union of Rahul and Priya.',
  },
  reception: {
    slug: 'reception',
    title: 'Reception',
    date: '2025-03-21',
    time: '6PM',
    venue: 'Grand Heritage Resort & Spa',
    address: '123 Celebration Avenue, Mumbai, Maharashtra 400001',
    dressCode: 'Cocktail / Semi-Formal',
    mapEmbedUrl: 'https://www.google.com/maps?q=Gateway+of+India+Mumbai&output=embed',
    description: 'Celebrate with us at the grand reception.',
  },
}

export const saveTheDateEvents = {
  mehndi: {
    name: 'Mehndi',
    date: '20th Day of March',
    time: "Six O'Clock in the Evening",
    icon: '/wedding-demo/images/mehndi-icon.png',
    slug: 'mehndi',
  },
  baraat: {
    name: 'Baraat',
    date: '21st Day of March',
    time: "Thirty Minutes past Nine O'Clock in the Morning",
    icon: '/wedding-demo/images/Baraat_Logo-removebg-preview.png',
    slug: 'baraat',
  },
  wedding: {
    name: 'Hindu Wedding Ceremony',
    date: '21st Day of March',
    time: "Ten O'Clock in the Morning",
    icon: '/wedding-demo/images/wedding-icon.png',
    slug: 'wedding',
  },
  reception: {
    name: 'Reception',
    date: '21st Day of March',
    time: "Five O'Clock in the Evening",
    icon: '/wedding-demo/images/reception-icon.png',
    slug: 'reception',
  },
}

export const mockStats: MockStats = {
  totalInviteLinks: 142,
  totalAttendeesInviteBased: 568,
  inviteBased: { mehndi: 89, wedding: 142, reception: 142 },
  rsvpBased: {
    mehndi: { totalAttendees: 67, veg: 0, nonVeg: 0 },
    wedding: { totalAttendees: 89, veg: 0, nonVeg: 0 },
    reception: { totalAttendees: 134, veg: 78, nonVeg: 56 },
  },
}

export const mockGuestList: MockGuest[] = [
  { ...mockGuest, id: '1', name: 'Rahul Sharma', phone: '+919876543210', email: 'rahul@example.com', token: 'abc123', eventAccess: ['mehndi', 'wedding', 'reception'], numberOfAttendees: 4, rsvpSubmitted: true, rsvpStatus: { mehndi: 'yes', wedding: 'yes', reception: 'yes' }, menuPreference: 'veg', preferencesSubmitted: true, numberOfAttendeesPerEvent: { mehndi: 3, wedding: 4, reception: 4 }, createdAt: '2025-01-10T10:00:00Z' },
  { ...mockGuest, id: '2', name: 'Priya Patel', phone: '+919876543211', email: 'priya@example.com', token: 'def456', eventAccess: ['reception'], numberOfAttendees: 2, rsvpSubmitted: true, rsvpStatus: { reception: 'yes' }, menuPreference: 'non-veg', preferencesSubmitted: true, numberOfAttendeesPerEvent: { reception: 2 }, createdAt: '2025-01-12T10:00:00Z' },
  { ...mockGuest, id: '3', name: 'Amit Kumar', phone: '+919876543212', email: null, token: 'ghi789', eventAccess: ['mehndi', 'wedding', 'reception'], numberOfAttendees: 6, rsvpSubmitted: false, createdAt: '2025-01-14T10:00:00Z' },
  { ...mockGuest, id: '4', name: 'Sneha Gupta', phone: '+919876543213', email: 'sneha@example.com', token: 'jkl012', eventAccess: ['wedding', 'reception'], numberOfAttendees: 3, rsvpSubmitted: true, rsvpStatus: { wedding: 'yes', reception: 'yes' }, menuPreference: 'both', preferencesSubmitted: true, numberOfAttendeesPerEvent: { wedding: 3, reception: 3 }, createdAt: '2025-01-16T10:00:00Z' },
  { ...mockGuest, id: '5', name: 'Vikram Singh', phone: null, email: 'vikram@example.com', token: 'mno345', eventAccess: ['mehndi', 'wedding', 'reception'], numberOfAttendees: 5, rsvpSubmitted: false, createdAt: '2025-01-18T10:00:00Z' },
]

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', alt: 'Wedding ceremony' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600', alt: 'Wedding decorations' },
  { id: 3, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600', alt: 'Wedding couple' },
  { id: 4, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600', alt: 'Wedding rings' },
  { id: 5, src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600', alt: 'Wedding flowers' },
  { id: 6, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600', alt: 'Wedding reception' },
  { id: 7, src: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600', alt: 'Wedding venue' },
  { id: 8, src: 'https://images.unsplash.com/photo-1549417229-7686ac5595fd?w=600', alt: 'Wedding dance' },
  { id: 9, src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600', alt: 'Mehndi ceremony' },
  { id: 10, src: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=600', alt: 'Wedding attire' },
  { id: 11, src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600', alt: 'Wedding candles' },
  { id: 12, src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600', alt: 'Wedding cake' },
]
