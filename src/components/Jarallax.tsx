'use client'
import type { JarallaxOptions } from 'jarallax'
import { jarallax, jarallaxVideo } from 'jarallax'
import { ReactNode, useEffect, useRef, type CSSProperties, type ElementType } from 'react'

import 'jarallax/dist/jarallax.min.css'

jarallaxVideo()

type JarallaxPropsType = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  options?: JarallaxOptions
  tag?: ElementType
}

const Jarallax = ({ children, className, style, options, tag = 'div' }: JarallaxPropsType) => {
  const Tag = tag
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current) jarallax(ref.current, { speed: 0.6, ...options })
  }, [])

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  )
}

export default Jarallax
