import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Heart {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  driftX: number[]
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const newHearts: Heart[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      driftX: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, Math.random() * 40 - 20, Math.random() * 40 - 20],
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-wedding-rose/15"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: [0, -100, -200, -300, -400],
            x: heart.driftX,
            opacity: [0, 0.2, 0.3, 0.2, 0],
            scale: [0.8, 1, 1.1, 1, 0.8],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}
