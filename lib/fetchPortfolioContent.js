import { normalizePortfolioContent } from './defaultPortfolioContent'
import { getApiBaseUrl } from './apiBaseUrl'

export async function fetchPortfolioContent() {
  const baseUrl = getApiBaseUrl()

  try {
    const response = await fetch(`${baseUrl}/api/content/public`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    })

    if (!response.ok) {
      return normalizePortfolioContent()
    }

    const data = await response.json()
    return normalizePortfolioContent(data.content)
  } catch (error) {
    return normalizePortfolioContent()
  }
}
