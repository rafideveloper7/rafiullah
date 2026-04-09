'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Testimonials({ testimonials }) {
  const items = Array.isArray(testimonials) ? testimonials : []

  return (
    <section className="relative overflow-hidden px-3 py-12 sm:px-6 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F9FAFB]/50 to-[#FFFFFF]">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-[#FF6B35]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-2 rounded-full bg-[#10B981] animate-pulse" />
            Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#1F2937] leading-tight">
            What clients say
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-[#1F2937]/70">
            Honest feedback from clients who trusted me to deliver beautiful, usable products.
          </p>
        </div>

        {/* Testimonials Slider */}
        {items.length > 0 ? (
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              grabCursor
              navigation={{
                nextEl: '.testimonials-next',
                prevEl: '.testimonials-prev',
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 1.15, spaceBetween: 18 },
                768: { slidesPerView: 1.4, spaceBetween: 20 },
                1024: { slidesPerView: 1.75, spaceBetween: 22 },
                1280: { slidesPerView: 2, spaceBetween: 24 },
                1536: { slidesPerView: 2.25, spaceBetween: 28 },
              }}
              className="pb-14 sm:pb-16 lg:pb-18"
            >
              {items.map((item, index) => {
                if (!item?.quote) return null

                return (
                  <SwiperSlide key={item.id || index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ delay: index * 0.05, ease: 'easeOut' }}
                      className="h-full flex flex-col rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#1F2937]/10 bg-gradient-to-br from-[#FFFFFF] to-[#F9FAFB] p-5 sm:p-6 lg:p-8 shadow-lg shadow-[#1F2937]/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Quote Icon & Header */}
                      <div className="mb-4 sm:mb-5 lg:mb-6 flex items-center gap-2 sm:gap-3">
                        <div className="text-3xl sm:text-4xl lg:text-5xl text-[#10B981]/20 font-serif leading-none">"</div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] lg:text-xs font-semibold text-[#10B981]">
                          <span className="text-sm sm:text-base lg:text-lg">💬</span>
                          Client Feedback
                        </div>
                      </div>

                      {/* Quote Text */}
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#1F2937] italic flex-grow">
                        {item.quote}
                      </p>

                      {/* Client Info */}
                      <div className="mt-5 sm:mt-6 lg:mt-8 pt-4 sm:pt-5 border-t border-[#1F2937]/10">
                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Avatar Placeholder */}
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#10B981] to-[#FF6B35] flex items-center justify-center text-white text-base sm:text-lg font-bold shadow-md">
                            {(item.name || 'A').charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm sm:text-base lg:text-lg font-bold text-[#1F2937]">
                              {item.name || 'Anonymous'}
                            </div>
                            <div className="mt-0.5 text-[10px] sm:text-xs lg:text-sm text-[#1F2937]/70 font-medium">
                              {[item.role, item.company].filter(Boolean).join(' · ') || 'Client'}
                            </div>
                          </div>
                          {/* Star Rating Visual */}
                          <div className="ml-auto flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-[#FF6B35] text-sm sm:text-base">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {/* Navigation Arrows */}
            <button className="testimonials-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#10B981]/90 text-white shadow-lg shadow-[#10B981]/30 hover:from-[#FF6B35] hover:to-[#FF6B35]/90 transition-all hover:scale-110 -ml-4 sm:-ml-6 lg:-ml-8">
              <span className="sr-only">Previous testimonial</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <button className="testimonials-next absolute right-0 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#10B981]/90 text-white shadow-lg shadow-[#10B981]/30 hover:from-[#FF6B35] hover:to-[#FF6B35]/90 transition-all hover:scale-110 -mr-4 sm:-mr-6 lg:-mr-8">
              <span className="sr-only">Next testimonial</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        ) : (
          <div className="rounded-2xl sm:rounded-[28px] border-2 border-dashed border-[#1F2937]/20 bg-gradient-to-br from-[#F9FAFB] to-[#FFFFFF] p-8 sm:p-10 lg:p-12 text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">💬</div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1F2937] mb-2">Testimonials Coming Soon</h3>
            <p className="text-sm sm:text-base text-[#1F2937]/60">Add reviews to make this section feel premium and build trust.</p>
          </div>
        )}
      </div>
    </section>
  )
}