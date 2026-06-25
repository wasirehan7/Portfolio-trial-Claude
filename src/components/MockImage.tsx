import { useState } from 'react'

interface MockImageProps {
  src: string
  alt?: string
  label?: string
  className?: string
  style?: React.CSSProperties
  gradientIndex?: number
}

const GRADIENTS = [
  'linear-gradient(135deg, #0d2b1a 0%, #1a5c32 60%, #2d4a20 100%)',
  'linear-gradient(135deg, #0a1a2e 0%, #1a3a5c 60%, #2a4a6a 100%)',
  'linear-gradient(135deg, #2a1a0a 0%, #5c3a1a 60%, #8a6040 100%)',
  'linear-gradient(135deg, #1a0a2a 0%, #3a1a5c 60%, #5a3a7a 100%)',
  'linear-gradient(135deg, #0a2a2a 0%, #1a5c5c 60%, #2a7a6a 100%)',
  'linear-gradient(135deg, #2a2a0a 0%, #5c5c1a 60%, #7a6a2a 100%)',
]

export default function MockImage({ src, label, className, style, gradientIndex = 0 }: MockImageProps) {
  const [failed, setFailed] = useState(false)

  const gradient = GRADIENTS[Math.abs(gradientIndex) % GRADIENTS.length]

  if (failed) {
    return (
      <div
        className={className}
        style={{
          background: gradient,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '12px',
          ...style,
        }}
      >
        {label && (
          <span
            style={{
              color: '#D7E2EA',
              opacity: 0.25,
              fontFamily: 'Kanit, sans-serif',
              fontSize: '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </span>
        )}
        {/* decorative contour lines */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 60 Q25 52 50 58 Q75 64 100 56" stroke="#D7E2EA" strokeOpacity="0.06" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke"/>
          <path d="M0 72 Q25 66 50 70 Q75 76 100 68" stroke="#D7E2EA" strokeOpacity="0.05" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke"/>
          <line x1="0" y1="50" x2="100" y2="50" stroke="#D7E2EA" strokeOpacity="0.04" strokeWidth="0.4" vectorEffect="non-scaling-stroke"/>
        </svg>
      </div>
    )
  }

  return (
    <div className={className} style={{ position: 'relative', ...style }}>
      <img
        src={src}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
