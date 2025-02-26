'use client'
import useScrollEvent from '@/hooks/useScrollEvent'
import { useRef, type ReactNode } from 'react'

type StickyHeaderProps = {
  children: ReactNode
  className?: string
}

const StickyHeader = ({ children, className, ...props }: StickyHeaderProps) => {
  const headerRef = useRef<HTMLHeadingElement>(null)
  const { scrollY } = useScrollEvent()

  return (
    <header ref={headerRef} className={`${scrollY >= 400 ? ' header-sticky-on ' : ''}${className ?? ''}`} {...props}>
      {children}
    </header>
  )
}

export default StickyHeader
