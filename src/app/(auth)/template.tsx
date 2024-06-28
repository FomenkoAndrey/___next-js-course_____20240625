'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { name: 'Registration', href: '/registration' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' }
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('')
  const pathname = usePathname()

  return (
    <div>
      <Link href="/" className="menu-link">
        Home
      </Link>

      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value.trim())} />
      </div>

      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`font-bold mr-4 border-2 p-2 mb-5 inline-block ${isActive ? 'bg-gray-100' : ''}`}
          >
            {link.name}
          </Link>
        )
      })}
      {children}
    </div>
  )
}
