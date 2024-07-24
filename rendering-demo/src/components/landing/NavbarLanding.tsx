'use client'

import NavbarLink from '@/components/landing/NavbarLink'
import NavbarSearch from '@/components/landing/NavbarSearch'
import Submenu from '@/components/landing/Submenu'
import { ReactNode } from 'react'

const NavbarLanding = ({ children }: { children: ReactNode }) => {
  console.log('NavbarLanding - is a client component')
  return (
    <div>
      <div className="header2">NavbarLanding</div>
      <NavbarLink />
      <NavbarSearch />
      <Submenu />
      {children}
    </div>
  )
}

export default NavbarLanding
