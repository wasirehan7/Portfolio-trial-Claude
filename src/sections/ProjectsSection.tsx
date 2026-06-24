import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

const projects = [
  {
    num: '01',
    category: 'Public Space',
    name: '[Project Name TBD]',
    images: [
      '/placeholder-project-01-a.jpg',
      '/placeholder-project-01-b.jpg',
      '/placeholder-project-01-c.jpg',
    ],
  },
  {
    num: '02',
    category: 'Masterplanning',
    name: '[Project Name TBD]',
    images: [
      '/placeholder-project-02-a.jpg',
      '/placeholder-project-02-b.jpg',
      '/placeholder-project-02-c.jpg',
    ],
  },
  {
    num: '03',
    category: 'Residential',
    name: '[Project Name TBD]',
    images: [
      '/placeholder-project-03-a.jpg',
      '/placeholder-project-03-b.jpg',
      '/placeholder-project-03-c.jpg',
    ],
  },
]

const TOTAL = projects.length

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const targetScale = 1 - (TOTAL - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  const imgPlaceholderStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
    borderRadius: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#D7E2EA',
    fontSize: '0.75rem',
    opacity: 0.3,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontFamily: 'Kanit, sans-serif',
  }

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${96 + index * 28}px`, height: '85vh' }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top center', background: '#0C0C0C' }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col gap-4 sm:gap-6"
      >
        {/* Top row */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
            >
              {project.num}
            </span>
            <span
              className="font-medium uppercase tracking-widest opacity-50"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
            >
              {project.category}
            </span>
          </div>
          <span
            className="font-medium uppercase tracking-wide"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 2vw, 1.5rem)' }}
          >
            {project.name}
          </span>
          <LiveProjectButton />
        </div>

        {/* Images grid */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
          {/* Left column — 40% width, 2 stacked images */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <div
              className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden flex-shrink-0"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.images[0]}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const ph = document.createElement('div')
                  Object.assign(ph.style, { ...imgPlaceholderStyle, height: '100%' })
                  ph.textContent = 'Render A'
                  e.currentTarget.parentElement?.appendChild(ph)
                }}
              />
            </div>
            <div
              className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden flex-1"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.images[1]}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const ph = document.createElement('div')
                  Object.assign(ph.style, { ...imgPlaceholderStyle, height: '100%' })
                  ph.textContent = 'Render B'
                  e.currentTarget.parentElement?.appendChild(ph)
                }}
              />
            </div>
          </div>

          {/* Right column — 60% width, 1 tall image */}
          <div className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden flex-1">
            <img
              src={project.images[2]}
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const ph = document.createElement('div')
                Object.assign(ph.style, imgPlaceholderStyle)
                ph.textContent = 'Render C'
                e.currentTarget.parentElement?.appendChild(ph)
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pb-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center pt-16 sm:pt-20 md:pt-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', marginBottom: 'clamp(40px, 6vw, 80px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* Sticky cards */}
      <div>
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>

      {/* Spacer so last card scrolls away */}
      <div style={{ height: '40vh' }} />
    </section>
  )
}
