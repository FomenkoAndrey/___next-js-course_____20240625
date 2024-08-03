'use client'

import { useEffect } from 'react'

interface ErrorPageProps {
  error: Error
}

export default function ErrorPage({ error }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="absolute -z-10 top-0 right-0 bottom-0 left-0 flex items-center justify-center h-screen bg-white bg-opacity-50">
      <div className="text-3xl text-red-500">Error fetching users data</div>
    </div>
  )
}
