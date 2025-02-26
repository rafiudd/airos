'use client'
import { useEffect, useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const BackToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.scrollY >= 800) setShowScrollTop(true)
    else setShowScrollTop(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      role="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`arrow-none back-top${showScrollTop ? ' back-top-show' : ''} `}>
      <FaArrowUpLong />
    </div>
  )
}

export default BackToTop
