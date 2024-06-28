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
        <header className="px-5 py-14 bg-blue-100">
          <div className="max-w-4xl mx-auto text-center text-2xl">Header</div>
        </header>
        <main className="px-5 py-14">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
        <footer className="px-5 py-14 bg-indigo-400">
          <div className="max-w-4xl mx-auto text-center text-2xl">Footer</div>
        </footer>
      </body>
    </html>
  )
}
