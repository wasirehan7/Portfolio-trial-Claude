import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import MockImage from '../components/MockImage'

const navLinks = ['About', 'Projects', 'Contact']

export default function HeroSection() {
  const handleNav = (label: string) => {
    const id = label.toLowerCase()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 bg-transparent border-none cursor-pointer"
              style={{ color: '#D7E2EA' }}
            >
              {link}
            </button>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden w-full px-4 sm:px-6">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center"
            style={{ fontSize: 'clamp(12vw, 17.5vw, 17.5vw)', marginTop: 'clamp(0px, 2vw, 24px)' }}
          >
            Rehan Wasi
          </h1>
        </FadeIn>
      </div>

      {/* Portrait — centered absolutely */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <MockImage
            src="/placeholder-portrait.jpg"
            label="Portrait Photo"
            gradientIndex={1}
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] select-none"
            style={{
              height: 'clamp(360px, 55vh, 680px)',
              borderRadius: '0',
              overflow: 'visible',
            }}
          />
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a landscape architect shaping public space, planting, and built environments that last
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
