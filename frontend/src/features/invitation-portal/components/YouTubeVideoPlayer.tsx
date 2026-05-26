import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface YouTubeVideoPlayerProps {
  videoId: string
  className?: string
  title?: string
  vertical?: boolean
}

export default function YouTubeVideoPlayer({
  videoId,
  className = '',
  title = 'Wedding Invitation Video',
  vertical = false,
}: YouTubeVideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`

  const containerClasses = vertical
    ? 'max-w-xs sm:max-w-sm mx-auto'
    : 'w-full'

  const aspectPadding = vertical ? '177.78%' : '56.25%'

  return (
    <div className={`relative ${className}`}>
      <div className={containerClasses}>
        <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-wedding-gold/30 bg-wedding-cream">
          <div className="relative w-full" style={{ paddingBottom: aspectPadding }}>
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-wedding-cream to-wedding-rose-pastel z-10"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 border-3 border-wedding-gold/30 border-t-wedding-gold rounded-full animate-spin mx-auto mb-3" />
                    <p className="text-wedding-navy/60 text-sm font-medium">Loading video...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-wedding-cream to-wedding-rose-pastel">
                <div className="text-center p-6">
                  <p className="text-wedding-navy/60 text-sm">{error}</p>
                </div>
              </div>
            ) : (
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                onLoad={() => setIsLoading(false)}
                onError={() => setError('Failed to load video')}
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
