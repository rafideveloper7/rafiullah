import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'
import Navigation from '../components/Navigation'
import { fetchPortfolioContent } from '../lib/fetchPortfolioContent'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  const content = await fetchPortfolioContent()
  const title = content.site.metadataTitle || content.site.title || content.site.name || 'Portfolio'
  const description = content.site.metadataDescription || content.hero.description || 'Backend-driven portfolio'

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function RootLayout({ children }) {
  const content = await fetchPortfolioContent()

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation siteName={content.site.name} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
