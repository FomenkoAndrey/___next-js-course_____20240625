import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/posts" className="menu-link">
        Posts
      </Link>
      <Link href="/products" className="menu-link">
        Products
      </Link>
      <Link href="/login" className="menu-link">
        Login
      </Link>
      <Link href="/registration" className="menu-link">
        Registration
      </Link>
      <h1>Hello from Next.js</h1>
    </>
  )
}
