import { posts } from '@/app/posts/data'
import { NextRequest } from 'next/server'
import { filterPosts, sortPosts } from '@/utils/sorting'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const sortQuery = searchParams.get('sort')
  const searchQuery = searchParams.get('query')

  let filteredPosts = posts

  if (searchQuery) {
    filteredPosts = filterPosts(posts, searchQuery)
  }

  if (sortQuery) {
    sortPosts(filteredPosts, sortQuery)
  }

  return new Response(JSON.stringify(filteredPosts), {
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function POST(request: Request) {
  const post = await request.json()
  const newPost = { id: posts.length + 1, ...post }

  posts.push(newPost)

  return new Response(JSON.stringify(newPost), {
    headers: { 'Content-Type': 'application/json' },
    status: 201
  })
}
