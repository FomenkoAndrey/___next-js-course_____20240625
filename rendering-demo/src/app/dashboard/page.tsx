'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function DashboardPage() {
  const [title, setTitle] = useState('Dashboard Page')

  console.log('DashboardPage - the client rendered component')

  return (
    <>
      <Navbar />
      <h1 className="header">{title}</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
    </>
  )
}
