export default function ContactButton() {
  return (
    <a
      href="mailto:wasirehan7@gmail.com"
      className="inline-flex items-center rounded-full font-medium uppercase tracking-widest text-white cursor-pointer"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
        padding: 'clamp(10px, 1.5vw, 16px) clamp(24px, 3vw, 48px)',
        fontSize: 'clamp(0.7rem, 1.1vw, 0.95rem)',
        letterSpacing: '0.12em',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      Contact Me
    </a>
  )
}
