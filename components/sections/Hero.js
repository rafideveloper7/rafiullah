'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'

export default function Hero({ content }) {
  const { site, hero, stats } = content
  const heroStats = stats.slice(0, 3)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-3 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 xl:pt-36 xl:pb-24 bg-[#FFFFFF]">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/[0.03] via-transparent to-[#FF6B35]/[0.03]" />
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#10B981]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-[#FF6B35]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:gap-12 xl:gap-16 grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] 2xl:gap-20">
          {/* Left Content */}
          <div className="min-w-0 space-y-6 sm:space-y-7 lg:space-y-8">
            {/* Badge */}
            {hero.badge ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-2 rounded-full bg-[#10B981] animate-pulse" />
                {hero.badge}
              </motion.div>
            ) : null}

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-[1.05] text-[#1F2937] tracking-tight"
            >
              <span className="block">{hero.headlinePrimary || site.name || 'Your work, beautifully presented.'}</span>
              <span className="mt-1 sm:mt-2 block gradient-text">{hero.headlineSecondary || site.title || 'Built from your live backend content.'}</span>
            </motion.h1>

            {/* Description */}
            {hero.description ? (
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.55 }}
                className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#1F2937]/80 max-w-2xl"
              >
                {hero.description}
              </motion.p>
            ) : null}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#10B981] px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#FF6B35] hover:shadow-lg hover:shadow-[#10B981]/20 hover:-translate-y-0.5"
              >
                {hero.primaryCtaLabel || 'View Projects'}
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#1F2937]/30 bg-transparent px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-[#1F2937] transition-all hover:border-[#10B981] hover:bg-[#10B981]/5 hover:-translate-y-0.5"
              >
                {hero.secondaryCtaLabel || 'Let\'s Talk'}
              </a>
            </motion.div>

            {/* Stats */}
            {heroStats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.55 }}
                className="flex flex-wrap gap-3 sm:gap-4 pt-2"
              >
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.id || `${stat.label}-${index}`}
                    className="flex-1 min-w-[100px] sm:min-w-[120px] rounded-2xl sm:rounded-[24px] border border-[#1F2937]/10 bg-[#FFFFFF]/80 backdrop-blur-sm p-3 sm:p-4 lg:p-5 text-center hover:border-[#10B981]/30 hover:shadow-md transition-all"
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#10B981]">{stat.value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs text-[#1F2937]/70 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {/* Profile Card */}
            <div className="rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#1F2937]/10 bg-gradient-to-br from-[#FFFFFF] to-[#F9FAFB] p-4 sm:p-5 lg:p-6 shadow-lg shadow-[#1F2937]/5 backdrop-blur-sm">
              <div className="grid gap-3 sm:gap-4 lg:gap-5 grid-cols-1 sm:grid-cols-2">
                <div className="rounded-xl sm:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-[#10B981]/5 to-[#10B981]/10 border border-[#10B981]/20 p-4 sm:p-5">
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#10B981] font-semibold">Profile</div>
                  <div className="mt-2 sm:mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#1F2937] truncate">{site.name || 'Your Name'}</div>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#1F2937]/70 line-clamp-2">{site.title || 'Your title here'}</div>
                </div>
                <div className="rounded-xl sm:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-[#FF6B35] to-[#FF6B35]/80 p-4 sm:p-5 text-white">
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">Location</div>
                  <div className="mt-2 sm:mt-3 text-base sm:text-lg lg:text-xl font-bold truncate">{site.location || 'Your Location'}</div>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/85 truncate">{site.email || 'your@email.com'}</div>
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl sm:rounded-[20px] lg:rounded-[24px] border border-[#1F2937]/10 bg-[#FFFFFF]/80 backdrop-blur-sm p-3 sm:p-4 lg:p-5 hover:border-[#10B981]/30 hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl mb-2">🎨</div>
                <div className="text-xs sm:text-sm font-bold text-[#1F2937]">Design</div>
                <div className="text-[10px] sm:text-xs text-[#1F2937]/70 mt-1">Beautiful UI</div>
              </div>
              <div className="rounded-xl sm:rounded-[20px] lg:rounded-[24px] border border-[#1F2937]/10 bg-[#FFFFFF]/80 backdrop-blur-sm p-3 sm:p-4 lg:p-5 hover:border-[#FF6B35]/30 hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl mb-2">⚡</div>
                <div className="text-xs sm:text-sm font-bold text-[#1F2937]">Fast</div>
                <div className="text-[10px] sm:text-xs text-[#1F2937]/70 mt-1">Performance</div>
              </div>
              <div className="rounded-xl sm:rounded-[20px] lg:rounded-[24px] border border-[#1F2937]/10 bg-[#FFFFFF]/80 backdrop-blur-sm p-3 sm:p-4 lg:p-5 hover:border-[#10B981]/30 hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl mb-2">📱</div>
                <div className="text-xs sm:text-sm font-bold text-[#1F2937]">Responsive</div>
                <div className="text-[10px] sm:text-xs text-[#1F2937]/70 mt-1">All devices</div>
              </div>
              <div className="rounded-xl sm:rounded-[20px] lg:rounded-[24px] border border-[#1F2937]/10 bg-[#FFFFFF]/80 backdrop-blur-sm p-3 sm:p-4 lg:p-5 hover:border-[#FF6B35]/30 hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl mb-2">🚀</div>
                <div className="text-xs sm:text-sm font-bold text-[#1F2937]">Modern</div>
                <div className="text-[10px] sm:text-xs text-[#1F2937]/70 mt-1">Latest tech</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#1F2937]/50">Scroll to explore</span>
          <FiArrowDown className="text-[#10B981] animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
