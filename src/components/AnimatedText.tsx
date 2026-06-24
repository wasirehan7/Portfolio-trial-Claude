import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={{ position: 'relative', ...style }}>
      {/* invisible placeholder to hold layout */}
      <span aria-hidden style={{ visibility: 'hidden' }}>{text}</span>
      <span
        style={{
          position: 'absolute',
          inset: 0,
          display: 'inline',
        }}
        aria-label={text}
      >
        {chars.map((char, i) => {
          const start = i / chars.length
          const end = (i + 1) / chars.length

          return (
            <AnimatedChar
              key={i}
              char={char}
              start={start}
              end={end}
              scrollYProgress={scrollYProgress}
            />
          )
        })}
      </span>
    </p>
  )
}

function AnimatedChar({
  char,
  start,
  end,
  scrollYProgress,
}: {
  char: string
  start: number
  end: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
  return (
    <motion.span style={{ opacity, display: 'inline' }}>
      {char}
    </motion.span>
  )
}
