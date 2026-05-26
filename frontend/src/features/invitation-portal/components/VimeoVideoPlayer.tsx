import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VimeoVideoPlayerProps {
  videoId: string
  className?: string
  title?: string
}

export default function VimeoVideoPlayer({
  videoId,
  className = '',
  title = 'Wedding Invitation Video',
}: VimeoVideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hasLoaded, setHasLoaded] = useState(false)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    let mounted = true
    if (scriptLoadedRef.current || document.getElementById('vimeo-player-script')) {
      if (mounted) { setIsLoading(false); setHasLoaded(true) }
      return
    }
    const script = document.createElement('script')
    script.src = 'https://player.vimeo.com/api/player.js'
    script.async = true
    script.id = 'vimeo-player-script'
    script.onload = () => { scriptLoadedRef.current = true; if (mounted) { setIsLoading(false); setHasLoaded(true) } }
    script.onerror = () => { if (mounted) { setIsLoading(false); setError('Failed to load video player') } }
    document.head.appendChild(script)
    return () => { mounted = false }
  }, [])

  const embedUrl = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&byline=0&title=0&portrait=0`

  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-wedding-gold/30 bg-wedding-cream">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
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
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title={title}
              onLoad={() => { setIsLoading(false); setHasLoaded(true) }}
              onError={() => setError('Failed to load video')}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  )
}
