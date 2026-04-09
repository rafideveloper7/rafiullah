'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation({ siteName = 'Portfolio' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-[#1F2937]/10 bg-[#FFFFFF]/95 shadow-lg shadow-[#1F2937]/10 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <a href="#home" className="min-w-0 flex-shrink-0 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#1F2937] hover:text-[#10B981] transition-colors">
            <span className="block truncate">{siteName || 'Portfolio'}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs xl:text-sm font-medium text-[#1F2937] transition hover:text-[#10B981] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#10B981] after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-[#10B981] to-[#10B981]/90 px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold text-white transition-all hover:from-[#FF6B35] hover:to-[#FF6B35]/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Start a Project
            </a>
            <button
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex lg:hidden items-center justify-center rounded-full border border-[#1F2937]/20 bg-[#FFFFFF] p-2 sm:p-2.5 text-[#1F2937] shadow-sm hover:border-[#10B981]/30 hover:bg-[#10B981]/5 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="text-base sm:text-lg" /> : <FiMenu className="text-base sm:text-lg" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 z-40 rounded-2xl sm:rounded-[24px] border border-[#1F2937]/10 bg-[#FFFFFF]/95 backdrop-blur-xl shadow-2xl shadow-[#1F2937]/10 lg:hidden"
          >
            <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl sm:rounded-[16px] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#1F2937] hover:bg-[#10B981]/10 hover:text-[#10B981] transition-all"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-2 sm:mt-3 rounded-xl sm:rounded-[16px] bg-gradient-to-r from-[#10B981] to-[#10B981]/90 px-3 sm:px-4 py-2.5 sm:py-3 text-center text-xs sm:text-sm font-semibold text-white hover:from-[#FF6B35] hover:to-[#FF6B35]/90 transition-all"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
