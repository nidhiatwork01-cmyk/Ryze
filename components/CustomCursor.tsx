'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.id = 'cursor'
    document.body.appendChild(cursor)

    const cursorTrail = document.createElement('div')
    cursorTrail.id = 'cursor-trail'
    document.body.appendChild(cursorTrail)

    const spotlight = document.createElement('div')
    spotlight.className = 'spotlight'
    spotlight.id = 'spotlight'
    document.body.appendChild(spotlight)

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      
      setTimeout(() => {
        cursorTrail.style.left = e.clientX + 'px'
        cursorTrail.style.top = e.clientY + 'px'
      }, 50)
      
      spotlight.style.left = (e.clientX - 300) + 'px'
      spotlight.style.top = (e.clientY - 300) + 'px'

      // Particle trail
      if (Math.random() > 0.8) {
        const particle = document.createElement('div')
        particle.className = 'particle-trail'
        particle.style.left = e.clientX + 'px'
        particle.style.top = e.clientY + 'px'
        document.body.appendChild(particle)
        
        setTimeout(() => particle.remove(), 1000)
      }
    }

    // Scroll progress
    const scrollProgress = document.createElement('div')
    scrollProgress.id = 'scroll-progress'
    document.body.appendChild(scrollProgress)

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      scrollProgress.style.width = scrollPercentage + '%'
    }

    // Hover effects
    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(2)'
      cursor.style.borderColor = '#06b6d4'
    }

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)'
      cursor.style.borderColor = '#10b981'
    }

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      cursor.remove()
      cursorTrail.remove()
      spotlight.remove()
      scrollProgress.remove()
    }
  }, [])

  return null
}







