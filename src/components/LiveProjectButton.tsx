export default function LiveProjectButton() {
  return (
    <button
      className="inline-flex items-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10"
      style={{
        padding: 'clamp(10px, 1.2vw, 14px) clamp(20px, 2.5vw, 40px)',
        fontSize: 'clamp(0.75rem, 1vw, 1rem)',
        letterSpacing: '0.1em',
      }}
    >
      Live Project
    </button>
  )
}
