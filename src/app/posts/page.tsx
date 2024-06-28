import Link from 'next/link'

export const metadata = {
  title: 'Posts'
}

export default function Posts() {
  return (
    <>
      <Link href="/" className="menu-link">
        Home
      </Link>
      <Link href="/posts/first" className="menu-link">
        First
      </Link>
      <Link href="/posts/second" className="menu-link">
        Second
      </Link>
      <Link href="/posts/third" className="menu-link">
        Third
      </Link>
      <h1 className="header">Posts Page</h1>
    </>
  )
}


/*
 'use client'

 import Link from 'next/link'
 import { useEffect, useState } from 'react'
 import loading from '@/app/posts/loading'

 export default function Posts() {
   const [loading, setLoading] = useState(true)
   const [posts, setPosts] = useState<any[]>([])

   useEffect(() => {
     const fetchPosts = async () => {
       try {
         await new Promise((resolve) => setTimeout(resolve, 3000))
         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
         const data = await response.json()
         setPosts(data)
       } catch (error) {
         console.error('Error loading posts', error)
       } finally {
         setLoading(false)
       }
     }

     fetchPosts()
   }, [])

   return (
     <>
       <Link href="/" className="menu-link">
         Home
       </Link>
       {loading ? (
         <___loading />
       ) : (
         <>
           <h1>Posts Page</h1>
           <ul>
             {posts.map((post) => (
               <li key={post.id}>{post.title}</li>
             ))}
           </ul>
         </>
       )}
     </>
   )
 }
*/
