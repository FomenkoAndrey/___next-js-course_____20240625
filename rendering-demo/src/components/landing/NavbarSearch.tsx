'use client'

import { useState } from 'react'

const NavbarSearch = () => {
  const [search, setSearch] = useState('Search')

  console.log('NavbarSearch - is a client component')
  return (
    <>
      <div className="header3 ml-8">NavbarSearch</div>
      <div className="header3 ml-8">Search: {search}</div>
    </>
  )
}

export default NavbarSearch
