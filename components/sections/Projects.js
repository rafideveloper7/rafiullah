'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Projects({ projects }) {
  const projectList = Array.isArray(projects) ? projects : []

  return (
    <section id="projects" className="relative overflow-hidden px-3 py-12 sm:px-6 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F9FAFB]/30 to-[#FFFFFF]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#FF6B35]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-2 rounded-full bg-[#10B981] animate-pulse" />
            Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#1F2937] leading-tight">
            Real work. Real results.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-[#1F2937]/70">
            See how I've helped businesses build and grow online with polished, production-ready solutions.
          </p>
        </div>

        {/* Projects Slider */}
        {projectList.length > 0 ? (
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              grabCursor
              navigation={{
                nextEl: '.projects-next',
                prevEl: '.projects-prev',
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              loop
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 1.15, spaceBetween: 18 },
                768: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 22 },
                1280: { slidesPerView: 2.25, spaceBetween: 24 },
                1536: { slidesPerView: 2.5, spaceBetween: 28 },
              }}
              className="pb-14 sm:pb-16 lg:pb-18"
            >
              {projectList.map((project, index) => {
                if (!project?.name) return null

                return (
                  <SwiperSlide key={project.id || index}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ delay: index * 0.06, ease: 'easeOut' }}
                      className="group h-full flex flex-col overflow-hidden rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#1F2937]/10 bg-[#FFFFFF] shadow-lg shadow-[#1F2937]/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                      {/* Image Section */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-[#10B981] via-[#FFFFFF] to-[#FF6B35]">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.name}
                            className="h-48 sm:h-56 lg:h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-48 sm:h-56 lg:h-64 items-center justify-center text-sm font-semibold text-[#1F2937]/40 bg-gradient-to-br from-[#10B981]/10 to-[#FF6B35]/10">
                            <div className="text-center">
                              <div className="text-4xl sm:text-5xl mb-2">💼</div>
                              <div className="text-xs sm:text-sm">Project Preview</div>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/80 via-[#1F2937]/20 to-transparent" />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 rounded-full bg-[#FFFFFF]/95 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1F2937] shadow-lg">
                          Featured
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F2937] group-hover:text-[#10B981] transition-colors leading-tight">
                            {project.name}
                          </h3>
                          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#1F2937]/70 line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        {Array.isArray(project.stack) && project.stack.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.stack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-[#10B981]/30 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] lg:text-xs font-medium text-[#1F2937] hover:border-[#10B981]/50 transition-colors cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.stack.length > 4 && (
                              <span className="rounded-full bg-[#1F2937]/5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-medium text-[#1F2937]/60">
                                +{project.stack.length - 4}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="mt-auto pt-3 sm:pt-4 border-t border-[#1F2937]/10 flex flex-wrap gap-2 sm:gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#10B981] px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold text-white hover:bg-[#FF6B35] hover:shadow-lg transition-all hover:-translate-y-0.5 flex-1 sm:flex-initial"
                            >
                              <FiExternalLink className="text-xs sm:text-sm" />
                              <span>Live Demo</span>
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/code inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-[#1F2937]/20 bg-[#FFFFFF] px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold text-[#1F2937] hover:border-[#10B981] hover:bg-[#10B981]/5 transition-all hover:-translate-y-0.5 flex-1 sm:flex-initial"
                            >
                              <FiGithub className="text-xs sm:text-sm" />
                              <span>Code</span>
                            </a>
                          )}

                          <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-[#FF6B35]/10 to-[#FF6B35]/5 px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold text-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FF6B35] hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg flex-1 sm:flex-initial"
                          >
                            Contact
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {/* Navigation Arrows */}
            <button className="projects-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#10B981]/90 text-white shadow-lg shadow-[#10B981]/30 hover:from-[#FF6B35] hover:to-[#FF6B35]/90 transition-all hover:scale-110 -ml-4 sm:-ml-6 lg:-ml-8">
              <span className="sr-only">Previous project</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <button className="projects-next absolute right-0 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#10B981]/90 text-white shadow-lg shadow-[#10B981]/30 hover:from-[#FF6B35] hover:to-[#FF6B35]/90 transition-all hover:scale-110 -mr-4 sm:-mr-6 lg:-mr-8">
              <span className="sr-only">Next project</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        ) : (
          <div className="rounded-2xl sm:rounded-[28px] border-2 border-dashed border-[#1F2937]/20 bg-gradient-to-br from-[#F9FAFB] to-[#FFFFFF] p-8 sm:p-10 lg:p-12 text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">🎨</div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1F2937] mb-2">Projects Coming Soon</h3>
            <p className="text-sm sm:text-base text-[#1F2937]/60">Add projects in admin to showcase your amazing work.</p>
          </div>
        )}
      </div>
    </section>
  )
}