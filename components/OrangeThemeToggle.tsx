'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function OrangeThemeToggle() {
  const [isOrangeTheme, setIsOrangeTheme] = useState(false)

  useEffect(() => {
    if (isOrangeTheme) {
      document.documentElement.classList.add('orange-theme')
    } else {
      document.documentElement.classList.remove('orange-theme')
    }
  }, [isOrangeTheme])

  return (
    <button
      onClick={() => setIsOrangeTheme(!isOrangeTheme)}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
      aria-label="Toggle orange theme"
    >
      {isOrangeTheme ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}







