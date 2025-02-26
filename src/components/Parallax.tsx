'use client'
import { ReactNode, useEffect } from 'react'

const Parallax = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.addEventListener('mousemove', (event: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('.parallax-wrap .layer').forEach((shift: HTMLElement) => {
        const position = shift.getAttribute('data-depth')
        if (position) {
          const x = (window.innerWidth - event.pageX * Number(position)) / 90
          const y = (window.innerHeight - event.pageY * Number(position)) / 90
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`
        }
      })
    })
  }, [])

  return <>{children}</>
}

export default Parallax
