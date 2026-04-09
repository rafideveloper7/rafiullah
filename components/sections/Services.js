'use client'

import { motion } from 'framer-motion'

export default function Services({ services }) {
  const serviceList = Array.isArray(services) ? services : []

  return (
    <section id="services" className="relative px-3 py-12 sm:px-6 sm:py-16 lg:py-20 xl:py-24 bg-[#FFFFFF]">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] via-[#FF6B35] to-[#10B981]" />
      
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-2 rounded-full bg-[#10B981] animate-pulse" />
            Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#1F2937] leading-tight">
            What I Offer
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-[#1F2937]/70">
            Solutions designed to grow your business. Choose the service that fits your goals and get results fast.
          </p>
        </div>

        {/* Services Grid */}
        {serviceList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {serviceList.map((service, index) => (
              <motion.div
                key={service.id || `${service.name}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
                className="group relative rounded-2xl sm:rounded-[24px] lg:rounded-[28px] border border-[#1F2937]/10 bg-[#FFFFFF] p-5 sm:p-6 lg:p-7 shadow-md shadow-[#1F2937]/5 hover:shadow-xl hover:border-[#10B981]/30 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Service Number Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#10B981] to-[#FF6B35] flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>

                {/* Service Name */}
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-2 sm:mb-3">Service</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F2937] group-hover:text-[#10B981] transition-colors">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#1F2937]/70 flex-grow">
                  {service.description}
                </p>

                {/* Keypoints */}
                {(service.keypoints || []).length > 0 && (
                  <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                    {service.keypoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 rounded-lg bg-gradient-to-r from-[#10B981]/5 to-transparent px-3 py-2 text-[10px] sm:text-xs text-[#1F2937]/80">
                        <span className="text-[#10B981] mt-0.5 flex-shrink-0">✓</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Price & CTA */}
                <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-[#1F2937]/10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  {service.price ? (
                    <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#10B981] to-[#10B981]/80 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-white shadow-md shadow-[#10B981]/20">
                      {service.price}
                    </div>
                  ) : null}

                  <a
                    href={`/?service=${encodeURIComponent(service.name)}&subject=${encodeURIComponent(`Inquiry about ${service.name}`)}#contact`}
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-[#10B981]/10 px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold text-[#10B981] hover:bg-[#10B981] hover:text-white transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    Get Started
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl sm:rounded-[28px] border-2 border-dashed border-[#1F2937]/20 bg-gradient-to-br from-[#F9FAFB] to-[#FFFFFF] p-8 sm:p-10 lg:p-12 text-center">
            <div className="text-4xl sm:text-5xl mb-4">🚀</div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] mb-2">Services Coming Soon</h3>
            <p className="text-sm sm:text-base text-[#1F2937]/60">Add services from the admin app to publish them here.</p>
          </div>
        )}
      </div>
    </section>
  )
}
