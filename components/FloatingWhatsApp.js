'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiMessageCircle, FiX } from 'react-icons/fi'

export default function FloatingWhatsApp({ phoneNumber = '923365091321' }) {
  const [isOpen, setIsOpen] = useState(false)
  const normalizedPhoneNumber = (phoneNumber || '').replace(/\D/g, '')
  const message = encodeURIComponent("Hi Rafi! I'm interested in working with you.")

  if (!normalizedPhoneNumber) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      >
        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle WhatsApp chat"
        >
          {/* Pulse Ring */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#FF6B35] rounded-full"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
          
          {/* Button Icon */}
          <motion.div 
            className="relative bg-gradient-to-r from-[#10B981] to-[#FF6B35] p-2.5 sm:p-3 lg:p-3.5 rounded-full shadow-xl shadow-[#10B981]/30 group-hover:shadow-2xl group-hover:shadow-[#10B981]/40 transition-all"
            whileHover={{ rotate: 5 }}
          >
            {isOpen ? (
              <FiX size={20} className="text-white sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            ) : (
              <FiMessageCircle size={20} className="text-white sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            )}
          </motion.div>
        </motion.button>

        {/* WhatsApp Popup */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="absolute bottom-14 sm:bottom-16 lg:bottom-20 right-0 w-[min(18rem,calc(100vw-1.5rem))] sm:w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl sm:rounded-[20px] bg-white shadow-2xl shadow-[#1F2937]/20 border border-[#1F2937]/10"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#10B981] to-[#FF6B35] p-3 sm:p-4 text-white">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm sm:text-base font-bold">
                    R
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Chat with Rafi</h3>
                    <p className="text-xs sm:text-sm opacity-90">Typically replies within 5 min</p>
                  </div>
                </div>
              </div>
              
              {/* Body */}
              <div className="p-3 sm:p-4 bg-[#F9FAFB]">
                <div className="bg-white rounded-xl sm:rounded-[16px] p-3 sm:p-4 mb-3 sm:mb-4 shadow-sm border border-[#1F2937]/5">
                  <p className="text-xs sm:text-sm text-[#1F2937]">
                    👋 Hi there! Thanks for visiting my portfolio. How can I help you today?
                  </p>
                </div>
                
                <a
                  href={`https://wa.me/${normalizedPhoneNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#10B981] to-[#10B981]/90 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-[16px] font-semibold text-xs sm:text-sm hover:from-[#FF6B35] hover:to-[#FF6B35]/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <FiMessageCircle className="text-sm sm:text-base" />
                  Start Conversation
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
