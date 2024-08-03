'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/users', label: 'Users' },
    { href: '/products-client', label: 'Products Client' },
    { href: '/products', label: 'Products' },
    { href: '/products/api', label: 'Products Api' }
  ]

  return (
    <nav className="mt-4 mb-10">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className={pathname == href ? 'link active' : 'link'}>
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
