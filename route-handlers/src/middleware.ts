import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Мідлвар працює', request.url)

  const response = NextResponse.next()
  const theme = request.cookies.get('theme')

  if (!theme) {
    console.log('theme was not set')
    console.log('setting theme to light')
    response.cookies.set('theme', 'light')
  }

  response.headers.set('x-custom-header', 'Hello from middleware')

  return response
}


// ! variant 2
// export function middleware(request: NextRequest) {
//   console.log('Мідлвар працює', request.url)
//
//   if (request.nextUrl.pathname.includes('/info')) {
//     return NextResponse.redirect(new URL('/hello', request.url))
//   }
// }


// ! variant 1
// import { NextRequest, NextResponse } from 'next/server'
//
// export function middleware(request: NextRequest) {
//   console.log('Мідлвар працює', request.url)
//   return NextResponse.redirect(new URL('/', request.url))
// }
//
// export const config = {
//   matcher: ['/info', '/info/:path*']
// }
