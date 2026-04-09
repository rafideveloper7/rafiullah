import { defaultPortfolioContent } from './defaultPortfolioContent'

export const siteConfig = {
  name: defaultPortfolioContent.site.name,
  title: defaultPortfolioContent.site.title,
  email: defaultPortfolioContent.site.email,
  phone: defaultPortfolioContent.site.phone,
  location: defaultPortfolioContent.site.location,
  social: defaultPortfolioContent.social,
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  },
}

export const projectsData = defaultPortfolioContent.projects
export const testimonialsData = defaultPortfolioContent.testimonials
export const servicesData = defaultPortfolioContent.services
export const statsData = defaultPortfolioContent.stats
export const skillsData = {
  frontend: [],
  backend: [],
  devops: [],
}
