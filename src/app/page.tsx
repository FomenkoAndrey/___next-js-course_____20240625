import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/posts">Posts</Link>
      <Link href="/products">Products</Link>
      <h1>Hello from Next.js</h1>
    </>
  )
}
