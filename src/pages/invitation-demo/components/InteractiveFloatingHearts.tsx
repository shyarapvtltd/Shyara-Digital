import { useEffect, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Heart {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  delay: number
  duration: number
}

export default function InteractiveFloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const basePositionsRef = useRef<Map<number, { x: number; y: number }>>(new Map())

  useEffect(() => {
    const checkDevice = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches
      setIsMobile(window.innerWidth < 768 || (!hasFinePointer && 'ontouchstart' in window))
    }
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setHearts(Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: 100,
        size: Math.random() * 15 + 20,
        opacity: Math.random() * 0.2 + 0.15,
        delay: Math.random() * 3,
        duration: Math.random() * 8 + 12,
      })))
    } else {
      const newHearts: Heart[] = []
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i, x: Math.random() * 10 + 18, y: Math.random() * 100,
          size: Math.random() * 20 + 15, opacity: Math.random() * 0.25 + 0.1,
          delay: Math.random() * 2, duration: Math.random() * 3 + 4,
        })
      }
      for (let i = 8; i < 17; i++) {
        newHearts.push({
          id: i, x: Math.random() * 25 + 70, y: Math.random() * 100,
          size: Math.random() * 20 + 15, opacity: Math.random() * 0.25 + 0.1,
          delay: Math.random() * 2, duration: Math.random() * 3 + 4,
        })
      }
      setHearts(newHearts)
    }
  }, [isMobile])

  useEffect(() => {
    if (isMobile) return
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  useEffect(() => {
    if (!isMobile && hearts.length > 0) {
      hearts.forEach((heart) => {
        if (!basePositionsRef.current.has(heart.id)) {
          basePositionsRef.current.set(heart.id, { x: heart.x, y: heart.y })
        }
      })
    }
  }, [hearts, isMobile])

  useEffect(() => {
    if (isMobile) return
    const updateHearts = () => {
      setHearts((prev) =>
        prev.map((heart) => {
          const basePos = basePositionsRef.current.get(heart.id)
          if (!basePos) return heart
          const dx = mousePosition.x - basePos.x
          const dy = mousePosition.y - basePos.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const influence = Math.max(0, 1 - distance / 40)
          const offsetX = distance > 0 ? (dx / distance) * 4 * influence : 0
          const offsetY = distance > 0 ? (dy / distance) * 4 * influence : 0
          return { ...heart, x: basePos.x + offsetX, y: basePos.y + offsetY }
        })
      )
      animationFrameRef.current = requestAnimationFrame(updateHearts)
    }
    animationFrameRef.current = requestAnimationFrame(updateHearts)
    return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current) }
  }, [mousePosition, isMobile])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{ fontSize: `${heart.size}px`, opacity: heart.opacity }}
          initial={isMobile ? { y: 0, x: 0, opacity: 0, scale: 0.8 } : { scale: 1, x: 0, y: 0 }}
          animate={
            isMobile
              ? {
                  y: ['0%', '-400%'],
                  x: ['0%', `${Math.random() * 40 - 20}%`, `${Math.random() * 40 - 20}%`, `${Math.random() * 40 - 20}%`],
                  opacity: [0, heart.opacity, heart.opacity, 0],
                  scale: [0.8, 1, 1.1, 0.8],
                }
              : {
                  left: `${heart.x}%`,
                  top: `${heart.y}%`,
                  x: [0, Math.sin(heart.id * 0.5) * 15, Math.sin(heart.id * 0.5 + Math.PI) * 15, 0],
                  y: [0, Math.cos(heart.id * 0.7) * 12, Math.cos(heart.id * 0.7 + Math.PI) * 12, 0],
                  scale: [1, 1.08, 1, 1.08, 1],
                  rotate: [0, 4, -4, 4, 0],
                }
          }
          transition={
            isMobile
              ? { duration: heart.duration, delay: heart.delay, repeat: Infinity, ease: 'easeOut', repeatDelay: Math.random() * 2 }
              : {
                  left: { duration: 0.6, ease: 'easeOut' },
                  top: { duration: 0.6, ease: 'easeOut' },
                  x: { duration: heart.duration, ease: 'easeInOut', repeat: Infinity },
                  y: { duration: heart.duration * 1.3, ease: 'easeInOut', repeat: Infinity },
                  scale: { duration: heart.duration * 0.8, ease: 'easeInOut', repeat: Infinity },
                  rotate: { duration: heart.duration * 1.5, ease: 'easeInOut', repeat: Infinity },
                }
          }
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}
