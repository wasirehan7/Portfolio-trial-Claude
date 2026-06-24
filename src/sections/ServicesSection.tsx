import FadeIn from '../components/FadeIn'

const services = [
  {
    num: '01',
    name: 'Concept & Masterplanning',
    desc: 'Developing the overarching vision and spatial strategy for a site — from initial concept sketches through to a coherent masterplan that balances program, landscape character, and constraints.',
  },
  {
    num: '02',
    name: 'Public Space Design',
    desc: 'Designing parks, plazas, and shared civic spaces that hold up to real use — durable materials, clear circulation, and a sense of place that outlasts the opening photos.',
  },
  {
    num: '03',
    name: 'Residential Landscaping',
    desc: 'Garden and outdoor living design for private clients — planting, hardscape, and layout tailored to how the space will actually be lived in.',
  },
  {
    num: '04',
    name: 'Technical Detailing & Construction Drawings',
    desc: 'Construction-ready documentation — details, sections, and specifications that translate a design intent into something a contractor can actually build.',
  },
  {
    num: '05',
    name: '3D Visualization & Renders',
    desc: "Photoreal and conceptual renders that communicate a design's atmosphere and materiality to clients, planning boards, and collaborators before a shovel hits the ground.",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center leading-none tracking-tight"
          style={{
            color: '#0C0C0C',
            fontSize: 'clamp(3rem, 12vw, 160px)',
            marginBottom: 'clamp(56px, 8vw, 112px)',
          }}
        >
          Services
        </h2>
      </FadeIn>

      {/* Service list */}
      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14"
              style={{
                borderTop: '1px solid rgba(12,12,12,0.15)',
                borderBottom: i === services.length - 1 ? '1px solid rgba(12,12,12,0.15)' : 'none',
                padding: 'clamp(28px, 4vw, 48px) 0',
              }}
            >
              {/* Number */}
              <span
                className="font-black leading-none flex-shrink-0"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(2.5rem, 8vw, 120px)',
                  lineHeight: 1,
                  width: 'clamp(60px, 10vw, 160px)',
                }}
              >
                {s.num}
              </span>

              {/* Name + description */}
              <div className="flex flex-col gap-2 sm:gap-3 pt-1">
                <p
                  className="font-medium uppercase leading-tight"
                  style={{
                    color: '#0C0C0C',
                    fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                  }}
                >
                  {s.name}
                </p>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
