'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Maturity Model', href: '/#maturity-model' },
    { label: 'AI Agents', href: '/ai-agents' },
    { label: 'Assessment', href: '/assessment' },
    { label: 'Personas', href: '/persona/security-leader' },
    { label: 'Deep Dives', href: '/deep-dive/build-vs-buy' },
    { label: 'Glossary', href: '/glossary' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-navy-900 font-display font-semibold text-lg"
          >
            <span className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white text-sm font-bold">
              AG
            </span>
            <span className="hidden sm:inline">The Authorization Gap</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy-600 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/assessment" className="btn-primary text-sm py-2">
              Take Assessment
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-navy-600 hover:text-navy-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-navy-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  href="/assessment"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Take Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
