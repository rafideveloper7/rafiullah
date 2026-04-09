'use client'

import { motion } from 'framer-motion'

export default function About({ content }) {
  const { about, highlights, techStack, stats } = content

  return (
    <section id="about" className="relative px-3 py-12 sm:px-6 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F9FAFB]/50 to-[#FFFFFF]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:gap-8 xl:gap-10 grid-cols-1 lg:grid-cols-2">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#1F2937]/10 bg-[#FFFFFF] p-5 sm:p-6 lg:p-8 shadow-lg shadow-[#1F2937]/5 hover:shadow-xl transition-all"
          >
            <div className="inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-2 rounded-full bg-[#10B981] animate-pulse" />
              About
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F2937] leading-tight">
              {about.intro || 'Tell your story through the admin panel.'}
            </h2>
            
            <div className="mt-4 sm:mt-5 lg:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-[#1F2937]/80">
              <p>{about.story || 'This section is fully controlled by backend content. Update your bio, positioning, and voice from the admin app.'}</p>
              {about.mission ? <p className="font-medium text-[#1F2937] border-l-4 border-[#10B981] pl-4">{about.mission}</p> : null}
            </div>

            {techStack.length > 0 && (
              <div className="mt-6 sm:mt-8">
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#1F2937]/70 mb-3 sm:mb-4">Tech Stack & Tools</div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {techStack.map((item) => (
                    <span key={item} className="rounded-full border border-[#10B981]/30 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-[#1F2937] hover:border-[#10B981]/50 hover:shadow-md transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Highlights & Stats */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2"
            >
              {(highlights.length > 0 ? highlights : [
                { id: 'empty-highlight', title: 'Highlights will appear here', description: 'Add positioning bullets from the admin panel.', icon: '💡' },
              ]).map((item, idx) => (
                <div 
                  key={item.id || item.title} 
                  className="group rounded-xl sm:rounded-[20px] lg:rounded-[24px] border border-[#1F2937]/10 bg-[#FFFFFF] p-4 sm:p-5 hover:border-[#10B981]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon || '💡'}</div>
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-[#1F2937] group-hover:text-[#10B981] transition-colors">
                    {item.title}
                  </div>
                  <p className="mt-2 text-[11px] sm:text-xs leading-relaxed text-[#1F2937]/70">{item.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#FF6B35]/20 bg-gradient-to-br from-[#FFFFFF] to-[#FF6B35]/5 p-5 sm:p-6 lg:p-7 shadow-lg shadow-[#FF6B35]/5 hover:shadow-xl transition-all"
            >
              <div className="inline-flex items-center rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B35] mb-4 sm:mb-5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-2 rounded-full bg-[#FF6B35] animate-pulse" />
                Key Metrics
              </div>
              
              {stats.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.slice(0, 4).map((stat, index) => (
                    <div 
                      key={stat.id || `${stat.label}-${index}`} 
                      className="group rounded-xl sm:rounded-[20px] bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 p-3 sm:p-4 lg:p-5 text-center hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#10B981] group-hover:scale-110 transition-transform">{stat.value}</div>
                      <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-[#1F2937]/70 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#1F2937]/60 text-center py-8">Add milestone stats from the admin app to populate this area.</p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
