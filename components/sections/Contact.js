'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'

export default function Contact({ content }) {
  const { site, about, social } = content
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const service = searchParams.get('service')
    const subject = searchParams.get('subject')

    if (service || subject) {
      setFormData(prev => ({
        ...prev,
        subject: subject || prev.subject,
        message: service ? `I'm interested in your ${service} service. Please provide more details.` : prev.message
      }))
    }
  }, [searchParams])

  const socialLinks = [
    { label: 'GitHub', url: social.github, icon: <FiGithub /> },
    { label: 'LinkedIn', url: social.linkedin, icon: <FiLinkedin /> },
    { label: 'Instagram', url: social.instagram, icon: <FiInstagram /> },
    { label: 'TikTok', url: social.tiktok, icon: <FaTiktok /> },
  ].filter((item) => item.url)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setStatus({
          type: 'error',
          message: data.error || data.message || 'Unable to send your message right now.',
        })
        return
      }

      setStatus({
        type: 'success',
        message: data.message || `Message sent successfully. ${about.responsePromise || 'I will get back to you soon.'}`,
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Unable to reach the backend contact service right now.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative px-3 py-12 sm:px-6 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB]/50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl relative">
        <div className="grid gap-6 sm:gap-8 lg:gap-10 xl:gap-12 grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {/* Main Contact Card */}
            <div className="rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#1F2937]/10 bg-[#FFFFFF] p-5 sm:p-6 lg:p-8 shadow-lg shadow-[#1F2937]/5 hover:shadow-xl transition-all">
              <div className="inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-2 rounded-full bg-[#10B981] animate-pulse" />
                Get in Touch
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F2937] leading-tight">
                Let's build something amazing
              </h2>
              
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#1F2937]/70">
                {about.availabilityText || 'Ready to bring your ideas to life. Let\'s talk about your next project.'}
              </p>

              {/* Contact Details */}
              <div className="mt-5 sm:mt-6 lg:mt-8 space-y-3 sm:space-y-4">
                <div className="group flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-[20px] bg-gradient-to-r from-[#10B981]/5 to-transparent p-3 sm:p-4 hover:from-[#10B981]/10 transition-all">
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#10B981] to-[#10B981]/80 p-2.5 sm:p-3 text-white shadow-md group-hover:scale-110 transition-transform">
                    <FiMail className="text-sm sm:text-base" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1F2937]/60 font-semibold">Email</div>
                    <div className="mt-0.5 text-xs sm:text-sm font-medium text-[#1F2937] break-all">{site.email || 'Add email in admin'}</div>
                  </div>
                </div>

                <div className="group flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-[20px] bg-gradient-to-r from-[#FF6B35]/5 to-transparent p-3 sm:p-4 hover:from-[#FF6B35]/10 transition-all">
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF6B35]/80 p-2.5 sm:p-3 text-white shadow-md group-hover:scale-110 transition-transform">
                    <FiPhone className="text-sm sm:text-base" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1F2937]/60 font-semibold">Phone</div>
                    <div className="mt-0.5 text-xs sm:text-sm font-medium text-[#1F2937]">{site.phone || 'Add phone in admin'}</div>
                  </div>
                </div>

                <div className="group flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-[20px] bg-gradient-to-r from-[#10B981]/5 to-transparent p-3 sm:p-4 hover:from-[#10B981]/10 transition-all">
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#10B981] to-[#10B981]/80 p-2.5 sm:p-3 text-white shadow-md group-hover:scale-110 transition-transform">
                    <FiMapPin className="text-sm sm:text-base" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1F2937]/60 font-semibold">Location</div>
                    <div className="mt-0.5 text-xs sm:text-sm font-medium text-[#1F2937]">{site.location || 'Add location in admin'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#1F2937]/10 bg-[#FFFFFF] p-5 sm:p-6 shadow-lg shadow-[#1F2937]/5 hover:shadow-xl transition-all">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#10B981] font-semibold mb-3 sm:mb-4">Connect on Social</div>
              {socialLinks.length > 0 ? (
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-medium text-[#1F2937] hover:from-[#10B981] hover:to-[#10B981] hover:text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span className="text-sm sm:text-base group-hover/social:scale-110 transition-transform">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-[#1F2937]/60">Add social links from the admin app to surface them here.</p>
              )}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#1F2937]/10 bg-[#FFFFFF] p-5 sm:p-6 lg:p-8 shadow-lg shadow-[#1F2937]/5 hover:shadow-xl transition-all"
          >
            <div className="mb-5 sm:mb-6 lg:mb-8">
              <div className="inline-flex items-center rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B35] mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-2 rounded-full bg-[#FF6B35] animate-pulse" />
                Send a Message
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#1F2937]">Tell me about your project</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#1F2937]/70">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <label className="group block">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2937]/70 group-focus-within:text-[#10B981] transition-colors">Your Name *</span>
                <input
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  required
                  className="mt-1.5 sm:mt-2 block w-full rounded-xl sm:rounded-[16px] border border-[#1F2937]/20 bg-[#F9FAFB]/50 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1F2937] outline-none transition-all focus:border-[#10B981] focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#10B981]/20"
                  placeholder="John Doe"
                />
              </label>
              
              <label className="group block">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2937]/70 group-focus-within:text-[#10B981] transition-colors">Email Address *</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  required
                  className="mt-1.5 sm:mt-2 block w-full rounded-xl sm:rounded-[16px] border border-[#1F2937]/20 bg-[#F9FAFB]/50 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1F2937] outline-none transition-all focus:border-[#10B981] focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#10B981]/20"
                  placeholder="john@example.com"
                />
              </label>
              
              <label className="group block">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2937]/70 group-focus-within:text-[#10B981] transition-colors">Subject</span>
                <input
                  value={formData.subject}
                  onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
                  className="mt-1.5 sm:mt-2 block w-full rounded-xl sm:rounded-[16px] border border-[#1F2937]/20 bg-[#F9FAFB]/50 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1F2937] outline-none transition-all focus:border-[#10B981] focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#10B981]/20"
                  placeholder="Project inquiry"
                />
              </label>
              
              <label className="group block">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2937]/70 group-focus-within:text-[#10B981] transition-colors">Message *</span>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  required
                  className="mt-1.5 sm:mt-2 block w-full rounded-xl sm:rounded-[16px] border border-[#1F2937]/20 bg-[#F9FAFB]/50 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1F2937] outline-none transition-all focus:border-[#10B981] focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#10B981]/20 resize-none"
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </label>

              {status.message ? (
                <div className={`rounded-xl sm:rounded-[16px] px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-xs font-medium ${status.type === 'success' ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20' : 'bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/20'}`}>
                  {status.message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#10B981]/90 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:from-[#FF6B35] hover:to-[#FF6B35]/90 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#10B981]/20 hover:-translate-y-0.5"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
