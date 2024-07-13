import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  cookies().set('theme', 'dark', { path: '/info' })
  cookies().set('lang', 'ua', { path: '/info' })

  console.log(request.headers.get('Authorization'))
  console.log(cookies().get('lang'))
  console.log(cookies().get('theme'))

  return new Response('<h1>API GET data for Info route</h1>', {
    headers: {
      'Content-Type': 'text/html'
    }
  })
}
