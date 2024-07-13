import Link from 'next/link'

export default function ThirdPost() {
  return (
    <>
      <h1 className="header">Third Post Page</h1>
      <Link href="/posts/first" className="text-blue-700">
        First Post
      </Link>
      <Link href="/info" className="text-blue-700 mx-4">
        Info
      </Link>
    </>
  )
}
