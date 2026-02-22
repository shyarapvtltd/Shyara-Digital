import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WeddingLayout from './components/WeddingLayout'
import FloatingPetals from './components/FloatingPetals'
import OrnamentalDivider from './components/OrnamentalDivider'
import WeddingPageTransition from './components/WeddingPageTransition'
import { mockGuest, galleryImages } from './mock-data'
import './wedding-demo.css'

export default function DemoGallery() {
  const guest = mockGuest
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const goNext = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))
  const goPrev = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null))

  return (
    <WeddingLayout eventAccess={guest.eventAccess} guestName={guest.name}>
      <FloatingPetals />
      <WeddingPageTransition>
        <div className="min-h-screen bg-gradient-wedding relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-wedding-navy mb-4 sm:mb-6"
                  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 500, letterSpacing: '0.03em' }}>
                  Photo Gallery
                </h1>
                <OrnamentalDivider variant="ornate" className="mb-4 sm:mb-6" />
                <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                  A collection of our beautiful moments together
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
                    onClick={() => openLightbox(index)}
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </WeddingPageTransition>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-3xl hover:text-wedding-gold transition-colors z-10">&times;</button>
            <button onClick={(e) => { e.stopPropagation(); goPrev() }} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-wedding-gold transition-colors z-10">&lsaquo;</button>
            <button onClick={(e) => { e.stopPropagation(); goNext() }} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-wedding-gold transition-colors z-10">&rsaquo;</button>
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[selectedImage].src.replace('w=600', 'w=1200')}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </WeddingLayout>
  )
}
