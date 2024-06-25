import Link from 'next/link'

export const metadata = {
  title: 'Posts'
}

export default function Posts() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Posts Page</h1>
    </>
  )
}
