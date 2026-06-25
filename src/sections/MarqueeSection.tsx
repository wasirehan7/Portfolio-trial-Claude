import { useEffect, useRef, useState } from 'react'
import MockImage from '../components/MockImage'

const RENDER_COUNT = 21
const images = Array.from({ length: RENDER_COUNT }, (_, i) =>
  `/placeholder-render-${String(i + 1).padStart(2, '0')}.jpg`
)

const row1 = images.slice(0, 11)
const row2 = images.slice(11, 21)

function tripled(arr: string[]) {
  return [...arr, ...arr, ...arr]
}

const TILE_STYLE: React.CSSProperties = {
  width: '420px',
  height: '270px',
  borderRadius: '16px',
  flexShrink: 0,
  overflow: 'hidden',
  position: 'relative',
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(raw)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden"
      style={{ background: '#0C0C0C', paddingTop: 'clamp(80px, 10vw, 160px)', paddingBottom: '40px' }}
    >
      {/* Row 1 — scrolls right */}
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {tripled(row1).map((src, i) => (
          <MockImage
            key={i}
            src={src}
            label={`Render ${(i % row1.length) + 1}`}
            style={TILE_STYLE}
            gradientIndex={i % 6}
          />
        ))}
      </div>

      {/* Row 2 — scrolls left */}
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
      >
        {tripled(row2).map((src, i) => (
          <MockImage
            key={i}
            src={src}
            label={`Render ${(i % row2.length) + 12}`}
            style={TILE_STYLE}
            gradientIndex={(i + 2) % 6}
          />
        ))}
      </div>
    </section>
  )
}
