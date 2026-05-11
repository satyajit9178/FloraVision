import { useId } from 'react'

const cardPath =
  'M 4 34 C 4 20, 9 12, 18 9 C 30 5, 37 17, 50 18 C 63 17, 70 5, 82 9 C 91 12, 96 20, 96 34 L 96 88 C 96 95, 91 98, 84 98 L 16 98 C 9 98, 4 95, 4 88 Z'

export default function CurvedCard({ children, className = '' }) {
  const id = useId().replace(/:/g, '')
  const fillId = `plant-card-fill-${id}`
  const glowId = `plant-card-glow-${id}`
  const blurId = `plant-card-blur-${id}`

  return (
    <div className={`plant-curved-card relative overflow-visible ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={fillId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(45, 72, 44, 0.74)" />
            <stop offset="48%" stopColor="rgba(21, 38, 22, 0.78)" />
            <stop offset="100%" stopColor="rgba(12, 24, 13, 0.86)" />
          </linearGradient>
          <radialGradient id={glowId} cx="44%" cy="18%" r="62%">
            <stop offset="0%" stopColor="rgba(120, 164, 94, 0.3)" />
            <stop offset="55%" stopColor="rgba(56, 88, 45, 0.14)" />
            <stop offset="100%" stopColor="rgba(9, 20, 10, 0)" />
          </radialGradient>
          <filter id={blurId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <path
          d={cardPath}
          fill="rgba(7, 16, 8, 0.68)"
          filter={`url(#${blurId})`}
        />
        <path
          d={cardPath}
          fill={`url(#${fillId})`}
        />
        <path
          d={cardPath}
          fill={`url(#${glowId})`}
          opacity="0.8"
        />
        <path
          d={cardPath}
          stroke="rgba(255,255,255,0.72)"
          strokeWidth="0.42"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}
