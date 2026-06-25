import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import MockImage from '../components/MockImage'

const BIO =
  "With a background spanning architecture and landscape architecture, i focus on masterplanning, public space, and the technical detail that makes a design buildable. i've worked across projects from cultural landmarks to residential gardens, and i care about design that holds up long after the render is gone. Let's build something that lasts."

const corners = [
  {
    src: '/placeholder-corner-01.png',
    alt: 'Site plan fragment',
    label: 'Site Plan',
    gradientIndex: 0,
    className: 'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    style: { aspectRatio: '1', borderRadius: '20px', overflow: 'hidden' } as React.CSSProperties,
    delay: 0.1,
    x: -80,
  },
  {
    src: '/placeholder-corner-02.png',
    alt: 'Material swatch',
    label: 'Material',
    gradientIndex: 3,
    className: 'absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    style: { aspectRatio: '1', borderRadius: '20px', overflow: 'hidden' } as React.CSSProperties,
    delay: 0.25,
    x: -80,
  },
  {
    src: '/placeholder-corner-03.png',
    alt: 'Sketch detail',
    label: 'Sketch',
    gradientIndex: 1,
    className: 'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    style: { aspectRatio: '1', borderRadius: '20px', overflow: 'hidden' } as React.CSSProperties,
    delay: 0.15,
    x: 80,
  },
  {
    src: '/placeholder-corner-04.png',
    alt: 'Topography contour',
    label: 'Contour',
    gradientIndex: 2,
    className: 'absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    style: { aspectRatio: '1', borderRadius: '20px', overflow: 'hidden' } as React.CSSProperties,
    delay: 0.3,
    x: 80,
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative corner images */}
      {corners.map((c) => (
        <FadeIn key={c.src} delay={c.delay} x={c.x} y={0} duration={0.9} className={c.className}>
          <MockImage
            src={c.src}
            label={c.label}
            gradientIndex={c.gradientIndex}
            style={{ ...c.style, width: '100%', height: '100%' }}
          />
        </FadeIn>
      ))}

      {/* Content column */}
      <div className="relative z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div style={{ marginTop: 'clamp(36px, 6vw, 72px)' }}>
          <AnimatedText
            text={BIO}
            className="font-medium text-center leading-relaxed max-w-[560px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <div style={{ marginTop: 'clamp(56px, 7vw, 96px)' }}>
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
