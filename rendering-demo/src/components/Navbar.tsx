'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/dashboard', label: 'Dashboard' }
  ]

  return (
    <nav className="mt-4 mb-10">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={pathname === link.href ? 'link active' : 'link'}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
