'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavBar } from './NavBar'

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#eab308] rounded-full flex items-center justify-center shadow-md">
              <img
                src="https://res.cloudinary.com/docvcxodh/image/upload/v1753931682/d1a5d825-4848-40c7-9e49-e448bec0e176_fb5c1t.jpg"
                alt="Logo"
                className="object-cover rounded-full w-12 h-12"
              />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                Одод Урлан
              </h1>
              <p className="text-sm text-gray-500">
                Монгол дээл хувцасны урлан
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <Link
              href="#products"
              className="hover:text-[#eab308] transition-colors"
            >
              Бүтээгдэхүүн
            </Link>
            <Link
              href="/custom"
              className="hover:text-[#eab308] transition-colors"
            >
              Захиалга
            </Link>
            <Link
              href="#about"
              className="hover:text-[#eab308] transition-colors"
            >
              Бидний тухай
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#eab308] transition-colors"
            >
              Холбоо барих
            </Link>
          </nav>

          <NavBar />
        </div>
      </div>
    </header>
  )
}
