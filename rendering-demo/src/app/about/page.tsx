import { cookies } from 'next/headers'
import Navbar from '@/components/Navbar'

export default function AboutPage() {
  const themes = ['light', 'dark', 'colorful']
  const randomIndex = Math.floor(Math.random() * themes.length)
  const cookieStore = cookies()
  const theme = cookieStore.get('theme') || themes[randomIndex]

  console.log('theme:', theme)
  console.log('AboutPage - the server rendered component')

  return (
    <>
      <Navbar />
      <h1 className="header">About Page</h1>
      <h2 className="header2">{new Date().toLocaleTimeString()}</h2>
    </>
  )
}
