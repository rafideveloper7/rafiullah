import { getApiBaseUrl } from '../../../lib/apiBaseUrl'

export async function POST(request) {
  try {
    const payload = await request.json()
    const response = await fetch(`${getApiBaseUrl()}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    const rawText = await response.text()
    let data = {}

    try {
      data = rawText ? JSON.parse(rawText) : {}
    } catch (error) {
      data = { error: rawText || 'Unexpected backend response.' }
    }

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Failed to connect to the backend contact service.',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
