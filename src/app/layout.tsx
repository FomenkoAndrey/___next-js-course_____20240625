import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Fomenko',
    template: '%s | Fomenko'
  },
  description: 'My next app description'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ backgroundColor: 'lightsteelblue', padding: '40px', marginBottom: '20px' }}>Header</header>
        <main style={{ backgroundColor: 'lightcoral', padding: '40px', marginBottom: '20px' }}>{children}</main>
        <footer style={{ backgroundColor: 'lightseagreen', padding: '40px', marginBottom: '20px' }}>Footer</footer>
      </body>
    </html>
  )
}
