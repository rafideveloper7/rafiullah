export const defaultPortfolioContent = {
  site: {
    name: '',
    title: '',
    location: '',
    email: '',
    phone: '',
    metadataTitle: '',
    metadataDescription: '',
  },
  hero: {
    badge: '',
    headlinePrimary: '',
    headlineSecondary: '',
    description: '',
    primaryCtaLabel: '',
    secondaryCtaLabel: '',
  },
  about: {
    intro: '',
    story: '',
    mission: '',
    availabilityText: '',
    responsePromise: '',
  },
  social: {
    github: '',
    linkedin: '',
    instagram: '',
    tiktok: '',
  },
  stats: [],
  highlights: [],
  techStack: [],
  services: [],
  projects: [],
  testimonials: [],
}

export function normalizePortfolioContent(content = {}) {
  return {
    ...defaultPortfolioContent,
    ...content,
    site: {
      ...defaultPortfolioContent.site,
      ...(content.site || {}),
    },
    hero: {
      ...defaultPortfolioContent.hero,
      ...(content.hero || {}),
    },
    about: {
      ...defaultPortfolioContent.about,
      ...(content.about || {}),
    },
    social: {
      ...defaultPortfolioContent.social,
      ...(content.social || {}),
    },
    stats: Array.isArray(content.stats) ? content.stats : [],
    highlights: Array.isArray(content.highlights) ? content.highlights : [],
    techStack: Array.isArray(content.techStack) ? content.techStack : [],
    services: Array.isArray(content.services) ? content.services : [],
    projects: Array.isArray(content.projects) ? content.projects : [],
    testimonials: Array.isArray(content.testimonials) ? content.testimonials : [],
  }
}
